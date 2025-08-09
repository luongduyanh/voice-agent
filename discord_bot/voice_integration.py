import discord
from discord.ext import commands
import asyncio

from discord.ext.commands import bot


@bot.command(name='ai_assistant')
async def ai_assistant(ctx):
    """Kết nối AI assistant vào voice channel"""
    if ctx.author.voice:
        channel = ctx.author.voice.channel
        voice_client = await channel.connect()
        
        # Tích hợp với backend agent
        await start_ai_agent_for_discord(voice_client, ctx.author.id)
        
        await ctx.send("🤖 AI Assistant đã tham gia voice channel!")
    else:
        await ctx.send("Bạn cần vào voice channel trước!")

async def start_ai_agent_for_discord(voice_client, user_id):
    """Khởi động AI agent cho Discord voice"""
    # Kết nối với backend agent tương tự như LiveKitWidget
    pass