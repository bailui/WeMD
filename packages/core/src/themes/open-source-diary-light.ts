export const openSourceDiaryLightTheme = `/* WeMD Theme: 开源日记 · Light Refined v2 */
#wemd {
    padding: 36px 26px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, "PingFang SC", serif;
    color: #4a4a50;
    background: #fdfdfa;
    word-break: break-word;
}

#wemd p {
    margin: 26px 0;
    line-height: 1.9;
    text-align: justify;
    color: #4a4a50;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
}

#wemd h1 {
    margin: 4px 0 36px;
    text-align: left;
    border-top: 2px solid #e0e0d8;
    padding-top: 36px;
}
#wemd h1 .content {
    font-size: 24px;
    font-weight: 500;
    color: #1a1a20;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 3px;
    line-height: 1.4;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

#wemd h2 {
    margin: 42px 0 14px;
    text-align: left;
}
#wemd h2 .content {
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: #222228;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 2px;
    padding-bottom: 16px;
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
    opacity: 0.6;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

#wemd h3 {
    margin: 34px 0 14px;
    text-align: left;
}
#wemd h3 .content {
    font-size: 16px;
    font-weight: 600;
    color: #3a3a42;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.2px;
    padding-left: 14px;
    border-left: 3px solid #d8d8d0;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 22px 0 10px;
}
#wemd h4 .content {
    font-size: 13px;
    font-weight: 600;
    color: #999;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    opacity: 0.7;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 30px 0;
    padding: 22px 24px;
    background: #f6f6f0;
    border: 1px solid #e0e0d8;
    border-left: 2px solid #c0c0b0;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-1 p {
    margin: 0;
    color: #6a6a70;
    font-size: 14px;
    line-height: 1.9;
    letter-spacing: 1.2px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}
#wemd .multiquote-2 {
    margin: 24px 0;
    padding: 16px 20px;
    background: rgba(14,136,235,0.025);
    border: 1px solid rgba(14,136,235,0.1);
    border-left: 2px solid rgba(14,136,235,0.35);
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #6a6a70;
    font-size: 14px;
    line-height: 1.9;
    letter-spacing: 1.2px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}
#wemd .multiquote-3 {
    margin: 22px 0;
    padding: 14px 18px;
    background: #fafaf6;
    border: 1px solid #e8e8e0;
    border-left: 2px solid #d8d8d0;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #888;
    font-size: 14px;
    line-height: 1.9;
    letter-spacing: 1.2px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}

#wemd ul, #wemd ol { margin: 24px 0; padding-left: 24px; }
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 9px 0;
    color: #4a4a50;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    line-height: 1.9;
    letter-spacing: 1.5px;
}
#wemd ul li::marker, #wemd ol li::marker { color: #bbb; }
#wemd ul ul { list-style-type: circle; margin-top: 6px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #ccc; }

#wemd a {
    color: #0E88EB;
    text-decoration: none;
    border-bottom: 1px solid rgba(14,136,235,0.2);
}

#wemd strong { font-weight: 700; color: #1a1a20; }
#wemd em { font-style: italic; color: #6a6a70; }
#wemd em strong { font-weight: 700; font-style: italic; color: #1a1a20; }
#wemd mark { background: rgba(14,136,235,0.06); color: #0E88EB; padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(14,136,235,0.08); }
#wemd del { text-decoration: line-through; color: #bbb; }

#wemd p code, #wemd li code {
    color: #0E88EB;
    background: rgba(14,136,235,0.04);
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 13px;
    font-family: "SF Mono", "JetBrains Mono", "Cascadia Code", "Courier New", monospace;
    border: 1px solid rgba(14,136,235,0.06);
    letter-spacing: 0;
}

#wemd pre code.hljs {
    display: block;
    padding: 22px 24px;
    background: #f6f6f0;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.7;
    font-family: "SF Mono", "JetBrains Mono", "Cascadia Code", "Consolas", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #e8e8e0;
}
#wemd pre code:not(.hljs) { color: #4a4a50; background: #f6f6f0; border-radius: 8px; border: 1px solid #e8e8e0; }

#wemd img { display: block; margin: 30px 0; max-width: 100%; border-radius: 0 0 6px 6px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
#wemd figcaption { margin-top: 14px; text-align: center; color: #aaa; font-size: 12px; letter-spacing: 1.2px; font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif; }

#wemd hr { margin: 40px auto; border: none; height: 1px; width: 100%; background: #e0e0d8; position: relative; }
#wemd hr::after { content: "\u00a7"; position: absolute; top: -14px; left: 50%; transform: translateX(-50%); color: #d0d0c8; font-size: 18px; font-family: Georgia, serif; background: #fdfdfa; padding: 0 8px; }

#wemd table { width: 100%; border-collapse: collapse; margin: 26px 0; font-size: 14px; border: 1px solid #e0e0d8; border-radius: 6px; overflow: hidden; }
#wemd table tr th { background: #f6f6f0; color: #3a3a42; padding: 14px 18px; font-weight: 600; text-align: left; border-bottom: 1px solid #ddd; font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif; letter-spacing: 1.2px; }
#wemd table tr td { padding: 14px 18px; color: #4a4a50; border-bottom: 1px solid #eee; font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif; letter-spacing: 1.2px; }
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word, #wemd .footnote-ref { color: #0E88EB; }
#wemd .footnotes-sep { border-top: 1px solid #e0e0d8; padding-top: 22px; margin-top: 40px; font-size: 12px; color: #bbb; letter-spacing: 1.2px; }
#wemd .footnote-num { font-weight: 600; color: #0E88EB; margin-right: 6px; font-size: 11px; opacity: 0.6; }
#wemd .footnote-item p { color: #aaa; font-size: 12px; margin: 5px 0; letter-spacing: 1px; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 26px 0; padding: 18px 22px; background: #fdfdf8; border-radius: 6px; border: 1px solid #e0e0d8; }
#wemd .callout-title { font-weight: 600; font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif; letter-spacing: 1.2px; margin-bottom: 10px; }
#wemd .callout-note { border-left: 3px solid #bbb; }
#wemd .callout-tip { border-left: 3px solid #0E88EB; }
#wemd .callout-important { border-left: 3px solid #555; }
#wemd .callout-warning { border-left: 3px solid #f5a623; }
#wemd .callout-caution { border-left: 3px solid #d9534f; }
#wemd .callout-note .callout-title { color: #888; }
#wemd .callout-tip .callout-title { color: #0E88EB; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 0 0 6px 6px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
#wemd .imageflow-caption { text-align: center; color: #aaa; font-size: 12px; }
`;
