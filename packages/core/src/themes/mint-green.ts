export const mintGreenTheme = `/* WeMD Theme: 薄荷绿 · 法律文书风 */
#wemd {
    padding: 36px 26px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
    color: #333;
    background-color: #fafdfb;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxkZWZzPjxwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPgogICAgPHBhdGggZD0nTTEwIDBMMjAgMTBMMTAgMjBMMCAxMFonIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSgxMjEsMTgwLDE3NiwwLjEyKScgc3Ryb2tlLXdpZHRoPScwLjUnLz4KICA8L3BhdHRlcm4+PC9kZWZzPgogIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjZyknLz4KPC9zdmc+Cg==);
    background-repeat: repeat;
    word-break: break-word;
}

#wemd p {
    margin: 22px 0;
    line-height: 1.75;
    text-align: left;
    color: #333;
    font-size: 16px;
    letter-spacing: 0.5px;
}

/* H1: 黑色 + 渐变下划线 */
#wemd h1 {
    margin: 50px 0 30px;
    text-align: center;
}
#wemd h1 .content {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    padding-bottom: 16px;
    position: relative;
    display: inline-block;
}
#wemd h1 .content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #79B4B0, #4CAF50);
    border-radius: 2px;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

/* H2: 左侧青色竖条 */
#wemd h2 {
    margin: 38px 0 18px;
    text-align: left;
}
#wemd h2 .content {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #222;
    padding: 4px 0 4px 16px;
    border-left: 4px solid #79B4B0;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

/* H3: 胶囊标签 */
#wemd h3 {
    margin: 32px 0 16px;
    text-align: left;
}
#wemd h3 .content {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 6px 18px;
    background: linear-gradient(135deg, #4CAF50, #79B4B0);
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(76,175,80,0.15);
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

/* H4 */
#wemd h4 {
    margin: 24px 0 12px;
    text-align: left;
}
#wemd h4 .content {
    font-size: 16px;
    font-weight: 600;
    color: #555;
}
#wemd h4 .content::before {
    content: "● ";
    color: #79B4B0;
    font-size: 10px;
    vertical-align: middle;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

/* 引用块: 浅青底 + 微光 */
#wemd .multiquote-1 {
    margin: 26px 0;
    padding: 20px 24px;
    background: linear-gradient(135deg, #e8f5f3, #eef9f6);
    border-left: none;
    border-radius: 12px;
    position: relative;
    box-shadow: 0 2px 12px rgba(121,180,176,0.08);
}
#wemd .multiquote-1::before {
    content: "\u2728";
    position: absolute;
    top: 14px;
    left: 16px;
    font-size: 16px;
    opacity: 0.8;
}
#wemd .multiquote-1 p {
    margin: 0;
    padding-left: 24px;
    color: #3a5a55;
    font-size: 16px;
    line-height: 1.85;
    font-weight: 500;
}
#wemd .multiquote-2 {
    margin: 22px 0;
    padding: 16px 20px;
    background: #f0f7f5;
    border-left: 3px solid #4CAF50;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #3a5a55;
    font-size: 15px;
    line-height: 1.8;
}
#wemd .multiquote-3 {
    margin: 18px 0;
    padding: 14px 18px;
    background: #fafdfb;
    border-left: 3px solid #79B4B0;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #4a6a65;
    font-size: 14px;
    line-height: 1.8;
}

/* 列表: 青色实心圆点 */
#wemd ul, #wemd ol {
    margin: 22px 0;
    padding-left: 26px;
}
#wemd ul { list-style-type: none; }
#wemd ul li::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #79B4B0;
    border-radius: 50%;
    margin-right: 12px;
    margin-left: -26px;
    vertical-align: middle;
}
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 8px 0;
    color: #333;
    font-size: 16px;
    line-height: 1.75;
}
#wemd ol li::marker { color: #79B4B0; font-weight: 600; }
#wemd ul ol { list-style-type: decimal; }
#wemd ol ul { list-style-type: none; }

/* 链接 */
#wemd a {
    color: #79B4B0;
    text-decoration: none;
    border-bottom: 1px solid rgba(121,180,176,0.3);
}

/* 文本 */
#wemd strong { font-weight: 700; color: #1a3a36; }
#wemd em { font-style: italic; color: #4CAF50; }
#wemd em strong { font-weight: 700; font-style: italic; color: #1a3a36; }
#wemd mark {
    background: rgba(76,175,80,0.12);
    color: #2e7d32;
    padding: 2px 8px;
    border-radius: 4px;
}
#wemd del { text-decoration: line-through; color: #bbb; }

/* 行内代码 */
#wemd p code,
#wemd li code {
    color: #2e7d32;
    background: rgba(76,175,80,0.06);
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(76,175,80,0.12);
}

/* 代码块 */
#wemd pre code.hljs {
    display: block;
    padding: 20px 24px;
    background: #f0f7f5;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.7;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #d8e8e5;
}
#wemd pre code:not(.hljs) {
    color: #333;
    background: #f0f7f5;
    border-radius: 8px;
    border: 1px solid #d8e8e5;
}

/* 图片 */
#wemd img {
    display: block;
    margin: 24px auto;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
#wemd figcaption {
    margin-top: 10px;
    text-align: center;
    color: #999;
    font-size: 13px;
}

/* 分割线: 青色虚线方块 */
#wemd hr {
    margin: 36px auto;
    border: none;
    height: 2px;
    width: 70%;
    background: repeating-linear-gradient(
        90deg,
        #79B4B0 0px,
        #79B4B0 6px,
        transparent 6px,
        transparent 14px
    );
    border-radius: 1px;
    opacity: 0.6;
}

/* 表格 */
#wemd table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
    border: 1px solid #d8e8e5;
    border-radius: 8px;
    overflow: hidden;
}
#wemd table tr th {
    background: #e8f5f3;
    color: #2a4a45;
    padding: 12px 16px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #79B4B0;
}
#wemd table tr td {
    padding: 12px 16px;
    color: #333;
    border-bottom: 1px solid #e8f0ed;
}
#wemd table tr:last-child td { border-bottom: none; }

/* 脚注 */
#wemd .footnote-word,
#wemd .footnote-ref { color: #79B4B0; }
#wemd .footnotes-sep {
    border-top: 1px solid #d8e8e5;
    padding-top: 20px;
    margin-top: 36px;
    font-size: 12px;
    color: #aaa;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #4CAF50;
    margin-right: 6px;
    font-size: 11px;
}
#wemd .footnote-item p {
    color: #999;
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
    margin: 24px 0;
    padding: 18px 22px;
    border-radius: 10px;
    background: #fafdfb;
    border: 1px solid #d8e8e5;
}
#wemd .callout-title {
    font-weight: 600;
    margin-bottom: 8px;
}
#wemd .callout-note { background: #e8f5f3; border-left: 4px solid #79B4B0; }
#wemd .callout-tip { background: #e8f5f3; border-left: 4px solid #4CAF50; }
#wemd .callout-important { background: #fff8e1; border-left: 4px solid #f5a623; }
#wemd .callout-warning { background: #fff0f0; border-left: 4px solid #e57373; }
#wemd .callout-caution { background: #fff0f0; border-left: 4px solid #d32f2f; }
#wemd .callout-note .callout-title { color: #79B4B0; }
#wemd .callout-tip .callout-title { color: #4CAF50; }

/* Imageflow */
#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 8px; }
#wemd .imageflow-caption { text-align: center; color: #999; }
`;
