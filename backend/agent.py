import asyncio
import logging
from livekit.agents import Agent, AutoSubscribe, JobContext
from livekit.agents import cli, llm
from livekit.agents.voice import VoiceSession
from livekit.agents.stt import openai as openai_stt
from livekit.agents.tts import openai as openai_tts
from livekit.agents.llm import openai as openai_llm
from livekit.agents.vad import silero
from livekit.agents.contrib import bithuman

from prompts import AGENT_INSTRUCTION
from tools import open_url

logger = logging.getLogger(__name__)

class Assistant(Agent):
    def __init__(self):
        super().__init__(instructions=AGENT_INSTRUCTION, tools=[open_url])

    async def on_start(self, session: VoiceSession):
        logger.info("Assistant started with session %s", session.session_id)

async def entrypoint(ctx: JobContext):
    logger.info("Starting Mai agent...")

    # Configure voice session
    stt = openai_stt.STT(language="vi")
    llm_client = openai_llm.LLM()
    tts = openai_tts.TTS()
    vad = silero.VAD()

    voice = VoiceSession(stt=stt, llm=llm_client, tts=tts, vad=vad, agent_cls=Assistant,
                         auto_subscribe=AutoSubscribe.AUDIO_ONLY)

    # Create avatar session (placeholder wiring; real integration may differ)
    avatar = bithuman.AvatarSession()

    await voice.start(ctx)  # start the voice session

    # pipe audio to avatar (pseudo / simplified)
    voice.audio_out.subscribe(lambda frame: avatar.handle_audio(frame))

    await asyncio.Event().wait()  # keep running

if __name__ == "__main__":
    cli.run_app(entrypoint)
