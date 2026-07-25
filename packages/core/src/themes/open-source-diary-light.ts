export const openSourceDiaryLightTheme = `/* WeMD Theme: 开源日记 · Light Serif Reading */
#wemd {
    padding: 28px 20px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", "PingFang SC", serif;
    color: #555;
    background: #fafaf8;
    word-break: break-word;
}

#wemd p {
    margin: 22px 0;
    line-height: 1.75;
    text-align: left;
    color: #555;
    font-size: 15px;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
    letter-spacing: 1.5px;
}

#wemd h1 {
    margin: 16px 0 24px;
    text-align: left;
}
#wemd h1 .content {
    font-size: 22px;
    font-weight: 400;
    color: #222;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
    letter-spacing: 2px;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

#wemd h2 {
    margin: 20px 10px 0 0;
    text-align: left;
}
#wemd h2 .content {
    font-size: 22px;
    font-weight: 700;
    color: #333;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

#wemd h3 {
    margin: 24px 0 14px;
    text-align: left;
}
#wemd h3 .content {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 16px 0 8px;
    text-align: left;
}
#wemd h4 .content {
    font-size: 15px;
    font-weight: 700;
    color: #555;
    font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif;
    letter-spacing: 1px;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 24px 0;
    padding: 18px 20px;
    background: #f5f5f0;
    border-left: 2px solid #ccc;
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-1 p { margin: 0; color: #777; font-size: 15px; line-height: 1.75; letter-spacing: 1.5px; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; }
#wemd .multiquote-2 {
    margin: 20px 0;
    padding: 14px 18px;
    background: rgba(14,136,235,0.04);
    border-left: 2px solid #0E88EB;
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-2 p { margin: 0; color: #666; font-size: 15px; line-height: 1.75; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; letter-spacing: 1.5px; }
#wemd .multiquote-3 {
    margin: 18px 0;
    padding: 12px 16px;
    background: #fafaf8;
    border-left: 2px solid #ddd;
    border-radius: 0 4px 4px 0;
}
#wemd .multiquote-3 p { margin: 0; color: #888; font-size: 15px; line-height: 1.75; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; letter-spacing: 1.5px; }

#wemd ul, #wemd ol { margin: 18px 0; padding-left: 22px; }
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section { margin: 6px 0; color: #555; font-size: 15px; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; line-height: 1.75; letter-spacing: 1.5px; }
#wemd ul li::marker, #wemd ol li::marker { color: #999; }
#wemd ul ul { list-style-type: circle; margin-top: 4px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #bbb; }

#wemd a { color: #0E88EB; text-decoration: none; border-bottom: 1px solid rgba(14,136,235,0.2); }
#wemd strong { font-weight: 700; color: #0E88EB; }
#wemd em { font-style: italic; color: #888; }
#wemd em strong { font-weight: 700; font-style: italic; color: #0E88EB; }
#wemd mark { background: rgba(14,136,235,0.08); color: #0E88EB; padding: 1px 6px; border-radius: 3px; }
#wemd del { text-decoration: line-through; color: #ccc; }

#wemd p code, #wemd li code {
    color: #0E88EB; background: rgba(14,136,235,0.06);
    padding: 2px 6px; margin: 0 2px; border-radius: 3px;
    font-size: 14px; font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(14,136,235,0.12); letter-spacing: 0;
}

#wemd pre code.hljs {
    display: block; padding: 16px;
    background: #f8f8f6; border-radius: 6px;
    font-size: 13px; line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto; white-space: pre; min-width: max-content;
    border: 1px solid #eee;
}
#wemd pre code:not(.hljs) { color: #555; background: #f8f8f6; border-radius: 6px; border: 1px solid #eee; }

#wemd img { display: block; margin: 20px 0; max-width: 100%; border-radius: 0 0 5px 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
#wemd figcaption { margin-top: 10px; text-align: center; color: #999; font-size: 12px; letter-spacing: 1px; }

#wemd hr { margin: 32px auto; border: none; height: 1px; background: #e0e0d8; }

#wemd table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px; }
#wemd table tr th { background: #f5f5f0; color: #333; padding: 10px 14px; font-weight: 600; text-align: left; border-bottom: 2px solid #ddd; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; }
#wemd table tr td { padding: 10px 14px; color: #555; border-bottom: 1px solid #e8e8e0; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; letter-spacing: 1.5px; }

#wemd .footnote-word, #wemd .footnote-ref { color: #0E88EB; }
#wemd .footnotes-sep { border-top: 1px solid #e0e0d8; padding-top: 16px; margin-top: 32px; font-size: 12px; color: #ccc; }
#wemd .footnote-num { font-weight: 600; color: #0E88EB; margin-right: 4px; font-size: 11px; }
#wemd .footnote-item p { color: #ccc; font-size: 11px; margin: 4px 0; letter-spacing: 1px; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 20px 0; padding: 14px 18px; background: #fafaf8; border-radius: 4px; }
#wemd .callout-title { font-weight: 600; font-family: "Songti SC", "SimSun", "STSong", "Georgia", serif; letter-spacing: 1.5px; }
#wemd .callout-note { border-left: 3px solid #ccc; }
#wemd .callout-tip { border-left: 3px solid #0E88EB; }
#wemd .callout-important { border-left: 3px solid #555; }
#wemd .callout-warning { border-left: 3px solid #f5a623; }
#wemd .callout-caution { border-left: 3px solid #d9534f; }
#wemd .callout-note .callout-title { color: #888; }
#wemd .callout-tip .callout-title { color: #0E88EB; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 0 0 5px 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
#wemd .imageflow-caption { text-align: center; color: #999; font-size: 12px; }
`;
