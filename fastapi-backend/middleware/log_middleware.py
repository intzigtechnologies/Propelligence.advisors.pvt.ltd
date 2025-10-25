from typing import Callable, Awaitable
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

from log.logging_config import async_log


class LogRequestsMiddleware(BaseHTTPMiddleware):
    async def dispatch(
        self,
        request: Request,
        call_next: Callable[[Request], Awaitable[Response]]
    ) -> Response:
        #if host ip is available then that else unknow client
        client_host = request.client.host if request.client else "unknown client"

        # Log incoming request
        await async_log(
            "info",
            f"Route visited: '{request.url.path}' | Method: {request.method} | IP: {client_host}"
        )

        # Process the request
        response = await call_next(request)

        # Log the response status
        await async_log(
            "info",
            f"Response status for '{request.url.path}' | Status Code: {response.status_code}"
        )

        return response
