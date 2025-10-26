from fastapi import FastAPI
from rich.console import Console
from rich.panel import Panel
from log.logging_config import async_log
from contextlib import asynccontextmanager
from middleware.log_middleware import LogRequestsMiddleware

console = Console()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    console.print(Panel("[bold green]🚀 FastAPI app started successfully![/bold green]", expand=False))
    await async_log("info", "🚀 FastAPI app started successfully")

    yield  #app running during this 

    # Shutdown
    console.print(Panel("[bold red]🛑 FastAPI app shutting down[/bold red]", expand=False))
    await async_log("info", "🛑 FastAPI app shutting down")


app = FastAPI(lifespan=lifespan)
app.add_middleware(LogRequestsMiddleware)


@app.get("/")
async def root():
    return {"message": "Hello Propelligence Advisors Pvt. Ltd",
            "server_status":"Server is running smoothly"}
    
    

    

