import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MobileToolbar } from "../../components/common/MobileToolbar";

describe("MobileToolbar", () => {
  it("opens more menu and triggers the unthemed HTML source action", () => {
    const onViewChange = vi.fn();
    const onCopyToWechat = vi.fn();
    const onCopyAsHtml = vi.fn();
    const onOpenTheme = vi.fn();

    render(
      <MobileToolbar
        activeView="editor"
        onViewChange={onViewChange}
        onCopyToWechat={onCopyToWechat}
        onCopyAsHtml={onCopyAsHtml}
        onOpenTheme={onOpenTheme}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "更多功能" }));
    fireEvent.click(screen.getByText("复制 HTML 源码（无主题）"));

    expect(onCopyAsHtml).toHaveBeenCalledTimes(1);
  });

  it("triggers theme action from more menu", () => {
    const onViewChange = vi.fn();
    const onCopyToWechat = vi.fn();
    const onCopyAsHtml = vi.fn();
    const onOpenTheme = vi.fn();

    render(
      <MobileToolbar
        activeView="editor"
        onViewChange={onViewChange}
        onCopyToWechat={onCopyToWechat}
        onCopyAsHtml={onCopyAsHtml}
        onOpenTheme={onOpenTheme}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "更多功能" }));
    fireEvent.click(screen.getByText("主题管理"));

    expect(onOpenTheme).toHaveBeenCalledTimes(1);
  });

  it("labels icon-only copy, more, and close buttons", () => {
    render(
      <MobileToolbar
        activeView="editor"
        onViewChange={vi.fn()}
        onCopyToWechat={vi.fn()}
        onCopyAsHtml={vi.fn()}
        onOpenTheme={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: "复制到公众号" }),
    ).toHaveAttribute("title", "复制到公众号");

    const moreButton = screen.getByRole("button", { name: "更多功能" });
    expect(moreButton).toHaveAttribute("title", "更多功能");
    fireEvent.click(moreButton);

    expect(
      screen.getByRole("button", { name: "关闭更多功能" }),
    ).toHaveAttribute("title", "关闭更多功能");
  });
});
