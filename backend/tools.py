from livekit.agents import llm
from livekit.agents.llm import tool
import logging

logger = logging.getLogger(__name__)

@tool()
async def open_url(url: str):
    """Yêu cầu giao diện người dùng chuyển hướng đến một phần cụ thể của trang web.

    Tham số:
      url: Anchor hoặc đường dẫn (ví dụ '#products', '#offers').
    """
    logger.info(f"Tool open_url called with: {url}")
    return f"Đang điều hướng đến {url}"
