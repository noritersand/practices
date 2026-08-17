import asyncio

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient, ClaudeAgentOptions, tool,
    create_sdk_mcp_server, HookMatcher, PreToolUseHookInput, PostToolUseHookInput,
    HookContext,
    HookJSONOutput,
)
from claude_agent_sdk.types import SystemPromptPreset
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


async def pre_tool_use(
        input_data: PreToolUseHookInput,
        tool_use_id: str | None,
        context: HookContext,
) -> HookJSONOutput:
    print(input_data["tool_name"], "->", input_data["tool_input"])
    return {}


async def post_tool_use(
        input_data: PostToolUseHookInput,
        tool_use_id: str | None,
        context: HookContext,
) -> HookJSONOutput:
    print(input_data["tool_name"], "->", input_data["tool_response"])
    return {}


async def main():
    load_dotenv()

    options = ClaudeAgentOptions(
        # allowed_tools=[WRITE, "mcp__*"],
        allowed_tools=[WRITE, "mcp__weather_server__*"],
        system_prompt=SystemPromptPreset(
            type="preset",
            preset="claude_code",
            append="반말 사용, 단답형으로 대답",
        ),
        mcp_servers={
            "weather_server": weather_server
        },
        hooks={
            "PreToolUse": [
                HookMatcher(matcher=".*", hooks=[pre_tool_use])
            ],
            "PostToolUse": [
                HookMatcher(matcher=".*", hooks=[post_tool_use])
            ]
        }
    )

    async with ClaudeSDKClient(options=options) as client:

        await client.query(prompt="서울시의 날씨 알려줘")

        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Assistant Text]\n{block.text}\n")


if __name__ == "__main__":
    asyncio.run(main())
