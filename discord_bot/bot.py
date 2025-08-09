import discord
from discord.ext import commands
import os
from dotenv import load_dotenv
import uuid
import time

load_dotenv()

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

# Store session tokens
active_sessions = {}

def generate_session_token(user_id):
    """Tạo session token cho user"""
    token = str(uuid.uuid4())
    active_sessions[token] = {
        'user_id': user_id,
        'created_at': time.time()
    }
    return token

@bot.command(name='support')
async def web_support(ctx):
    """Tạo link voice support cho user"""
    session_token = generate_session_token(ctx.author.id)
    support_url = f"{os.getenv('FRONTEND_URL')}/discord-support?session={session_token}"
    
    embed = discord.Embed(
        title="🎤 AI Voice Assistant",
        description=f"[Click here to start voice chat]({support_url})",
        color=0x5865F2
    )
    
    await ctx.send(embed=embed, delete_after=300)  # Xóa sau 5 phút

if __name__ == "__main__":
    print("Starting Discord bot...", os.getenv('DISCORD_BOT_TOKEN'))
    bot.run(os.getenv('DISCORD_BOT_TOKEN'))