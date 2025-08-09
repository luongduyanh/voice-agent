import discord
from discord.ext import commands
import asyncio
from livekit import api
import os

from discord_bot.bot import bot


class LiveKitDiscordBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        super().__init__(command_prefix='!', intents=intents)
        
    async def create_voice_room(self, user_name: str):
        """Tạo phòng voice LiveKit cho user Discord"""
        token = api.AccessToken(
            os.getenv("LIVEKIT_API_KEY"), 
            os.getenv("LIVEKIT_API_SECRET")
        ).with_identity(user_name)\
         .with_name(user_name)\
         .with_grants(api.VideoGrants(
             room_join=True,
             room=f"discord-{user_name}"
         ))
        
        return token.to_jwt()

@bot.command(name='voice_support')
async def voice_support(ctx):
    """Tạo link voice support cho user"""
    token = await bot.create_voice_room(ctx.author.name)
    room_url = f"{os.getenv('FRONTEND_URL')}/voice?token={token}"
    
    embed = discord.Embed(
        title="🎤 Voice Support",
        description=f"Click [here]({room_url}) to join voice support",
        color=0x00ff00
    )
    await ctx.send(embed=embed)