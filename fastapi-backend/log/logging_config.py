import logging
from logging.config import dictConfig
from logging.handlers import RotatingFileHandler
import sys
import asyncio
from concurrent.futures import ThreadPoolExecutor

# ============================================================
# 🧠 WHY THIS EXISTS:
# Standard Python logging is synchronous (blocking I/O).
# In async apps (like FastAPI running on Granian or Uvicorn),
# blocking calls (e.g., writing to file or console) can pause
# the event loop and reduce throughput.
# So we offload logging writes to a thread executor asynchronously.
# ============================================================


# -------------------------
# 1️⃣ Define Base Config
# -------------------------
LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,

    "formatters": {
        "default": {
            "format": "[%(asctime)s] [%(levelname)s] [%(name)s:%(lineno)d] %(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
        "json": {
            "format": '{"timestamp": "%(asctime)s", "level": "%(levelname)s", "logger": "%(name)s", "message": "%(message)s"}',
            "datefmt": "%Y-%m-%dT%H:%M:%S",
        },
    },

    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "default",
            "stream": "ext://sys.stdout",  # ensures logs go to stdout (important for Docker/Kubernetes)
        },
        "file": {
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "default",
            "filename": "log/app.log",
            "maxBytes": 5 * 1024 * 1024,  # 5 MB
            "backupCount": 10,
            "encoding": "utf8",
        },
    },

    "loggers": {
        # Integrate with uvicorn/granian internals (so all logs stay unified)
        "uvicorn": {"handlers": ["console"], "level": "INFO"},
        "uvicorn.error": {"handlers": ["console"], "level": "INFO", "propagate": True},
        "uvicorn.access": {"handlers": ["console"], "level": "INFO", "propagate": False},
        "granian": {"handlers": ["console"], "level": "INFO", "propagate": True},

        # FastAPI internal logs
        "fastapi": {"handlers": ["console"], "level": "INFO", "propagate": False},

        # Your application-specific logger
        "app": {"handlers": ["console", "file"], "level": "DEBUG", "propagate": False},
    },
}


# -------------------------
# 2️⃣ Apply Config
# -------------------------
dictConfig(LOGGING_CONFIG)
logger = logging.getLogger("app")


# -------------------------
# 3️⃣ Async Logging Adapter
# -------------------------
# This lets you safely log inside async functions without blocking.

_executor = ThreadPoolExecutor(max_workers=2)

async def async_log(level: str, message: str):
    """
    Asynchronous non-blocking logger.
    Offloads I/O to a background thread so the event loop isn't blocked.
    """
    loop = asyncio.get_event_loop()
    func = getattr(logger, level.lower(), None)

    if func is None:
        raise ValueError(f"Invalid log level: {level}")

    await loop.run_in_executor(_executor, func, message)
