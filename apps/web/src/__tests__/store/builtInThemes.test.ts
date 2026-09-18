import { describe, expect, it } from "vitest";
import {
  auroraDarkTheme,
  clearGuideTheme,
  dataBlueprintTheme,
  easternNotesTheme,
  gridResearchTheme,
  modernEditorialTheme,
  oversizedTechTheme,
  violetLabTheme,
  whitespaceGalleryTheme,
} from "@wemd/core";
import { builtInThemes } from "../../store/themes/builtInThemes";
import { useThemeStore } from "../../store/themeStore";

describe("built-in themes", () => {
  it("注册编辑部手记主题并组合基础与代码样式", () => {
    const theme = builtInThemes.find((item) => item.id === "modern-editorial");

    expect(theme).toBeTruthy();
    expect(theme?.name).toBe("编辑部手记");
    expect(theme?.isBuiltIn).toBe(true);
    expect(theme?.css).toContain(modernEditorialTheme);
    expect(theme?.css).toContain("#wemd .hljs");
  });

  it("下架旧主题但保留注册信息供历史文章恢复", () => {
    const retiredThemeIds = [
      "template",
      "aurora-glass",
      "cyberpunk-neon",
      "bauhaus",
      "neo-brutalism",
    ];

    for (const themeId of retiredThemeIds) {
      const theme = builtInThemes.find((item) => item.id === themeId);
      expect(theme, `${themeId} 应继续保留注册信息`).toBeTruthy();
      expect(theme?.isSelectable).toBe(false);
      expect(theme?.css).toContain("#wemd");
    }

    expect(
      builtInThemes.find((item) => item.id === "luxury-gold")?.isSelectable,
    ).not.toBe(false);
  });

  it("仍可按主题 ID 恢复下架主题", () => {
    const state = useThemeStore.getState();

    state.selectTheme("bauhaus");

    expect(useThemeStore.getState().themeId).toBe("bauhaus");
    expect(useThemeStore.getState().getThemeCSS("bauhaus")).toContain(
      "包豪斯风格",
    );

    useThemeStore.getState().selectTheme("default");
  });

  it("注册四款可选的场景化主题", () => {
    const expectedThemes = [
      ["data-blueprint", "数据蓝图", dataBlueprintTheme],
      ["eastern-notes", "东方笺谱", easternNotesTheme],
      ["clear-guide", "清晰指南", clearGuideTheme],
      ["whitespace-gallery", "留白画册", whitespaceGalleryTheme],
    ] as const;

    for (const [id, name, css] of expectedThemes) {
      const theme = builtInThemes.find((item) => item.id === id);
      expect(theme).toBeTruthy();
      expect(theme?.name).toBe(name);
      expect(theme?.isSelectable).not.toBe(false);
      expect(theme?.css).toContain(css);
      expect(theme?.css).toContain("#wemd .hljs");
    }
  });

  it("注册四款可选的写作主题并组合稳定代码配色", () => {
    const expectedThemes = [
      ["grid-research", "方格研究风", gridResearchTheme],
      ["aurora-dark", "极光暗色风", auroraDarkTheme],
      ["oversized-tech", "大号科技风", oversizedTechTheme],
      ["violet-lab", "紫雾实验风", violetLabTheme],
    ] as const;

    for (const [id, name, css] of expectedThemes) {
      const theme = builtInThemes.find((item) => item.id === id);

      expect(theme, `${id} 应注册为内置主题`).toBeTruthy();
      expect(theme?.name).toBe(name);
      expect(theme?.isBuiltIn).toBe(true);
      expect(theme?.isSelectable).not.toBe(false);
      expect(theme?.css).toContain(css);
      expect(theme?.css).toContain("#wemd .hljs");
      expect(theme?.css).toContain("#wemd .hljs-literal");
    }
  });

  it("保留全部 14 款白鹿自定义内置主题", () => {
    const expectedThemes = [
      ["soft-pink-dream", "🎀 奶油粉白"],
      ["warm-apricot", "🍑 暖杏治愈"],
      ["sakura-pink", "🌸 樱花粉"],
      ["mint-green", "🌿 薄荷绿"],
      ["sky-blue", "☁️ 天空蓝"],
      ["mauve-purple", "💜 锦葵紫"],
      ["caramel-gold", "🍮 焦糖金"],
      ["cherry-red", "🍒 樱桃红"],
      ["ai-tool-style", "🛠️ AI工具风"],
      ["ai-tool-style-light", "☀️ AI工具风·亮"],
      ["open-source-diary", "📰 开源日记"],
      ["open-source-diary-light", "☀️ 开源日记·亮"],
      ["open-source-diary-orange", "🍊 开源日记·橙"],
      ["open-source-diary-orange-light", "🍊 开源日记·橙·亮"],
    ] as const;

    for (const [id, name] of expectedThemes) {
      const theme = builtInThemes.find((item) => item.id === id);
      expect(theme, `${name} 应继续保留`).toBeTruthy();
      expect(theme?.name).toBe(name);
      expect(theme?.isSelectable).not.toBe(false);
      expect(theme?.css).toContain("#wemd");
    }

    expect(new Set(builtInThemes.map((theme) => theme.id)).size).toBe(
      builtInThemes.length,
    );
  });

  it("AI 亮色主题跟随夜间配色，方格主题继续保留原纸面", () => {
    const aiTheme = builtInThemes.find(
      (item) => item.id === "ai-tool-style-light",
    );
    const aiLightCss = useThemeStore
      .getState()
      .getThemeCSS("ai-tool-style-light", false);
    const aiDarkCss = useThemeStore
      .getState()
      .getThemeCSS("ai-tool-style-light", true);

    expect(aiTheme?.preserveLightColorsInDarkMode).not.toBe(true);
    expect(aiDarkCss).not.toBe(aiLightCss);
    expect(aiDarkCss).toContain("wemd-wechat-dark-converted");

    const gridTheme = builtInThemes.find((item) => item.id === "grid-research");
    expect(gridTheme?.preserveLightColorsInDarkMode).toBe(true);
    expect(useThemeStore.getState().getThemeCSS("grid-research", true)).toBe(
      useThemeStore.getState().getThemeCSS("grid-research", false),
    );

    expect(useThemeStore.getState().getThemeCSS("default", true)).toContain(
      "wemd-wechat-dark-converted",
    );
  });

  it("深色代码块主题使用可读的深色语法高亮配色", () => {
    const darkCodeThemeIds = [
      "modern-editorial",
      "data-blueprint",
      "eastern-notes",
      "clear-guide",
      "whitespace-gallery",
    ];

    for (const themeId of darkCodeThemeIds) {
      const theme = builtInThemes.find((item) => item.id === themeId);

      expect(theme?.css, themeId).toMatch(
        /#wemd \.hljs-attr,[\s\S]*?#wemd \.hljs-literal,[\s\S]*?color:\s*#79c0ff;/,
      );
      expect(theme?.css, themeId).not.toMatch(
        /#wemd \.hljs-number,[\s\S]*?#wemd \.hljs-literal,[\s\S]*?color:\s*#008080;/,
      );
    }
  });
});
