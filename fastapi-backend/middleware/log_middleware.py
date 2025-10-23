from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from log.logging_config import async_log

class LogRequestsMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Log incoming request
        await async_log(
            "info",
            f"Route visited: '{request.url.path}' | Method: {request.method} | IP: {request.client.host}"
        )

        # Process request
        response = await call_next(request)

        # Log response status
        await async_log(
            "info",
            f"Response status for '{request.url.path}'| Status Code: {response.status_code}"
        )
        return response