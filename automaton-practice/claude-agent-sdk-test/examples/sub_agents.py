import asyncio
import json

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient, ClaudeAgentOptions, ToolUseBlock, UserMessage, ToolResultBlock, AgentDefinition,
)
from dotenv import load_dotenv

BASH = "Bash"
WRITE = "Write"
READ = "Read"
WEB_SEARCH = "WebSearch"
WEB_FETCH = "WebFetch"
AGENT = "Agent"


async def main():
    load_dotenv()

    researcher = AgentDefinition(
        description="Servitor X-01",
        prompt="너는 웹 검색을 수행하는 에이전트야",
        tools=[WEB_FETCH, WEB_SEARCH],
        maxTurns=15
    )

    writer = AgentDefinition(
        description="Servitor X-02",
        prompt="너는 파일을 읽고 쓰는 에이전트야",
        tools=[WRITE, READ],
        maxTurns=15
    )

    options = ClaudeAgentOptions(
        allowed_tools=[WEB_FETCH, WEB_SEARCH, READ, WRITE, AGENT],
        agents={
            "researcher": researcher,
            "writer": writer
        },
        system_prompt="너는 작업 관리자로, 웹 조사가 필요한 작업은 researcher 에이전트에게, 파일 작성이 필요한 작업은 writer 에이전트에게 위임해"
    )

    async with ClaudeSDKClient(options=options) as client:

        # await client.query(prompt="이 폴더에 있는 파일을 모두 나열하고 각각의 크기를 알려줘. 그리고 summary.md라는 파일로 디스크에 저장해 줘")
        await client.query(prompt="희토류(rare earths)에 대해 간단히 조사하고 summary2.md에 한국어로 저장해줘")

        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Assistant Text]\n{block.text}\n")
                    elif isinstance(block, ToolUseBlock):
                        print(f"[Tool Use] {block.name}")
                        print(json.dumps(block.input, ensure_ascii=False, indent=2))
                        print()
            elif isinstance(message, UserMessage):
                for block in message.content:
                    if isinstance(block, ToolResultBlock):
                        content = block.content
                        if isinstance(content, list):
                            content = "\n".join(
                                c.get("text", str(c)) if isinstance(c, dict) else str(c)
                                for c in content
                            )
                        print(f"[Tool Result]\n{content}\n")


if __name__ == "__main__":
    asyncio.run(main())
