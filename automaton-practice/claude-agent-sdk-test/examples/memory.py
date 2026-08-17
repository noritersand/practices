import asyncio

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient,
)
from dotenv import load_dotenv


async def main():
    load_dotenv()

    async with ClaudeSDKClient() as client:

        await client.query("루마니아의 수도가 어디야? 한국어로 대답해줘")

        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"AssistantMessage: {block.text}")

        await client.query("어디라고?")

        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"AssistantMessage: {block.text}")


if __name__ == "__main__":
    asyncio.run(main())
