import logging
from logging.config import dictConfig
import asyncio
from concurrent.futures import ThreadPoolExecutor
from typing import Any, Dict, Literal, Optional



# -------------------------
# 1️⃣ Define Base Config
# -------------------------
LOGGING_CONFIG: Dict[str, Any] = {
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
            "stream": "ext://sys.stdout",
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
        "uvicorn": {"handlers": ["console"], "level": "INFO"},
        "uvicorn.error": {"handlers": ["console"], "level": "INFO", "propagate": True},
        "uvicorn.access": {"handlers": ["console"], "level": "INFO", "propagate": False},
        "granian": {"handlers": ["console"], "level": "INFO", "propagate": True},
        "fastapi": {"handlers": ["console"], "level": "INFO", "propagate": False},
        "app": {"handlers": ["console", "file"], "level": "DEBUG", "propagate": False},
    },
}


# -------------------------
# 2️⃣ Apply Config
# -------------------------
dictConfig(LOGGING_CONFIG)
logger: logging.Logger = logging.getLogger("app")


# -------------------------
# 3️⃣ Async Logging Adapter
# -------------------------
_executor: ThreadPoolExecutor = ThreadPoolExecutor(max_workers=2)

# Define allowable logging levels for static type checking
LogLevel = Literal["debug", "info", "warning", "error", "critical"]


async def async_log(level: LogLevel, message: str) -> None:
    """
    Asynchronous, non-blocking logger.
    Safely logs messages from async functions by offloading
    I/O operations to a thread pool executor.

    Args:
        level (LogLevel): Logging level, e.g., 'info', 'error'.
        message (str): The message to log.

    Raises:
        ValueError: If an invalid log level is provided.
    """
    loop = asyncio.get_event_loop()
    func: Optional[Any] = getattr(logger, level.lower(), None)

    if func is None or not callable(func):
        raise ValueError(f"Invalid log level: {level}")

    await loop.run_in_executor(_executor, func, message)
