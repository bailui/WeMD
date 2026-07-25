export const cherryRedTheme = `/* WeMD Theme: 樱桃红 */
#wemd {
    padding: 32px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
    color: #333;
    background-color: #fdf9f9;
    background-image: url(data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxkZWZzPjxwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPgogICAgPHBhdGggZD0nTTEwIDBMMjAgMTBMMTAgMjBMMCAxMFonIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSgxNzAsMTcsNjUsMC4wNyknIHN0cm9rZS13aWR0aD0nMC41Jy8+CiAgPC9wYXR0ZXJuPjwvZGVmcz4KICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd1cmwoI2cpJy8+Cjwvc3ZnPgo=);
    background-repeat: repeat;
    word-break: break-word;
}

#wemd p {
    margin: 18px 0;
    line-height: 1.75;
    text-align: left;
    color: #5a3a3a;
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
    background: linear-gradient(90deg, #ea68b6, #aa1141);
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
    border-left: 4px solid #aa1141;
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
    background: linear-gradient(135deg, #9a0036, #ea68b6);
    border-radius: 18px;
    box-shadow: 0 2px 8px rgba(170,17,65,0.15);
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
    color: #aa1141;
    font-size: 8px;
    vertical-align: middle;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 24px 0;
    padding: 18px 22px;
    background: linear-gradient(135deg, #ffeef0, #fff5f6);
    border-left: none;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 2px 10px rgba(170,17,65,0.06);
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
    color: #5a3a3a;
    font-size: 15px;
    line-height: 1.75;
    font-weight: 500;
}
#wemd .multiquote-2 {
    margin: 20px 0;
    padding: 14px 18px;
    background: #ffeef0;
    border-left: 3px solid #aa1141;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #5a3a3a;
    font-size: 14px;
    line-height: 1.7;
}
#wemd .multiquote-3 {
    margin: 16px 0;
    padding: 12px 16px;
    background: #ffeef0;
    border-left: 2px solid #ea68b6;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #5a3a3a;
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
    background: #aa1141;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -24px;
    vertical-align: middle;
}
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 6px 0;
    color: #5a3a3a;
    font-size: 16px;
    line-height: 1.75;
}
#wemd ol li::marker { color: #aa1141; font-weight: 600; }
#wemd ul ol { list-style-type: decimal; }
#wemd ol ul { list-style-type: none; }

#wemd a {
    color: #aa1141;
    text-decoration: none;
    border-bottom: 1px solid rgba(170,17,65,0.3);
}

#wemd strong { font-weight: 700; color: #3d1010; }
#wemd em { font-style: italic; color: #b87080; }
#wemd em strong { font-weight: 700; font-style: italic; color: #3d1010; }
#wemd mark {
    background: rgba(170,17,65,0.12);
    color: #aa1141;
    padding: 2px 8px;
    border-radius: 4px;
}
#wemd del { text-decoration: line-through; color: #c09098; }

#wemd p code,
#wemd li code {
    color: #9a0000;
    background: #ffeef0;
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid rgba(170,17,65,0.12);
}

#wemd pre code.hljs {
    display: block;
    padding: 18px 22px;
    background: #ffeef0;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid #ffc0d0;
}
#wemd pre code:not(.hljs) {
    color: #5a3a3a;
    background: #ffeef0;
    border-radius: 8px;
    border: 1px solid #ffc0d0;
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
    color: #c09098;
    font-size: 12px;
}

#wemd hr {
    margin: 32px auto;
    border: none;
    height: 2px;
    width: 65%;
    background: repeating-linear-gradient(
        90deg,
        #aa1141 0px,
        #aa1141 5px,
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
    border: 1px solid #ffc0d0;
    border-radius: 8px;
    overflow: hidden;
}
#wemd table tr th {
    background: #ffeef0;
    color: #5a3a3a;
    padding: 11px 14px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #aa1141;
}
#wemd table tr td {
    padding: 11px 14px;
    color: #5a3a3a;
    border-bottom: 1px solid #ffc0d0;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word,
#wemd .footnote-ref { color: #aa1141; }
#wemd .footnotes-sep {
    border-top: 1px solid #ffc0d0;
    padding-top: 18px;
    margin-top: 32px;
    font-size: 12px;
    color: #c09098;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #aa1141;
    margin-right: 4px;
    font-size: 11px;
}
#wemd .footnote-item p {
    color: #c09098;
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
    background: #fdf9f9;
    border: 1px solid #ffc0d0;
}
#wemd .callout-title {
    font-weight: 600;
    margin-bottom: 6px;
}
#wemd .callout-note { background: #ffeef0; border-left: 4px solid #aa1141; }
#wemd .callout-tip { background: #fff5f6; border-left: 4px solid #9a0036; }
#wemd .callout-important { background: #fff8e1; border-left: 4px solid #f5a623; }
#wemd .callout-warning { background: #fff0f0; border-left: 4px solid #e57373; }
#wemd .callout-caution { background: #fff0f0; border-left: 4px solid #d32f2f; }
#wemd .callout-note .callout-title { color: #aa1141; }
#wemd .callout-tip .callout-title { color: #9a0036; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 8px; }
#wemd .imageflow-caption { text-align: center; color: #c09098; }
`;
