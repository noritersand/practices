import asyncio

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient, ClaudeAgentOptions, ToolUseBlock, UserMessage, ToolResultBlock,
)
from dotenv import load_dotenv

BASH = "Bash"
WRITE = "Write"
READ = "Read"
WEB_SEARCH = "WebSearch"
WEB_FETCH = "WebFetch"


async def main():
    load_dotenv()

    options = ClaudeAgentOptions(
        # allowed_tools=["Bash", "WebFetch", "WebSearch", "Read", "Write"]
        allowed_tools=[BASH, WEB_FETCH, WEB_SEARCH, READ, WRITE]
    )

    async with ClaudeSDKClient(options=options) as client:

        # await client.query(prompt="이 폴더에 있는 파일을 모두 나열하고 각각의 크기를 알려줘. 그리고 summary.md라는 파일로 디스크에 저장해 줘")
        await client.query(prompt="스팀 인기 순위에 대해 조사하고 summary.md에 저장해줘")

        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"AssistantMessage TextBlock: {block.text}")
                    elif isinstance(block, ToolUseBlock):
                        print(f"AssistantMessage ToolUseBlock: {block.name} {block.input}")
            elif isinstance(message, UserMessage):
                for block in message.content:
                    if isinstance(block, ToolResultBlock):
                        print(f"UserMessage ToolResultBlock: {block.content}")


if __name__ == "__main__":
    asyncio.run(main())
