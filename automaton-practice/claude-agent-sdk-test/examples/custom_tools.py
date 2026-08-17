import asyncio
import json

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient, ClaudeAgentOptions, ToolUseBlock, UserMessage, ToolResultBlock, tool,
    create_sdk_mcp_server,
)
from dotenv import load_dotenv

BASH = "Bash"
WRITE = "Write"
READ = "Read"
WEB_SEARCH = "WebSearch"
WEB_FETCH = "WebFetch"
AGENT = "Agent"


@tool(
    name="get_weather",
    description="Get the weather for a given city",
    input_schema={
        "city": str
    }
)
async def get_weather(args):
    city = args.get('city')
    return {"content": [{"type": "text", "text": f"The weather in {city} is sunny"}]}


weather_server = create_sdk_mcp_server(
    name="weather_server",
    tools=[get_weather]
)


async def main():
    load_dotenv()

    options = ClaudeAgentOptions(
        # allowed_tools=[WRITE, "mcp__*"],
        allowed_tools=[WRITE, "mcp__weather_server__*"],
        system_prompt="",
        mcp_servers={
            "weather_server": weather_server
        }
    )

    async with ClaudeSDKClient(options=options) as client:

        await client.query(prompt="서울시의 날씨 알려줘")

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
