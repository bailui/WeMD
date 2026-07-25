export const sakuraPinkTheme = `/* WeMD Theme: 樱花粉 */
#wemd {
    padding: 32px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
    color: #333;
    background-color: #fdf9fa;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxkZWZzPjxwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPgogICAgPHBhdGggZD0nTTEwIDBMMjAgMTBMMTAgMjBMMCAxMFonIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSgyNTUsMTEyLDE1MCwwLjEwKScgc3Ryb2tlLXdpZHRoPScwLjUnLz4KICA8L3BhdHRlcm4+PC9kZWZzPgogIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjZyknLz4KPC9zdmc+Cg==);
    background-repeat: repeat;
    word-break: break-word;
}

#wemd p {
    margin: 18px 0;
    line-height: 1.75;
    text-align: left;
    color: #4a3a40;
    font-size: 16px;
    letter-spacing: 0.4px;
}

#wemd h1 {
    margin: 40px 0 28px;
    text-align: center;
}
#wemd h1 .content {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    padding-bottom: 14px;
    position: relative;
    display: inline-block;
}
#wemd h1 .content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #ffb7cd, #ff7096);
    border-radius: 2px;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

#wemd h2 {
    margin: 36px 0 16px;
    text-align: left;
}
#wemd h2 .content {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #222;
    padding: 4px 0 4px 14px;
    border-left: 4px solid #ff7096;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

#wemd h3 {
    margin: 28px 0 14px;
    text-align: left;
}
#wemd h3 .content {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 5px 16px;
    background: linear-gradient(135deg, #e91e63, #ffb7cd);
    border-radius: 18px;
    box-shadow: 0 2px 8px rgba(255,112,150,0.15);
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 22px 0 10px;
    text-align: left;
}
#wemd h4 .content {
    font-size: 15px;
    font-weight: 600;
    color: #555;
}
#wemd h4 .content::before {
    content: "● ";
    color: #ff7096;
    font-size: 8px;
    vertical-align: middle;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 24px 0;
    padding: 18px 22px;
    background: linear-gradient(135deg, #fff5f7, #fff9fb);
    border-left: none;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 2px 10px rgba(255,112,150,0.06);
}
#wemd .multiquote-1::before {
    content: "\\u2728";
    position: absolute;
    top: 12px;
    left: 14px;
    font-size: 14px;
    opacity: 0.7;
}
#wemd .multiquote-1 p {
    margin: 0;
    padding-left: 22px;
    color: #5a3a44;
    font-size: 15px;
    line-height: 1.75;
    font-weight: 500;
}
#wemd .multiquote-2 {
    margin: 20px 0;
    padding: 14px 18px;
    background: #fff5f7;
    border-left: 3px solid #ff7096;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #4a3a40;
    font-size: 14px;
    line-height: 1.7;
}
#wemd .multiquote-3 {
    margin: 16px 0;
    padding: 12px 16px;
    background: #fff5f7;
    border-left: 2px solid #ffb7cd;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #4a3a40;
    font-size: 14px;
    line-height: 1.7;
}

#wemd ul, #wemd ol {
    margin: 20px 0;
    padding-left: 24px;
}
#wemd ul { list-style-type: none; }
#wemd ul li::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #ff7096;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -24px;
    vertical-align: middle;
}
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 6px 0;
    color: #4a3a40;
    font-size: 16px;
    line-height: 1.75;
}
#wemd ol li::marker { color: #ff7096; font-weight: 600; }
#wemd ul ol { list-style-type: decimal; }
#wemd ol ul { list-style-type: none; }

#wemd a {
    color: #ff7096;
    text-decoration: none;
    border-bottom: 1px solid rgba(255,112,150,0.3);
}

#wemd strong { font-weight: 700; color: #3d1820; }
#wemd em { font-style: italic; color: #c07888; }
#wemd em strong { font-weight: 700; font-style: italic; color: #3d1820; }
#wemd mark {
    background: rgba(255,112,150,0.12);
    color: #e91e63;
    padding: 2px 8px;
    border-radius: 4px;
}
#wemd del { text-decoration: line-through; color: #c0a0a8; }

#wemd p code,
#wemd li code {
    color: #c2185b;
    background: #fff0f5;
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(255,112,150,0.15);
}

#wemd pre code.hljs {
    display: block;
    padding: 18px 22px;
    background: #fff5f7;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #ffd6e0;
}
#wemd pre code:not(.hljs) {
    color: #4a3a40;
    background: #fff5f7;
    border-radius: 8px;
    border: 1px solid #ffd6e0;
}

#wemd img {
    display: block;
    margin: 22px auto;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.06);
}
#wemd figcaption {
    margin-top: 8px;
    text-align: center;
    color: #b89bad;
    font-size: 12px;
}

#wemd hr {
    margin: 32px auto;
    border: none;
    height: 2px;
    width: 65%;
    background: repeating-linear-gradient(
        90deg,
        #ff7096 0px,
        #ff7096 5px,
        transparent 5px,
        transparent 12px
    );
    border-radius: 1px;
    opacity: 0.5;
}

#wemd table {
    width: 100%;
    border-collapse: collapse;
    margin: 22px 0;
    font-size: 14px;
    border: 1px solid #ffd6e0;
    border-radius: 8px;
    overflow: hidden;
}
#wemd table tr th {
    background: #fff5f7;
    color: #4a3a40;
    padding: 11px 14px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #ff7096;
}
#wemd table tr td {
    padding: 11px 14px;
    color: #4a3a40;
    border-bottom: 1px solid #ffd6e0;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word,
#wemd .footnote-ref { color: #ff7096; }
#wemd .footnotes-sep {
    border-top: 1px solid #ffd6e0;
    padding-top: 18px;
    margin-top: 32px;
    font-size: 12px;
    color: #b89bad;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #ff7096;
    margin-right: 4px;
    font-size: 11px;
}
#wemd .footnote-item p {
    color: #b89bad;
    font-size: 12px;
    margin: 4px 0;
}

#wemd .block-equation svg,
#wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg,
#wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout {
    margin: 22px 0;
    padding: 16px 20px;
    border-radius: 8px;
    background: #fdf9fa;
    border: 1px solid #ffd6e0;
}
#wemd .callout-title {
    font-weight: 600;
    margin-bottom: 6px;
}
#wemd .callout-note { background: #fff5f7; border-left: 4px solid #ff7096; }
#wemd .callout-tip { background: #fff9fb; border-left: 4px solid #e91e63; }
#wemd .callout-important { background: #fff8e1; border-left: 4px solid #f5a623; }
#wemd .callout-warning { background: #fff0f0; border-left: 4px solid #e57373; }
#wemd .callout-caution { background: #fff0f0; border-left: 4px solid #d32f2f; }
#wemd .callout-note .callout-title { color: #ff7096; }
#wemd .callout-tip .callout-title { color: #e91e63; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 8px; }
#wemd .imageflow-caption { text-align: center; color: #b89bad; }
`;
