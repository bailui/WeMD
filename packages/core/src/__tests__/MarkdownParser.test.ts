import { afterEach, describe, expect, it, vi } from "vitest";
import { createMarkdownParser } from "../MarkdownParser";

describe("MarkdownParser code block", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("默认不输出 mac-sign 结构", () => {
    const parser = createMarkdownParser();
    const html = parser.render("```ts\nconst a = 1;\n```");

    expect(html).toContain('<pre class="custom">');
    expect(html).not.toContain('<span class="mac-sign"');
    expect(html).not.toContain("<svg");
  });

  it("显式开启后输出无需 SVG 加载的 Mac Bar 圆点", () => {
    const parser = createMarkdownParser({ showMacBar: true });
    const html = parser.render("```ts\nconst a = 1;\n```");

    expect(html).toContain('<pre class="custom">');
    expect(html).toContain('<span class="mac-sign"');
    expect(html).toContain("display:block;height:13px;");
    expect(html).not.toMatch(/class="mac-sign"[^>]*width:45px/);
    expect(html.match(/class="mac-dot"/g)).toHaveLength(3);
    expect(
      html.match(/width:10px;height:10px;margin-top:1.5px;/g),
    ).toHaveLength(3);
    expect(html).not.toContain("<svg");
    expect(html).toMatch(
      /<pre[^>]*>\s*<span[^>]*>[\s\S]*class="mac-dot"[\s\S]*<\/span>\s*<code/i,
    );
    expect(html).not.toMatch(/<code[^>]*>[\s\S]*class="mac-dot"/i);
  });

  it("指定 katex 渲染器时不使用 MathJax SVG", () => {
    vi.stubGlobal("window", {
      MathJax: {
        tex2svg: () => {
          const container = document.createElement("div");
          container.innerHTML = "<svg><text>mathjax</text></svg>";
          return container;
        },
      },
    });

    const parser = createMarkdownParser({ mathRenderer: "katex" });
    const html = parser.render("$\\boldsymbol{x}$");

    expect(html).toContain("katex-html");
    expect(html).toContain("boldsymbol");
    expect(html).not.toContain("<svg");
    expect(html).not.toContain("mathjax");
  });
});

describe("MarkdownParser 中文强调边界", () => {
  it("解析结束标记后紧接中文的粗体", () => {
    const html = createMarkdownParser().render(
      "**真实判例⑤（安徽郎溪法院，2026年5月，最典型的一个）：**老张生前给妹妹转过5万。",
    );

    expect(html).toContain(
      "<strong>真实判例⑤（安徽郎溪法院，2026年5月，最典型的一个）：</strong>老张生前",
    );
    expect(html).not.toContain("**");
    expect(html).not.toContain("wemd-cjk-emphasis-boundary");
  });

  it("兼容引用和正文中的中文粗体，同时不改写行内代码", () => {
    const html = createMarkdownParser().render(
      [
        "> 这是**借贷合意：**必须证明的内容。",
        "",
        "正文**关键结论：**没有借条不代表一定败诉。",
        "",
        "`**代码示例：**正文`",
      ].join("\n"),
    );

    expect(html).toContain("<strong>借贷合意：</strong>必须证明");
    expect(html).toContain("<strong>关键结论：</strong>没有借条");
    expect(html).toContain("<code>**代码示例：**正文</code>");
  });

  it("解析英文直引号结束且后接中文的粗体", () => {
    const html = createMarkdownParser().render(
      '关键就在**"对应增值"**这四个字。',
    );

    expect(html).toContain(
      "关键就在<strong>&quot;对应增值&quot;</strong>这四个字。",
    );
    expect(html).not.toContain("**");
  });
});

describe("MarkdownParser 预览源位置", () => {
  const markdown = [
    "# 标题",
    "",
    "正文段落",
    "",
    "```ts",
    "const answer = 42;",
    "```",
    "",
    "$$",
    "x^2",
    "$$",
  ].join("\n");

  it("默认渲染不输出预览内部源位置属性", () => {
    const html = createMarkdownParser().render(markdown);

    expect(html).not.toContain("data-wemd-source-start");
    expect(html).not.toContain("data-wemd-source-end");
  });

  it("显式开启后为可见块输出零基、结束行独占的源位置", () => {
    const html = createMarkdownParser({ includeSourcePosition: true }).render(
      markdown,
    );

    expect(html).toContain(
      '<h1 data-wemd-source-start="0" data-wemd-source-end="1">',
    );
    expect(html).toContain(
      '<p data-wemd-source-start="2" data-wemd-source-end="3">',
    );
    expect(html).toMatch(
      /<pre[^>]*data-wemd-source-start="4"[^>]*data-wemd-source-end="7"/,
    );
    expect(html).toMatch(
      /class="block-equation"[^>]*data-wemd-source-start="8"[^>]*data-wemd-source-end="11"/,
    );
  });
});
