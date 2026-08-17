import discord
import asyncio
import random

channelIds = {
    'bot-test': 696989502153162773
}

client = discord.Client()

@client.event
async def on_ready():
    print('ready:', client.user.name + '(' + str(client.user.id) + ')')
    game = discord.Game("마더 법규를 준수")
    await client.change_presence(status=discord.Status.online, activity=game)
    # 등장 메시지
    botTestChannel = client.get_channel(channelIds['bot-test'])
    await botTestChannel.send('마더 법규를 준수하십씨오')

@client.event
async def on_message(message):
    if message.channel.id == channelIds['bot-test']:
        # 투표
        if message.content.startswith("!투표"):
            vote = message.content[4:].split("/")
            channel = message.channel
            await channel.send("투표를 시작함미따")
            for i in range(0, len(vote)):
                lastsend = await channel.send("```" + vote[i] + "```")
                await lastsend.add_reaction('👍')

client.run("Nj........")
