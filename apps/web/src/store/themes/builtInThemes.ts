/**
 * 内置主题定义
 * 提取自 editorStore.ts，集中管理所有预设主题
 */
import {
  basicTheme,
  codeGithubDarkTheme,
  customDefaultTheme,
  codeGithubTheme,
  clearGuideTheme,
  dataBlueprintTheme,
  easternNotesTheme,
  gridResearchTheme,
  auroraDarkTheme,
  oversizedTechTheme,
  violetLabTheme,
  academicPaperTheme,
  auroraGlassTheme,
  bauhausTheme,
  cyberpunkNeonTheme,
  knowledgeBaseTheme,
  luxuryGoldTheme,
  morandiForestTheme,
  modernEditorialTheme,
  neoBrutalismTheme,
  receiptTheme,
  sunsetFilmTheme,
  templateTheme,
  whitespaceGalleryTheme,
  softPinkDreamTheme,
  warmApricotTheme,
  sakuraPinkTheme,
  mintGreenTheme,
  skyBlueTheme,
  mauvePurpleTheme,
  caramelGoldTheme,
  cherryRedTheme,
  aiToolStyleTheme,
  openSourceDiaryTheme,
  aiToolStyleLightTheme,
  openSourceDiaryLightTheme,
  openSourceDiaryOrangeTheme,
  openSourceDiaryOrangeLightTheme,
} from "@wemd/core";

// 从 ThemeDesigner 导入共享类型（解决类型重复定义问题）
import type {
  DesignerVariables,
  HeadingStyle,
} from "../../components/Theme/ThemeDesigner/types";
export type { DesignerVariables, HeadingStyle };

/**
 * 自定义主题接口
 */
export interface CustomTheme {
  id: string;
  name: string;
  css: string;
  isBuiltIn: boolean;
  /** 是否允许用户主动选择；设为 false 的内置主题仅用于兼容历史文章 */
  isSelectable?: boolean;
  /** 暗色界面中保持主题原色，适用于必须维持浅色纸面的主题 */
  preserveLightColorsInDarkMode?: boolean;
  createdAt: string;
  updatedAt: string;
  /** 编辑模式：创建时确定，不可更改 */
  editorMode?: "visual" | "css";
  /** 可视化设计器变量，仅 visual 模式存在 */
  designerVariables?: DesignerVariables;
}

/**
 * 主题定义接口（简化版，用于向后兼容）
 */
export interface ThemeDefinition {
  id: string;
  name: string;
  css: string;
}

export const isThemeSelectable = (theme: CustomTheme): boolean =>
  theme.isSelectable !== false;

/**
 * 内置主题列表
 */
export const builtInThemes: CustomTheme[] = [
  {
    id: "default",
    name: "默认主题",
    css: basicTheme + "\n" + customDefaultTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "data-blueprint",
    name: "数据蓝图",
    css: basicTheme + "\n" + dataBlueprintTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "eastern-notes",
    name: "东方笺谱",
    css: basicTheme + "\n" + easternNotesTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "clear-guide",
    name: "清晰指南",
    css: basicTheme + "\n" + clearGuideTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "whitespace-gallery",
    name: "留白画册",
    css:
      basicTheme + "\n" + whitespaceGalleryTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "grid-research",
    name: "方格研究风",
    css: basicTheme + "\n" + gridResearchTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    preserveLightColorsInDarkMode: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "aurora-dark",
    name: "极光暗色风",
    css: basicTheme + "\n" + auroraDarkTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "oversized-tech",
    name: "大号科技风",
    css: basicTheme + "\n" + oversizedTechTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "violet-lab",
    name: "紫雾实验风",
    css: basicTheme + "\n" + violetLabTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "academic-paper",
    name: "学术论文",
    css: basicTheme + "\n" + academicPaperTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "aurora-glass",
    name: "极光玻璃",
    css: basicTheme + "\n" + auroraGlassTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    isSelectable: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "bauhaus",
    name: "包豪斯",
    css: basicTheme + "\n" + bauhausTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    isSelectable: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cyberpunk-neon",
    name: "赛博朋克",
    css: basicTheme + "\n" + cyberpunkNeonTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    isSelectable: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "knowledge-base",
    name: "知识库",
    css: basicTheme + "\n" + knowledgeBaseTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "luxury-gold",
    name: "黑金奢华",
    css: basicTheme + "\n" + luxuryGoldTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "morandi-forest",
    name: "莫兰迪森林",
    css: basicTheme + "\n" + morandiForestTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "modern-editorial",
    name: "编辑部手记",
    css: basicTheme + "\n" + modernEditorialTheme + "\n" + codeGithubDarkTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "neo-brutalism",
    name: "新粗野主义",
    css: basicTheme + "\n" + neoBrutalismTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    isSelectable: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "receipt",
    name: "购物小票",
    css: basicTheme + "\n" + receiptTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sunset-film",
    name: "落日胶片",
    css: basicTheme + "\n" + sunsetFilmTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "template",
    name: "主题模板",
    css: basicTheme + "\n" + templateTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    isSelectable: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "soft-pink-dream",
    name: "🎀 奶油粉白",
    css: basicTheme + "\n" + softPinkDreamTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "warm-apricot",
    name: "🍑 暖杏治愈",
    css: basicTheme + "\n" + warmApricotTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sakura-pink",
    name: "🌸 樱花粉",
    css: basicTheme + "\n" + sakuraPinkTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mint-green",
    name: "🌿 薄荷绿",
    css: basicTheme + "\n" + mintGreenTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "sky-blue",
    name: "☁️ 天空蓝",
    css: basicTheme + "\n" + skyBlueTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mauve-purple",
    name: "💜 锦葵紫",
    css: basicTheme + "\n" + mauvePurpleTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "caramel-gold",
    name: "🍮 焦糖金",
    css: basicTheme + "\n" + caramelGoldTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "cherry-red",
    name: "🍒 樱桃红",
    css: basicTheme + "\n" + cherryRedTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "ai-tool-style",
    name: "🛠️ AI工具风",
    css: basicTheme + "\n" + aiToolStyleTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "open-source-diary",
    name: "📰 开源日记",
    css: basicTheme + "\n" + openSourceDiaryTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "ai-tool-style-light",
    name: "☀️ AI工具风·亮",
    css: basicTheme + "\n" + aiToolStyleLightTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "open-source-diary-light",
    name: "☀️ 开源日记·亮",
    css: basicTheme + "\n" + openSourceDiaryLightTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "open-source-diary-orange",
    name: "🍊 开源日记·橙",
    css:
      basicTheme + "\n" + openSourceDiaryOrangeTheme + "\n" + codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "open-source-diary-orange-light",
    name: "🍊 开源日记·橙·亮",
    css:
      basicTheme +
      "\n" +
      openSourceDiaryOrangeLightTheme +
      "\n" +
      codeGithubTheme,
    isBuiltIn: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

/**
 * 默认主题列表（向后兼容格式）
 */
export const defaultThemes: ThemeDefinition[] = [
  {
    id: "default",
    name: "默认主题",
    css: basicTheme + "\n" + customDefaultTheme + "\n" + codeGithubTheme,
  },
];

/**
 * 获取默认主题 CSS
 */
export function getDefaultThemeCSS(): string {
  return builtInThemes[0].css;
}
