import os

import discord
from discord.ext.commands import bot

from discord_bot.bot import generate_session_token


@bot.command(name='web_support')
async def web_support(ctx):
    """Tạo temporary web interface cho user"""
    # Tạo session token
    session_token = generate_session_token(ctx.author.id)
    
    # Tạo temporary URL với LiveKitWidget
    support_url = f"{os.getenv('FRONTEND_URL')}/discord-support?session={session_token}"
    
    embed = discord.Embed(
        title="💬 AI Voice Assistant",
        description=f"[Click here to start voice chat]({support_url})",
        color=0x5865F2
    )
    
    await ctx.send(embed=embed, ephemeral=True)