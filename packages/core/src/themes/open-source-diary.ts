export const openSourceDiaryTheme = `/* WeMD Theme: 开源日记 · Dark Refined */
#wemd {
    padding: 32px 24px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, "PingFang SC", serif;
    color: #a8a8a8;
    background: #1b1b1f;
    word-break: break-word;
}

#wemd p {
    margin: 24px 0;
    line-height: 1.8;
    text-align: left;
    color: #a4a4ad;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.8px;
}

/* H1: 顶部细线 + 大字 */
#wemd h1 {
    margin: 8px 0 32px;
    text-align: left;
    border-top: 1px solid #303035;
    padding-top: 32px;
}
#wemd h1 .content {
    font-size: 22px;
    font-weight: 400;
    color: #d0d0d8;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 2px;
    line-height: 1.5;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

/* H2: 蓝色点缀线 */
#wemd h2 {
    margin: 40px 0 10px;
    text-align: left;
}
#wemd h2 .content {
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: #c5c5cc;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    padding-bottom: 14px;
    position: relative;
}
#wemd h2 .content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 32px;
    height: 2px;
    background: #0E88EB;
    border-radius: 1px;
    opacity: 0.7;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

/* H3 */
#wemd h3 {
    margin: 32px 0 12px;
    text-align: left;
}
#wemd h3 .content {
    font-size: 16px;
    font-weight: 600;
    color: #b5b5be;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.2px;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

/* H4 */
#wemd h4 {
    margin: 20px 0 8px;
    text-align: left;
}
#wemd h4 .content {
    font-size: 15px;
    font-weight: 600;
    color: #999;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
    opacity: 0.7;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

/* 引用: 半透明背景 + 精致左线 */
#wemd .multiquote-1 {
    margin: 28px 0;
    padding: 20px 22px;
    background: rgba(255,255,255,0.025);
    border-left: 1px solid #3a3a40;
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-1 p {
    margin: 0;
    color: #9696a0;
    font-size: 14px;
    line-height: 1.8;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}
#wemd .multiquote-2 {
    margin: 24px 0;
    padding: 16px 20px;
    background: rgba(14,136,235,0.04);
    border-left: 1px solid rgba(14,136,235,0.35);
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #9696a0;
    font-size: 14px;
    line-height: 1.8;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    font-style: italic;
}
#wemd .multiquote-3 {
    margin: 22px 0;
    padding: 14px 18px;
    background: rgba(255,255,255,0.015);
    border-left: 1px solid #333;
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #888;
    font-size: 14px;
    line-height: 1.8;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    font-style: italic;
}

/* 列表 */
#wemd ul, #wemd ol {
    margin: 22px 0;
    padding-left: 22px;
}
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 8px 0;
    color: #a4a4ad;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    line-height: 1.8;
    letter-spacing: 1.8px;
}
#wemd ul li::marker,
#wemd ol li::marker { color: #555; }
#wemd ul ul { list-style-type: circle; margin-top: 6px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker,
#wemd ol ol li::marker { color: #444; }

/* 链接 */
#wemd a {
    color: #60A5FA;
    text-decoration: none;
    border-bottom: 1px solid rgba(96,165,250,0.25);
    transition: border-color 0.2s;
}

/* 文本样式 */
#wemd strong { font-weight: 700; color: #d0d0d8; }
#wemd em { font-style: italic; color: #b0b0b8; }
#wemd em strong { font-weight: 700; font-style: italic; color: #d0d0d8; }
#wemd mark {
    background: rgba(14,136,235,0.1);
    color: #60A5FA;
    padding: 1px 6px;
    border-radius: 3px;
}
#wemd del { text-decoration: line-through; color: #555; opacity: 0.6; }

/* 行内代码 */
#wemd p code,
#wemd li code {
    color: #60A5FA;
    background: rgba(96,165,250,0.08);
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 3px;
    font-size: 13px;
    font-family: "SF Mono", "JetBrains Mono", "Cascadia Code", "Courier New", monospace;
    border: 1px solid rgba(96,165,250,0.1);
    letter-spacing: 0;
}

/* 代码块 */
#wemd pre code.hljs {
    display: block;
    padding: 20px 22px;
    background: #131316;
    border-radius: 6px;
    font-size: 13px;
    line-height: 1.7;
    font-family: "SF Mono", "JetBrains Mono", "Cascadia Code", "Consolas", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #282830;
}
#wemd pre code:not(.hljs) {
    color: #a4a4ad;
    background: #131316;
    border-radius: 6px;
    border: 1px solid #282830;
}

/* 图片 */
#wemd img {
    display: block;
    margin: 28px 0;
    max-width: 100%;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
#wemd figcaption {
    margin-top: 12px;
    text-align: center;
    color: #707078;
    font-size: 12px;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
}

/* 分割线: 精致细线 */
#wemd hr {
    margin: 36px auto;
    border: none;
    height: 1px;
    width: 100%;
    background: #282830;
}

/* 表格 */
#wemd table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
}
#wemd table tr th {
    background: rgba(255,255,255,0.025);
    color: #c5c5cc;
    padding: 12px 16px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid #303035;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1px;
}
#wemd table tr td {
    padding: 12px 16px;
    color: #9696a0;
    border-bottom: 1px solid #222225;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
}
#wemd table tr:last-child td { border-bottom: none; }

/* 脚注 */
#wemd .footnote-word,
#wemd .footnote-ref { color: #60A5FA; }
#wemd .footnotes-sep {
    border-top: 1px solid #282830;
    padding-top: 20px;
    margin-top: 36px;
    font-size: 12px;
    color: #555;
    letter-spacing: 1px;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #60A5FA;
    margin-right: 6px;
    font-size: 11px;
    opacity: 0.7;
}
#wemd .footnote-item p {
    color: #707078;
    font-size: 12px;
    margin: 4px 0;
    letter-spacing: 1px;
}

/* 公式 */
#wemd .block-equation svg,
#wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg,
#wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

/* 提示块 */
#wemd .callout {
    margin: 24px 0;
    padding: 16px 20px;
    background: rgba(255,255,255,0.02);
    border-radius: 4px;
    border: 1px solid #282830;
}
#wemd .callout-title {
    font-weight: 600;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
}
#wemd .callout-note { border-left: 3px solid #555; }
#wemd .callout-tip { border-left: 3px solid #60A5FA; }
#wemd .callout-important { border-left: 3px solid rgba(255,255,255,0.4); }
#wemd .callout-warning { border-left: 3px solid #d4a017; }
#wemd .callout-caution { border-left: 3px solid #d9534f; }
#wemd .callout-note .callout-title { color: #888; }
#wemd .callout-tip .callout-title { color: #60A5FA; }

/* Imageflow */
#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 0 0 5px 5px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
#wemd .imageflow-caption { text-align: center; color: #707078; font-size: 12px; }
`;
