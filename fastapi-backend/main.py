from fastapi import FastAPI
from log.logging_config import async_log
from contextlib import asynccontextmanager
from middleware.log_middleware import LogRequestsMiddleware



@asynccontextmanager
async def lifespan(app: FastAPI):
    await async_log("info", "🚀 FastAPI app started successfully")
    yield  # <-- app runs during this period
    await async_log("info", "🛑 FastAPI app shutting down")

app = FastAPI(lifespan=lifespan)
app.add_middleware(LogRequestsMiddleware)


@app.get("/")
async def root():
    return {"message": "Hello Propelligence Advisors Pvt. Ltd",
            "server_status":"Server is running smoothly"}
    
    
    
    
    
    
    
    
    

