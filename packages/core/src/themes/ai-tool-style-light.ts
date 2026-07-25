export const aiToolStyleLightTheme = `/* WeMD Theme: AI工具风 · Light */
#wemd {
    padding: 24px 18px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
    color: #555;
    background: #fff;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxkZWZzPjxwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPgogICAgPHBhdGggZD0nTTEyIDBMMjQgMTJMMTIgMjRMMCAxMlonIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSgxNDUsMTA5LDIxMywwLjA2KScgc3Ryb2tlLXdpZHRoPScwLjUnLz4KICA8L3BhdHRlcm4+PC9kZWZzPgogIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjZyknLz4KPC9zdmc+);
    background-repeat: repeat;
    word-break: break-word;
}

#wemd p {
    margin: 18px 0;
    line-height: 1.85;
    text-align: left;
    color: #555;
    font-size: 14px;
    letter-spacing: 1.5px;
}

#wemd h1 {
    margin: 24px 0 20px;
    text-align: left;
}
#wemd h1 .content {
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    background: #916DD5;
    padding: 10px 18px;
    border-radius: 8px 8px 0 0;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

#wemd h2 {
    margin: 20px 10px 0 0;
    text-align: left;
}
#wemd h2 .content {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    padding: 4px 0 4px 12px;
    border-left: 3px solid #916DD5;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

#wemd h3 {
    margin: 24px 0 14px;
    text-align: center;
}
#wemd h3 .content {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #333;
    padding: 6px 0;
    border-bottom: 2px solid #916DD5;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 18px 0 10px;
    text-align: left;
}
#wemd h4 .content { font-size: 14px; font-weight: 600; color: #777; }
#wemd h4 .content::before { content: "● "; color: #E2C056; font-size: 8px; vertical-align: middle; }
#wemd h4 .prefix, #wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 20px 0;
    padding: 16px 18px;
    background: #f5f5f5;
    border-left: none;
    border-radius: 4px;
}
#wemd .multiquote-1 p { margin: 0; color: #555; font-size: 14px; line-height: 1.75; letter-spacing: 1.5px; }
#wemd .multiquote-2 {
    margin: 18px 0;
    padding: 14px 18px;
    background: rgba(145,109,213,0.06);
    border-left: 3px solid #916DD5;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-2 p { margin: 0; color: #666; font-size: 14px; line-height: 1.7; }
#wemd .multiquote-3 {
    margin: 16px 0;
    padding: 12px 16px;
    background: rgba(226,192,86,0.08);
    border-left: 3px solid #E2C056;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p { margin: 0; color: #666; font-size: 14px; line-height: 1.7; }

#wemd ul, #wemd ol { margin: 16px 0; padding-left: 22px; }
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section { margin: 6px 0; color: #555; font-size: 14px; line-height: 1.85; letter-spacing: 1.5px; }
#wemd ul li::marker, #wemd ol li::marker { color: #916DD5; }
#wemd ul ul { list-style-type: circle; margin-top: 4px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #E2C056; }

#wemd a { color: #72AAA6; text-decoration: none; border-bottom: 1px solid rgba(114,170,166,0.3); }

#wemd strong { font-weight: 700; color: #916DD5; }
#wemd em { font-style: italic; color: #888; }
#wemd em strong { font-weight: 700; font-style: italic; color: #916DD5; }
#wemd mark { background: rgba(226,192,86,0.2); color: #8a6d14; padding: 2px 6px; border-radius: 3px; }
#wemd del { text-decoration: line-through; color: #bbb; }

#wemd p code, #wemd li code {
    color: #916DD5;
    background: rgba(145,109,213,0.08);
    padding: 2px 8px; margin: 0 3px; border-radius: 4px;
    font-size: 13px; font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(145,109,213,0.15);
}

#wemd pre code.hljs {
    display: block; padding: 16px;
    background: #f8f8f8; border-radius: 8px;
    font-size: 13px; line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto; white-space: pre; min-width: max-content;
    border: 1px solid #eee;
}
#wemd pre code:not(.hljs) { color: #555; background: #f8f8f8; border-radius: 8px; border: 1px solid #eee; }

#wemd img { display: block; margin: 20px 0; max-width: 100%; border-radius: 0 0 5px 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
#wemd figcaption { margin-top: 6px; text-align: center; color: #999; font-size: 12px; }

#wemd hr { margin: 32px auto; border: none; height: 1px; background: #e8e8e8; }

#wemd table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
#wemd table tr th { background: rgba(145,109,213,0.06); color: #333; padding: 12px 14px; font-weight: 600; text-align: left; border-bottom: 2px solid #916DD5; }
#wemd table tr td { padding: 12px 14px; color: #555; border-bottom: 1px solid #eee; }

#wemd .footnote-word, #wemd .footnote-ref { color: #916DD5; }
#wemd .footnotes-sep { border-top: 1px solid #e8e8e8; padding-top: 16px; margin-top: 32px; font-size: 12px; color: #bbb; }
#wemd .footnote-num { font-weight: 600; color: #916DD5; margin-right: 4px; font-size: 11px; }
#wemd .footnote-item p { color: #bbb; font-size: 12px; margin: 4px 0; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 20px 0; padding: 14px 18px; border-radius: 6px; background: #fafafa; }
#wemd .callout-title { font-weight: 600; }
#wemd .callout-note { border-left: 3px solid #72AAA6; }
#wemd .callout-tip { border-left: 3px solid #E2C056; }
#wemd .callout-important { border-left: 3px solid #916DD5; }
#wemd .callout-warning { border-left: 3px solid #f5a623; }
#wemd .callout-caution { border-left: 3px solid #d9534f; }
#wemd .callout-note .callout-title { color: #72AAA6; }
#wemd .callout-tip .callout-title { color: #d4a017; }
#wemd .callout-important .callout-title { color: #916DD5; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 0 0 5px 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
#wemd .imageflow-caption { text-align: center; color: #999; }
`;
