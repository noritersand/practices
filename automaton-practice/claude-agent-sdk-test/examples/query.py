import asyncio
from dotenv import load_dotenv
from claude_agent_sdk import (
    query,
    SystemMessage,
    AssistantMessage,
    ResultMessage,
    TextBlock,
)


async def main():
    load_dotenv()

    async for message in query(prompt="What was the capital of Romania? Short answer."):
        if isinstance(message, SystemMessage):
            print("SystemMessage")

        elif isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(f"AssistantMessage: {block.text}")

        elif isinstance(message, ResultMessage):
            print(f"ResultMessage {message.total_cost_usd}")


if __name__ == "__main__":
    asyncio.run(main())
