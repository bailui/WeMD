export const softPinkDreamTheme = `/* 奶油粉白 · Soft Pink Dream */
#wemd {
    padding: 36px 24px;
    max-width: 677px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #4a3548;
    background: linear-gradient(180deg, #fff9fb 0%, #ffffff 30%);
    border-radius: 24px;
    word-break: break-word;
}

/* 段落 */
#wemd p {
    margin: 22px 0;
    line-height: 1.8;
    text-align: justify;
    color: #4a3548;
    font-size: 16px;
    letter-spacing: 0.3px;
}

/* 一级标题 - 玫瑰金下划线 */
#wemd h1 {
    margin: 50px 0 36px;
    text-align: center;
}
#wemd h1 .content {
    display: inline-block;
    font-size: 26px;
    font-weight: 700;
    color: #3d2038;
    padding-bottom: 16px;
    position: relative;
}
#wemd h1 .content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #ffb3c6, #e85d8e, #ffb3c6);
    border-radius: 2px;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

/* 二级标题 - 粉色左边框 */
#wemd h2 {
    margin: 40px 0 24px;
}
#wemd h2 .content {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #5a3d52;
    padding: 6px 0 6px 16px;
    border-left: 4px solid #e85d8e;
    border-radius: 0 8px 8px 0;
    background: linear-gradient(90deg, rgba(232,93,142,0.08), transparent);
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

/* 三级标题 - 粉色圆角标签 */
#wemd h3 {
    margin: 32px 0 18px;
}
#wemd h3 .content {
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    background: #e85d8e;
    padding: 5px 16px;
    border-radius: 20px;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

/* 四级标题 */
#wemd h4 {
    margin: 24px 0 12px;
}
#wemd h4 .content {
    font-size: 16px;
    font-weight: 600;
    color: #8a6e80;
    padding-left: 12px;
    border-left: 3px solid #f0a0b8;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

/* 引用 - 粉色卡片 */
#wemd .multiquote-1 {
    margin: 28px 0;
    padding: 20px 24px;
    background: #fff9fb;
    border-left: 4px solid #ffb3c6;
    border-radius: 0 16px 16px 0;
    box-shadow: 0 2px 12px rgba(255,107,138,0.06);
}
#wemd .multiquote-1 p {
    color: #6b5565;
    font-size: 15px;
}
#wemd .multiquote-2 {
    margin: 24px 0;
    padding: 16px 20px;
    background: #fff9fb;
    border-left: 3px solid #f0a0b8;
    border-radius: 0 12px 12px 0;
}
#wemd .multiquote-2 p {
    color: #6b5565;
    font-size: 14px;
}
#wemd .multiquote-3 {
    margin: 22px 0;
    padding: 14px 18px;
    background: #fffcfd;
    border-left: 2px solid #ffd6e0;
    border-radius: 0 10px 10px 0;
}
#wemd .multiquote-3 p {
    color: #6b5565;
    font-size: 14px;
}

/* 列表 */
#wemd ul, #wemd ol {
    margin: 22px 0;
    padding-left: 24px;
}
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 8px 0;
    color: #4a3548;
    line-height: 1.8;
}
#wemd ul li::marker,
#wemd ol li::marker { color: #e85d8e; }
#wemd ul ul li::marker,
#wemd ol ol li::marker { color: #f0a0b8; }

/* 链接 */
#wemd a {
    color: #e85d8e;
    text-decoration: none;
    border-bottom: 1.5px solid rgba(232,93,142,0.3);
}

/* 文本样式 */
#wemd strong { font-weight: 700; color: #3d2038; }
#wemd em { font-style: italic; color: #8a6e80; }
#wemd em strong { font-weight: 700; font-style: italic; color: #3d2038; }
#wemd mark {
    background: #fff0f5;
    color: #e85d8e;
    padding: 2px 8px;
    border-radius: 6px;
}
#wemd del { text-decoration: line-through; color: #c0a0b0; }

/* 行内代码 */
#wemd p code,
#wemd li code {
    color: #e85d8e;
    background: #fff5f7;
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 6px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
}

/* 代码块 */
#wemd pre code.hljs {
    display: block;
    padding: 20px;
    background: #2d1e28;
    border-radius: 16px;
    font-size: 13px;
    line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid rgba(232,93,142,0.15);
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
#wemd pre code:not(.hljs) {
    color: #e0c0d0;
    background: #2d1e28;
    border-radius: 16px;
    border: 1px solid rgba(232,93,142,0.15);
}

/* 图片 */
#wemd img {
    display: block;
    margin: 24px auto;
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
#wemd figcaption {
    margin-top: 10px;
    text-align: center;
    color: #b89bad;
    font-size: 13px;
}

/* 分割线 */
#wemd hr {
    margin: 40px auto;
    border: none;
    height: 2px;
    width: 60%;
    background: linear-gradient(90deg, transparent, #ffd6e0, transparent);
    border-radius: 1px;
}

/* 表格 */
#wemd table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 28px 0;
    font-size: 14px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(255,107,138,0.06);
}
#wemd table tr th {
    background: #fff5f7;
    color: #5a3d52;
    padding: 14px 16px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #ffd6e0;
}
#wemd table tr td {
    padding: 14px 16px;
    color: #4a3548;
    border-bottom: 1px solid #ffd6e0;
    background: #fff;
}
#wemd table tr:last-child td { border-bottom: none; }

/* 脚注 */
#wemd .footnote-word,
#wemd .footnote-ref { color: #e85d8e; }
#wemd .footnotes-sep {
    border-top: 1px solid #ffd6e0;
    padding-top: 20px;
    margin-top: 40px;
    font-size: 12px;
    color: #c0a0b0;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #e85d8e;
    margin-right: 4px;
    font-size: 11px;
}
#wemd .footnote-item p {
    color: #b89bad;
    font-size: 12px;
    margin: 4px 0;
}

/* 公式 */
#wemd .block-equation svg,
#wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg,
#wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

/* 提示块 */
#wemd .callout {
    margin: 28px 0;
    padding: 20px 24px;
    background: #fff9fb;
    border-radius: 16px;
    border: 1px solid #ffd6e0;
}
#wemd .callout-title {
    font-weight: 600;
    color: #e85d8e;
    margin-bottom: 8px;
}
#wemd .callout-note { border-left: 4px solid #e85d8e; }
#wemd .callout-tip { border-left: 4px solid #f0a0b8; }
#wemd .callout-important { border-left: 4px solid #ff6b8a; }
#wemd .callout-warning { border-left: 4px solid #f5a623; }
#wemd .callout-caution { border-left: 4px solid #e74c3c; }

/* Imageflow */
#wemd .imageflow-layer1 {
    margin-top: 1em; margin-bottom: 0.5em;
    border: 0; padding: 0; overflow: hidden;
}
#wemd .imageflow-layer2 {
    white-space: nowrap; width: 100%; overflow-x: scroll;
}
#wemd .imageflow-layer3 {
    display: inline-block; word-wrap: break-word;
    white-space: normal; vertical-align: top;
    width: 80%; margin-right: 10px; flex-shrink: 0;
}
#wemd .imageflow-img {
    display: block; width: 100%; height: auto;
    max-height: 300px; object-fit: contain; border-radius: 12px;
}
#wemd .imageflow-caption { text-align: center; color: #b89bad; }
`;
