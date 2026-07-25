export const skyBlueTheme = `/* WeMD Theme: 天空蓝 */
#wemd {
    padding: 32px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
    color: #333;
    background-color: #f7fafd;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxkZWZzPjxwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPgogICAgPHBhdGggZD0nTTEwIDBMMjAgMTBMMTAgMjBMMCAxMFonIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSg1MiwxNTIsMjE5LDAuMDgpJyBzdHJva2Utd2lkdGg9JzAuNScvPgogIDwvcGF0dGVybj48L2RlZnM+CiAgPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNnKScvPgo8L3N2Zz4K);
    background-repeat: repeat;
    word-break: break-word;
}

#wemd p {
    margin: 18px 0;
    line-height: 1.75;
    text-align: left;
    color: #3a4858;
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
    background: linear-gradient(90deg, #85c1e9, #3498db);
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
    border-left: 4px solid #3498db;
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
    background: linear-gradient(135deg, #2980b9, #85c1e9);
    border-radius: 18px;
    box-shadow: 0 2px 8px rgba(52,152,219,0.15);
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
    color: #3498db;
    font-size: 8px;
    vertical-align: middle;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 24px 0;
    padding: 18px 22px;
    background: linear-gradient(135deg, #eaf5fc, #f0f8ff);
    border-left: none;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 2px 10px rgba(52,152,219,0.06);
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
    color: #3a4a58;
    font-size: 15px;
    line-height: 1.75;
    font-weight: 500;
}
#wemd .multiquote-2 {
    margin: 20px 0;
    padding: 14px 18px;
    background: #eaf5fc;
    border-left: 3px solid #3498db;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #3a4858;
    font-size: 14px;
    line-height: 1.7;
}
#wemd .multiquote-3 {
    margin: 16px 0;
    padding: 12px 16px;
    background: #eaf5fc;
    border-left: 2px solid #85c1e9;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #3a4858;
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
    background: #3498db;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -24px;
    vertical-align: middle;
}
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 6px 0;
    color: #3a4858;
    font-size: 16px;
    line-height: 1.75;
}
#wemd ol li::marker { color: #3498db; font-weight: 600; }
#wemd ul ol { list-style-type: decimal; }
#wemd ol ul { list-style-type: none; }

#wemd a {
    color: #3498db;
    text-decoration: none;
    border-bottom: 1px solid rgba(52,152,219,0.3);
}

#wemd strong { font-weight: 700; color: #182a3d; }
#wemd em { font-style: italic; color: #6088b0; }
#wemd em strong { font-weight: 700; font-style: italic; color: #182a3d; }
#wemd mark {
    background: rgba(52,152,219,0.12);
    color: #2980b9;
    padding: 2px 8px;
    border-radius: 4px;
}
#wemd del { text-decoration: line-through; color: #a0b8d0; }

#wemd p code,
#wemd li code {
    color: #1a5276;
    background: #eaf5fc;
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(52,152,219,0.12);
}

#wemd pre code.hljs {
    display: block;
    padding: 18px 22px;
    background: #eaf5fc;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #d4e8f8;
}
#wemd pre code:not(.hljs) {
    color: #3a4858;
    background: #eaf5fc;
    border-radius: 8px;
    border: 1px solid #d4e8f8;
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
    color: #a0b8d0;
    font-size: 12px;
}

#wemd hr {
    margin: 32px auto;
    border: none;
    height: 2px;
    width: 65%;
    background: repeating-linear-gradient(
        90deg,
        #3498db 0px,
        #3498db 5px,
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
    border: 1px solid #d4e8f8;
    border-radius: 8px;
    overflow: hidden;
}
#wemd table tr th {
    background: #eaf5fc;
    color: #3a4858;
    padding: 11px 14px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #3498db;
}
#wemd table tr td {
    padding: 11px 14px;
    color: #3a4858;
    border-bottom: 1px solid #d4e8f8;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word,
#wemd .footnote-ref { color: #3498db; }
#wemd .footnotes-sep {
    border-top: 1px solid #d4e8f8;
    padding-top: 18px;
    margin-top: 32px;
    font-size: 12px;
    color: #a0b8d0;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #3498db;
    margin-right: 4px;
    font-size: 11px;
}
#wemd .footnote-item p {
    color: #a0b8d0;
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
    background: #f7fafd;
    border: 1px solid #d4e8f8;
}
#wemd .callout-title {
    font-weight: 600;
    margin-bottom: 6px;
}
#wemd .callout-note { background: #eaf5fc; border-left: 4px solid #3498db; }
#wemd .callout-tip { background: #f0f8ff; border-left: 4px solid #2980b9; }
#wemd .callout-important { background: #fff8e1; border-left: 4px solid #f5a623; }
#wemd .callout-warning { background: #fff0f0; border-left: 4px solid #e57373; }
#wemd .callout-caution { background: #fff0f0; border-left: 4px solid #d32f2f; }
#wemd .callout-note .callout-title { color: #3498db; }
#wemd .callout-tip .callout-title { color: #2980b9; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 8px; }
#wemd .imageflow-caption { text-align: center; color: #a0b8d0; }
`;
