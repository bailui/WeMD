export const openSourceDiaryOrangeTheme = `/* WeMD Theme: 开源日记 · 橙 */
#wemd {
    padding: 36px 26px;
    max-width: 677px;
    margin: 0 auto;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, "PingFang SC", serif;
    color: #b0b0b8;
    background: #1b1b1f;
    word-break: break-word;
}

#wemd p {
    margin: 26px 0;
    line-height: 1.85;
    text-align: justify;
    color: #a4a4ad;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.8px;
}

#wemd h1 {
    margin: 4px 0 36px;
    text-align: left;
    border-top: 2px solid #303035;
    padding-top: 36px;
}
#wemd h1 .content {
    font-size: 24px;
    font-weight: 500;
    color: #d8d8e0;
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
    color: #c8c8d0;
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
    width: 36px;
    height: 2px;
    background: #F97316;
    border-radius: 1px;
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
    color: #b8b8c0;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    padding-left: 14px;
    border-left: 3px solid #3a3a42;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 22px 0 10px;
}
#wemd h4 .content {
    font-size: 13px;
    font-weight: 600;
    color: #787880;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
}
#wemd h4 .prefix,
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 30px 0;
    padding: 22px 24px;
    background: rgba(255,255,255,0.018);
    border: 1px solid #282830;
    border-left: 2px solid #505060;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-1 p {
    margin: 0;
    color: #9595a0;
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}
#wemd .multiquote-2 {
    margin: 24px 0;
    padding: 16px 20px;
    background: rgba(249,115,22,0.04);
    border: 1px solid rgba(249,115,22,0.1);
    border-left: 2px solid rgba(249,115,22,0.4);
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-2 p {
    margin: 0;
    color: #9595a0;
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}
#wemd .multiquote-3 {
    margin: 22px 0;
    padding: 14px 18px;
    background: rgba(255,255,255,0.01);
    border: 1px solid #222228;
    border-left: 2px solid #3a3a42;
    border-radius: 0 6px 6px 0;
}
#wemd .multiquote-3 p {
    margin: 0;
    color: #888;
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    font-style: italic;
}

#wemd ul, #wemd ol { margin: 24px 0; padding-left: 24px; }
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section {
    margin: 9px 0;
    color: #a4a4ad;
    font-size: 15px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    line-height: 1.85;
    letter-spacing: 1.8px;
}
#wemd ul li::marker,
#wemd ol li::marker { color: #555; }
#wemd ul ul { list-style-type: circle; margin-top: 6px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker,
#wemd ol ol li::marker { color: #444; }

#wemd a {
    color: #FB923C;
    text-decoration: none;
    border-bottom: 1px solid rgba(251,146,60,0.25);
}

#wemd strong { font-weight: 700; color: #d4d4dc; }
#wemd em { font-style: italic; color: #b4b4bc; }
#wemd em strong { font-weight: 700; font-style: italic; color: #d4d4dc; }
#wemd mark {
    background: rgba(249,115,22,0.12);
    color: #FB923C;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(249,115,22,0.15);
}
#wemd del { text-decoration: line-through; color: #505058; }

#wemd p code,
#wemd li code {
    color: #F97316;
    background: rgba(249,115,22,0.08);
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 13px;
    font-family: "SF Mono", "JetBrains Mono", "Cascadia Code", "Courier New", monospace;
    border: 1px solid rgba(249,115,22,0.1);
    letter-spacing: 0;
}

#wemd pre code.hljs {
    display: block;
    padding: 22px 24px;
    background: #141418;
    border-radius: 8px;
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
    background: #141418;
    border-radius: 8px;
    border: 1px solid #282830;
}

#wemd img {
    display: block;
    margin: 30px 0;
    max-width: 100%;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
#wemd figcaption {
    margin-top: 14px;
    text-align: center;
    color: #707078;
    font-size: 12px;
    letter-spacing: 1.5px;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
}

#wemd hr {
    margin: 40px auto;
    border: none;
    height: 1px;
    width: 100%;
    background: #2a2a32;
    position: relative;
}
#wemd hr::after {
    content: "\u00a7";
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    color: #3a3a42;
    font-size: 18px;
    font-family: Georgia, serif;
    background: #1b1b1f;
    padding: 0 8px;
}

#wemd table {
    width: 100%;
    border-collapse: collapse;
    margin: 26px 0;
    font-size: 14px;
    border: 1px solid #282830;
    border-radius: 6px;
    overflow: hidden;
}
#wemd table tr th {
    background: rgba(255,255,255,0.03);
    color: #c8c8d0;
    padding: 14px 18px;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px solid #303035;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
}
#wemd table tr td {
    padding: 14px 18px;
    color: #9696a0;
    border-bottom: 1px solid #222228;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word,
#wemd .footnote-ref { color: #F97316; }
#wemd .footnotes-sep {
    border-top: 1px solid #2a2a32;
    padding-top: 22px;
    margin-top: 40px;
    font-size: 12px;
    color: #555;
    letter-spacing: 1.5px;
}
#wemd .footnote-num {
    font-weight: 600;
    color: #F97316;
    margin-right: 6px;
    font-size: 11px;
    opacity: 0.7;
}
#wemd .footnote-item p {
    color: #707078;
    font-size: 12px;
    margin: 5px 0;
    letter-spacing: 1.2px;
}

#wemd .block-equation svg,
#wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg,
#wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout {
    margin: 26px 0;
    padding: 18px 22px;
    background: rgba(255,255,255,0.02);
    border-radius: 6px;
    border: 1px solid #282830;
}
#wemd .callout-title {
    font-weight: 600;
    font-family: "STSong", "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
}
#wemd .callout-note { border-left: 3px solid #555; }
#wemd .callout-tip { border-left: 3px solid #F97316; }
#wemd .callout-important { border-left: 3px solid rgba(255,255,255,0.35); }
#wemd .callout-warning { border-left: 3px solid #F97316; }
#wemd .callout-caution { border-left: 3px solid #d9534f; }
#wemd .callout-tip .callout-title { color: #F97316; }
#wemd .callout-warning .callout-title { color: #FB923C; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 0 0 6px 6px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
#wemd .imageflow-caption { text-align: center; color: #707078; font-size: 12px; }
`;
