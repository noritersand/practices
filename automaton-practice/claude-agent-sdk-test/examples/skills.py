import asyncio
from pathlib import Path
from typing import Any

from claude_agent_sdk import (
    AssistantMessage,
    TextBlock, ClaudeSDKClient, ClaudeAgentOptions, HookMatcher, PreToolUseHookInput, PostToolUseHookInput,
    HookContext,
    HookJSONOutput, SystemMessage,
)
from claude_agent_sdk.types import SystemPromptPreset
from dotenv import load_dotenv

BASH = "Bash"
WRITE = "Write"
READ = "Read"
WEB_SEARCH = "WebSearch"
WEB_FETCH = "WebFetch"
AGENT = "Agent"

'''
⚠️ 아래 구조처럼 SKILL.md 파일이 있어야 함

.
└── .claude/
    └── skills/
        └── 스킬이름/
            └── SKILL.md
'''


async def pre_tool_use(
        input_data: PreToolUseHookInput,
        tool_use_id: str | None,
        context: HookContext,
) -> dict[Any, Any]:
    print(input_data["tool_name"], "->", input_data["tool_input"])
    return {}


async def post_tool_use(
        input_data: PostToolUseHookInput,
        tool_use_id: str | None,
        context: HookContext,
) -> dict:
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
        hooks={
            "PreToolUse": [
                HookMatcher(matcher=".*", hooks=[pre_tool_use])
            ],
            "PostToolUse": [
                HookMatcher(matcher=".*", hooks=[post_tool_use])
            ]
        },
        cwd=Path.cwd(),
        setting_sources=["project"]
    )

    async with ClaudeSDKClient(options=options) as client:

        # await client.query(prompt="/translate-korean How are you in this fine evening?")
        await client.query(prompt="translate to korean please: how are you in this fine evening?")

        async for message in client.receive_response():
            if isinstance(message, SystemMessage):
                print(message)
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Assistant Text]\n{block.text}\n")


if __name__ == "__main__":
    asyncio.run(main())
