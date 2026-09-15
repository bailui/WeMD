import { describe, expect, it } from "vitest";
import {
  aiToolStyleLightTheme,
  auroraDarkTheme,
  gridResearchTheme,
  oversizedTechTheme,
  violetLabTheme,
} from "../themes";

const themes = {
  aiToolStyleLightTheme,
  gridResearchTheme,
  auroraDarkTheme,
  oversizedTechTheme,
  violetLabTheme,
};

const requiredSelectors = [
  "#wemd p",
  "#wemd h1",
  "#wemd h2",
  "#wemd h3",
  "#wemd h4",
  "#wemd h5",
  "#wemd h6",
  "#wemd strong",
  "#wemd em",
  "#wemd s",
  "#wemd del",
  "#wemd mark",
  "#wemd a",
  "#wemd ul",
  "#wemd ol",
  "#wemd li section",
  "#wemd .multiquote-1",
  "#wemd .multiquote-2",
  "#wemd .multiquote-3",
  "#wemd p code",
  "#wemd pre",
  "#wemd table",
  "#wemd figure",
  "#wemd figcaption",
  "#wemd hr",
  "#wemd .callout",
  "#wemd .footnotes-sep",
  "#wemd .block-equation",
  "#wemd .block-equation > svg",
  "#wemd .inline-equation",
  "#wemd pre.mermaid",
  "#wemd .task-list-item",
];

describe("writer-focused themes", () => {
  it("覆盖公众号长文的主要内容元素", () => {
    for (const [name, css] of Object.entries(themes)) {
      for (const selector of requiredSelectors) {
        expect(css, `${name} 缺少 ${selector}`).toContain(selector);
      }
    }
  });

  it("核心视觉都有纯色回退且不依赖高风险文字效果", () => {
    for (const [name, css] of Object.entries(themes)) {
      expect(css, `${name} 根容器缺少纯色背景`).toMatch(
        /#wemd\s*\{[\s\S]*?background-color:\s*#[0-9a-f]{6};/i,
      );
      expect(css, `${name} 一级标题缺少纯色背景`).toMatch(
        /#wemd h1\s*\{[\s\S]*?background-color:\s*#[0-9a-f]{6};/i,
      );
      expect(css, `${name} 引用缺少纯色背景`).toMatch(
        /#wemd \.multiquote-1\s*\{[\s\S]*?background-color:\s*#[0-9a-f]{6};/i,
      );
      expect(css, `${name} 代码块缺少纯色背景`).toMatch(
        /#wemd pre\s*\{[\s\S]*?background-color:\s*#[0-9a-f]{6};/i,
      );
      expect(css, name).not.toMatch(/background-clip:\s*text/i);
      expect(css, name).not.toMatch(/(?:^|[;{])\s*color:\s*transparent/i);
      expect(css, name).not.toMatch(/backdrop-filter/i);
      expect(css, name).not.toMatch(/@font-face|url\s*\(/i);
    }
  });

  it("五款主题采用彼此独立的排版锚点", () => {
    expect(gridResearchTheme).toContain("background-color: #f7f3e8");
    expect(gridResearchTheme).toContain("background-size: 24px 24px");
    expect(gridResearchTheme).toContain("border-left: 5px solid #cc5c35");

    expect(auroraDarkTheme).toContain("background-color: #07151f");
    expect(auroraDarkTheme).toContain("border-top: 6px solid #4ee1c1");

    expect(oversizedTechTheme).toContain("font-size: 32px");
    expect(oversizedTechTheme).toContain("border-bottom: 6px solid #c6f135");
    expect(oversizedTechTheme).toContain(
      "background-image: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
    );

    expect(violetLabTheme).toContain("border: 1px dashed #9684b2");
    expect(violetLabTheme).toContain("list-style-type: decimal-leading-zero");
  });

  it("两款亮色主题保留各自原始配色并采用舒展排版", () => {
    expect(aiToolStyleLightTheme).toContain("font-size: 16px");
    expect(aiToolStyleLightTheme).toContain("border-top: 5px solid #916dd5");
    expect(aiToolStyleLightTheme).toContain(
      "background-image: linear-gradient(180deg, #ffffff 0%, #faf8fd 100%)",
    );
    expect(aiToolStyleLightTheme).toMatch(/#916dd5|#e2c056/i);
    expect(aiToolStyleLightTheme).not.toMatch(/url\s*\(/i);

    expect(gridResearchTheme).toContain("#dfe5dc 1px");
    expect(gridResearchTheme).toMatch(/#f7f3e8|#cc5c35|#1b6e70/i);
  });

  it("极光暗色风为关键内容块显式提供暗底亮字", () => {
    const explicitDarkBlocks = [
      /#wemd p\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#07151f;/,
      /#wemd h1\s*\{[\s\S]*?color:\s*#f4fffd;[\s\S]*?background-color:\s*#0b2230;/,
      /#wemd ul,[\s\S]*?#wemd ol\s*\{[\s\S]*?color:\s*#4ee1c1;[\s\S]*?background-color:\s*#0a1b26;/,
      /#wemd \.multiquote-1\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#0d2633;/,
      /#wemd pre\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#08131c;/,
      /#wemd table\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#081823;/,
      /#wemd \.callout\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#0d2633;/,
      /#wemd \.block-equation\s*\{[\s\S]*?color:\s*#f4fffd;[\s\S]*?background-color:\s*#0b2230;/,
      /#wemd pre\.mermaid\s*\{[\s\S]*?color:\s*#f4fffd;[\s\S]*?background-color:\s*#0b2230;/,
      /#wemd \.task-list-item\s*\{[\s\S]*?color:\s*#d9f2ef;[\s\S]*?background-color:\s*#0a1b26;/,
    ];

    for (const pattern of explicitDarkBlocks) {
      expect(auroraDarkTheme).toMatch(pattern);
    }

    expect(auroraDarkTheme).toMatch(
      /#wemd \.table-of-contents a\s*\{[\s\S]*?color:\s*#75edd6;[\s\S]*?background-color:\s*#07151f;/,
    );
    expect(auroraDarkTheme).toMatch(
      /#wemd del\s*\{[\s\S]*?color:\s*#9bbab6;[\s\S]*?background-color:\s*#07151f;/,
    );
  });

  it("图片、提示块和嵌套引用保持稳定边界", () => {
    for (const [name, css] of Object.entries(themes)) {
      expect(css, `${name} 图片可能被分页拆开`).toMatch(
        /#wemd figure\s*\{[\s\S]*?break-inside:\s*avoid;/,
      );
      expect(css, `${name} 提示块缺少稳定直角边界`).toMatch(
        /#wemd \.callout\s*\{[\s\S]*?border-radius:\s*0;/,
      );
      expect(css, `${name} 嵌套引用会持续压缩宽度`).toMatch(
        /#wemd \.multiquote-1 \.multiquote-1,[\s\S]*?margin:\s*12px 0 0;/,
      );
    }
  });
});
