import { describe, expect, it } from "vitest";
import {
  normalizeCopyContainer,
  stripCopyMetadata,
} from "../../services/wechatCopyNormalizer";

describe("wechatCopyNormalizer", () => {
  it("strips only copy metadata from copied container", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd"><p leaf="" contenteditable="true" spellcheck="false" data-slate-node="text" data-lexical-key="abc" data-tool="WeMD编辑器" data-source="x">A<span id="wemd">inner</span></p><h1 data-tool="WeMD编辑器" data-kind="title">B</h1><code data-any="1" data-wemd-counter-generated="before">C</code></section>';

    stripCopyMetadata(container);

    expect(container.querySelectorAll("#wemd")).toHaveLength(1);
    expect(container.innerHTML).not.toContain("data-tool=");
    expect(container.innerHTML).not.toContain("data-wemd-counter-generated=");
    expect(container.innerHTML).not.toContain(" leaf=");
    expect(container.innerHTML).not.toContain("contenteditable=");
    expect(container.innerHTML).not.toContain("spellcheck=");
    expect(container.innerHTML).not.toContain("data-slate-");
    expect(container.innerHTML).not.toContain("data-lexical-");
    expect(container.innerHTML).toContain('data-source="x"');
    expect(container.innerHTML).toContain('data-kind="title"');
    expect(container.innerHTML).toContain('data-any="1"');
  });

  it("converts #wemd root section to div and strips only transparent root background styles", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="background: transparent; background-color: transparent; color: rgb(9, 9, 9);"><p style="margin-top:18px; background-color: transparent;">A</p><p style="background: rgb(1, 2, 3);">B</p></section>';

    const result = normalizeCopyContainer(container);

    expect(result.requiresExactHtmlTransport).toBe(false);

    const section = container.querySelector("section");
    expect(section).toBeNull();
    const rootDiv = container.firstElementChild as HTMLElement | null;
    expect(rootDiv).toBeTruthy();
    expect(rootDiv!.tagName).toBe("DIV");
    expect(rootDiv!.id).toBe("");
    expect(rootDiv!.style.color).toBe("rgb(9, 9, 9)");
    expect(rootDiv!.style.background).toBe("");
    expect(rootDiv!.style.backgroundColor).toBe("");

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs[0].style.marginTop).toBe("18px");
    expect(paragraphs[0].style.backgroundColor).toBe("transparent");
    expect(paragraphs[0].style.backgroundImage).toBe("none");
    expect(paragraphs[1].style.background).toContain("rgb(1, 2, 3)");
    expect(paragraphs[1].style.backgroundColor).not.toBe("transparent");
  });

  it("keeps the single root section as a continuous background canvas", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <section
        id="wemd"
        data-tool="WeMD编辑器"
        style="
          padding: 18px 16px 20px;
          background-color: rgb(248, 251, 255);
          background-image: linear-gradient(90deg, rgba(37, 99, 235, 0.28) 1px, transparent 1px), linear-gradient(0deg, rgba(6, 182, 212, 0.28) 1px, transparent 1px);
          background-position: 3px 5px;
          background-size: 12px 12px;
          background-repeat: repeat;
        "
      >
        <h2 style="border-left: 4px solid rgb(0, 87, 255);"><span>标题</span></h2>
        <p data-source="kept"><strong>正文</strong><a href="https://example.com">链接</a></p>
        <blockquote><p>引用</p></blockquote>
      </section>
    `;
    const originalRoot = container.firstElementChild as HTMLElement;
    const originalChildren = Array.from(originalRoot.children);

    const result = normalizeCopyContainer(container);

    expect(result.requiresExactHtmlTransport).toBe(true);

    const root = container.firstElementChild as HTMLElement;
    expect(container.childElementCount).toBe(1);
    expect(root).toBe(originalRoot);
    expect(root.tagName).toBe("SECTION");
    expect(root.id).toBe("");
    expect(root.hasAttribute("data-tool")).toBe(false);
    expect(Array.from(root.children)).toEqual(originalChildren);
    expect(root.style.paddingTop).toBe("18px");
    expect(root.style.paddingRight).toBe("16px");
    expect(root.style.paddingBottom).toBe("20px");
    expect(root.style.paddingLeft).toBe("16px");
    expect(root.style.backgroundColor).toBe("rgb(248, 251, 255)");
    expect(root.style.backgroundImage).toContain("linear-gradient");
    expect(root.style.backgroundPosition).toBe("3px 5px");
    expect(root.style.backgroundSize).toBe("12px 12px");
    expect(root.style.backgroundRepeat).toBe("repeat");
    const heading = root.querySelector("h2") as HTMLElement;
    const paragraph = root.querySelector(
      "p[data-source='kept']",
    ) as HTMLElement;
    expect(heading.style.borderLeft).toContain("4px");
    expect(heading.style.backgroundColor).toBe("transparent");
    expect(paragraph.style.backgroundColor).toBe("transparent");
    expect(
      root.querySelector("p[data-source='kept'] strong")?.textContent,
    ).toBe("正文");
    expect(root.querySelector("a")?.getAttribute("href")).toBe(
      "https://example.com",
    );
  });

  it("keeps a shorthand gradient background on the root section", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <section id="wemd">
        <p>另一种连续背景</p>
      </section>
    `;
    const sourceRoot = container.firstElementChild as HTMLElement;
    sourceRoot.style.setProperty(
      "background",
      "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0 1px, transparent 1px 12px) rgb(246, 255, 248)",
      "important",
    );
    sourceRoot.style.setProperty("background-position", "4px 6px", "important");
    sourceRoot.style.setProperty("background-size", "12px 12px", "important");
    sourceRoot.style.setProperty("background-repeat", "repeat", "important");
    sourceRoot.style.setProperty("padding", "10px 14px");

    expect(sourceRoot.style.backgroundPosition).toBe("4px 6px");
    expect(sourceRoot.style.backgroundSize).toBe("12px 12px");

    normalizeCopyContainer(container);

    const root = container.firstElementChild as HTMLElement;
    expect(root.tagName).toBe("SECTION");
    expect(root.getAttribute("style")).not.toMatch(/(^|;)\s*background\s*:/);
    expect(root.style.backgroundImage).toContain("repeating-linear-gradient");
    expect(root.style.backgroundColor).toBe("rgb(246, 255, 248)");
    expect(root.style.backgroundPosition).toBe("4px 6px");
    expect(root.style.backgroundSize).toBe("12px 12px");
    expect(root.style.backgroundRepeat).toBe("repeat");
    expect(root.style.getPropertyPriority("background-image")).toBe(
      "important",
    );
    expect(root.style.getPropertyPriority("background-color")).toBe(
      "important",
    );
    expect(root.style.getPropertyPriority("background-position")).toBe(
      "important",
    );
    expect(root.style.getPropertyPriority("background-size")).toBe("important");
    expect(root.style.paddingTop).toBe("10px");
    expect(root.style.paddingRight).toBe("14px");

    const onceNormalized = container.innerHTML;
    normalizeCopyContainer(container);
    expect(container.innerHTML).toBe(onceNormalized);
  });

  it("keeps a background image declared separately after a solid shorthand", () => {
    const container = document.createElement("div");
    container.innerHTML = '<section id="wemd"><p>方格正文</p></section>';
    const sourceRoot = container.firstElementChild as HTMLElement;
    sourceRoot.style.setProperty("background", "rgb(247, 248, 252)");
    sourceRoot.style.setProperty(
      "background-image",
      "url(https://example.com/grid.svg)",
    );
    sourceRoot.style.setProperty("background-repeat", "repeat");
    sourceRoot.style.setProperty("background-size", "24px 24px");

    const result = normalizeCopyContainer(container);

    const root = container.firstElementChild as HTMLElement;
    expect(result.requiresExactHtmlTransport).toBe(true);
    expect(root).toBe(sourceRoot);
    expect(root.tagName).toBe("SECTION");
    expect(root.getAttribute("style")).not.toMatch(/(^|;)\s*background\s*:/);
    expect(root.style.backgroundColor).toBe("rgb(247, 248, 252)");
    expect(root.style.backgroundImage).toContain("grid.svg");
    expect(root.style.backgroundRepeat).toBe("repeat");
    expect(root.style.backgroundSize).toBe("24px 24px");
  });

  it("relocates root horizontal padding to direct children", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px; color: rgb(9, 9, 9);"><p>A</p><p>B</p></section>';

    normalizeCopyContainer(container);

    const rootDiv = container.firstElementChild as HTMLElement | null;
    expect(rootDiv).toBeTruthy();
    expect(rootDiv!.tagName).toBe("DIV");
    expect(rootDiv!.style.padding).toBe("");
    expect(rootDiv!.style.paddingLeft).toBe("");
    expect(rootDiv!.style.paddingRight).toBe("");

    const paragraphs = rootDiv!.querySelectorAll("p");
    expect(paragraphs).toHaveLength(2);
    expect((paragraphs[0] as HTMLElement).style.paddingLeft).toBe("16px");
    expect((paragraphs[0] as HTMLElement).style.paddingRight).toBe("16px");
    expect((paragraphs[1] as HTMLElement).style.paddingLeft).toBe("16px");
    expect((paragraphs[1] as HTMLElement).style.paddingRight).toBe("16px");
  });

  it("keeps blockquote inner padding and relocates root horizontal padding via margin", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><blockquote style="padding: 12px 10px;"><p>A</p></blockquote></section>';

    normalizeCopyContainer(container);

    const blockquote = container.querySelector("blockquote") as HTMLElement;
    expect(blockquote).toBeTruthy();
    expect(blockquote.style.paddingLeft).toBe("10px");
    expect(blockquote.style.paddingRight).toBe("10px");
    expect(blockquote.style.marginLeft).toBe("16px");
    expect(blockquote.style.marginRight).toBe("16px");
  });

  it("keeps callout inner padding and relocates root horizontal padding via margin", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><section class="callout callout-note" style="padding: 12px 16px;"><div class="callout-title">Note</div><p>内容</p></section></section>';

    normalizeCopyContainer(container);

    const callout = container.querySelector(".callout") as HTMLElement;
    expect(callout).toBeTruthy();
    expect(callout.style.paddingLeft).toBe("16px");
    expect(callout.style.paddingRight).toBe("16px");
    expect(callout.style.marginLeft).toBe("16px");
    expect(callout.style.marginRight).toBe("16px");
  });

  it("keeps pre inner padding and relocates root horizontal padding via margin", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><pre style="padding: 10px 12px; background: rgb(30,30,30);"><code>console.log(1)</code></pre></section>';

    normalizeCopyContainer(container);

    const pre = container.querySelector("pre") as HTMLElement;
    expect(pre).toBeTruthy();
    expect(pre.style.paddingLeft).toBe("12px");
    expect(pre.style.paddingRight).toBe("12px");
    expect(pre.style.marginLeft).toBe("16px");
    expect(pre.style.marginRight).toBe("16px");
  });

  it("keeps heading inner padding and relocates root horizontal padding via margin", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><h3 style="padding-left: 8px; border-left: 4px solid rgb(0, 87, 255);"><span class="content">标题</span></h3></section>';

    normalizeCopyContainer(container);

    const heading = container.querySelector("h3") as HTMLElement;
    expect(heading).toBeTruthy();
    expect(heading.style.paddingLeft).toBe("8px");
    expect(heading.style.marginLeft).toBe("16px");
    expect(heading.style.marginRight).toBe("16px");
  });

  it("relocates root horizontal padding to hr via margin", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><hr style="border-top: 1px solid rgb(238, 238, 238);" /></section>';

    normalizeCopyContainer(container);

    const hr = container.querySelector("hr") as HTMLElement;
    expect(hr).toBeTruthy();
    expect(hr.style.marginLeft).toBe("16px");
    expect(hr.style.marginRight).toBe("16px");
    expect(hr.style.paddingLeft).toBe("");
    expect(hr.style.paddingRight).toBe("");
  });

  it("keeps hr auto margins when relocating root horizontal padding", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><hr style="width: 20%; margin-left: auto; margin-right: auto; border-top: 1px solid rgb(238, 238, 238);" /></section>';

    normalizeCopyContainer(container);

    const hr = container.querySelector("hr") as HTMLElement;
    expect(hr).toBeTruthy();
    expect(hr.style.marginLeft).toBe("auto");
    expect(hr.style.marginRight).toBe("auto");
  });

  it("falls back to root padding when heading margin uses auto keyword", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="padding: 0px 16px;"><h3 style="margin-left: auto; margin-right: auto; padding-left: 8px;"><span class="content">标题</span></h3></section>';

    normalizeCopyContainer(container);

    const heading = container.querySelector("h3") as HTMLElement;
    expect(heading).toBeTruthy();
    expect(heading.style.marginLeft).toBe("16px");
    expect(heading.style.marginRight).toBe("16px");
  });

  it("normalizes figure background without overriding explicit figure background", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd"><figure><img src="x.png" alt="x" /><figcaption>cap</figcaption></figure><figure style="background:#f5f5f5;"><img src="y.png" alt="y" /></figure></section>';

    normalizeCopyContainer(container);

    const figures = container.querySelectorAll("figure");
    expect(figures).toHaveLength(2);
    expect(figures[0].style.backgroundColor).toBe("transparent");
    expect(figures[0].style.backgroundImage).toBe("none");
    expect(figures[1].style.background).toContain("rgb(245, 245, 245)");
  });

  it("normalizes list item section background without overriding explicit section background", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd"><ul><li><section>A</section></li><li><section style="background-color:#f5f5f5;">B</section></li></ul></section>';

    normalizeCopyContainer(container);

    const sections = container.querySelectorAll("li > section");
    expect(sections).toHaveLength(2);
    expect((sections[0] as HTMLElement).style.backgroundColor).toBe(
      "transparent",
    );
    expect((sections[0] as HTMLElement).style.backgroundImage).toBe("none");
    expect((sections[1] as HTMLElement).style.backgroundColor).toBe(
      "rgb(245, 245, 245)",
    );
  });

  it("normalizes list container background without overriding explicit list background", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd"><ul><li><section>A</section></li></ul><ol style="background-color:#f5f5f5;"><li><section>B</section></li></ol></section>';

    normalizeCopyContainer(container);

    const ul = container.querySelector("ul") as HTMLElement | null;
    const ol = container.querySelector("ol") as HTMLElement | null;
    expect(ul).toBeTruthy();
    expect(ol).toBeTruthy();
    expect(ul!.style.backgroundColor).toBe("transparent");
    expect(ul!.style.backgroundImage).toBe("none");
    expect(ol!.style.backgroundColor).toBe("rgb(245, 245, 245)");
  });

  it("keeps explicit list background-image untouched", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd"><ul style="background-image:linear-gradient(#111,#222);"><li><section>A</section></li></ul></section>';

    normalizeCopyContainer(container);

    const ul = container.querySelector("ul") as HTMLElement | null;
    expect(ul).toBeTruthy();
    expect(ul!.style.backgroundImage).toContain("linear-gradient");
    expect(ul!.style.backgroundColor).not.toBe("transparent");
  });

  it("strips root transparent background written in modern color syntax", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="background: #0000; background-color: rgb(0 0 0 / 0); color: rgb(1, 1, 1);"><p>A</p></section>';

    normalizeCopyContainer(container);

    const rootDiv = container.firstElementChild as HTMLElement | null;
    expect(rootDiv).toBeTruthy();
    expect(rootDiv!.style.background).toBe("");
    expect(rootDiv!.style.backgroundColor).toBe("");
    expect(rootDiv!.style.color).toBe("rgb(1, 1, 1)");
  });

  it("materializes inherited text styles on editor leaf nodes before removing private attributes", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <section id="wemd" style="font-family: PingFang SC, sans-serif; font-size: 18px; line-height: 1.8; letter-spacing: 1px; font-weight: 400; color: rgb(91, 91, 91);">
        <section style="color: rgb(102, 78, 160);">
          <span leaf="" contenteditable="true" spellcheck="false" data-slate-leaf="true" data-slate-string="true" data-lexical-text="true" data-source="kept">1. 《民法典》<strong style="color: rgb(128, 90, 213);">第 188 条</strong>：正文</span>
        </section>
        <div><p leaf="" data-slate-node="text" data-lexical-key="nested">嵌套叶节点</p></div>
      </section>
    `;

    normalizeCopyContainer(container);

    const leaves = container.querySelectorAll<HTMLElement>(
      "section > span, div > p",
    );
    const screenshotLeaf = leaves[0];
    const nestedLeaf = leaves[1];
    expect(screenshotLeaf.style.color).toBe("rgb(102, 78, 160)");
    expect(screenshotLeaf.style.fontFamily).toBe('"PingFang SC", sans-serif');
    expect(screenshotLeaf.style.fontSize).toBe("18px");
    expect(screenshotLeaf.style.lineHeight).toBe("1.8");
    expect(screenshotLeaf.style.letterSpacing).toBe("1px");
    expect(screenshotLeaf.style.fontWeight).toBe("400");
    expect(screenshotLeaf.getAttribute("data-source")).toBe("kept");
    expect(nestedLeaf.style.fontSize).toBe("18px");
    expect(nestedLeaf.style.color).toBe("rgb(91, 91, 91)");
    expect(container.querySelector("[leaf]")).toBeNull();
    expect(container.innerHTML).not.toContain("data-slate-");
    expect(container.innerHTML).not.toContain("data-lexical-");
  });

  it("adds styled fallbacks inside semantic emphasis without changing links, code, or math", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <section id="wemd" style="font-family: PingFang SC, sans-serif; font-size: 16px; line-height: 1.75; letter-spacing: 0.5px; color: rgb(80, 80, 80);">
        <p><strong style="color: rgb(128, 90, 213);">重点</strong><em>强调</em><b>粗体</b><i>斜体</i></p>
        <p><a href="https://example.com"><strong>链接</strong></a><code><em>code</em></code><span class="katex"><strong>math</strong></span></p>
      </section>
    `;

    normalizeCopyContainer(container);

    const strongFallback = container.querySelector(
      "p > strong > span",
    ) as HTMLElement;
    const emFallback = container.querySelector("p > em > span") as HTMLElement;
    expect(strongFallback.textContent).toBe("重点");
    expect(strongFallback.style.color).toBe("rgb(128, 90, 213)");
    expect(strongFallback.style.fontFamily).toBe('"PingFang SC", sans-serif');
    expect(strongFallback.style.fontSize).toBe("16px");
    expect(strongFallback.style.lineHeight).toBe("1.75");
    expect(strongFallback.style.letterSpacing).toBe("0.5px");
    expect(strongFallback.style.fontWeight).toBe("bold");
    expect(emFallback.textContent).toBe("强调");
    expect(emFallback.style.fontStyle).toBe("italic");
    expect(container.querySelector("p > b > span")?.textContent).toBe("粗体");
    expect(container.querySelector("p > i > span")?.textContent).toBe("斜体");
    expect(container.querySelector("a strong > span")).toBeNull();
    expect(container.querySelector("code em > span")).toBeNull();
    expect(container.querySelector(".katex strong > span")).toBeNull();
  });

  it("does not override background of elements inside blockquote with explicit background", () => {
    const container = document.createElement("div");
    container.innerHTML =
      '<section id="wemd" style="background-color: rgb(255, 255, 255);"><blockquote style="background-color: rgb(200, 200, 200);"><p>引用文字</p></blockquote><p>普通文字</p></section>';

    normalizeCopyContainer(container);

    const blockquote = container.querySelector("blockquote") as HTMLElement;
    const innerP = blockquote.querySelector("p") as HTMLElement;
    const outerP = container.querySelector("div > p") as HTMLElement;

    expect(innerP.style.backgroundColor).toBe("");
    expect(outerP.style.backgroundColor).toBe("rgb(255, 255, 255)");
  });
});
