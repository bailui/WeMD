export const sakuraPinkTheme = `/* WeMD Theme: 樱花粉 */
#wemd {
    padding: 36px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #5a3a44;
    background: linear-gradient(180deg, #fff5f7 0%, #ffffff 40%);
    border-radius: 20px;
    word-break: break-word;
}

#wemd p {
    margin: 22px 0; line-height: 1.85; text-align: justify;
    color: #5a3a44; font-size: 16px; letter-spacing: 0.3px;
}

#wemd h1 { margin: 50px 0 36px; text-align: center; }
#wemd h1 .content {
    display: inline-block; font-size: 26px; font-weight: 700;
    color: #3d1820; padding-bottom: 16px; position: relative;
}
#wemd h1 .content::after {
    content: ""; position: absolute; bottom: 0; left: 50%;
    transform: translateX(-50%); width: 60px; height: 3px;
    background: linear-gradient(90deg, #ffb7cd, #ff7096, #ffb7cd);
    border-radius: 2px;
}
#wemd h1 .prefix, #wemd h1 .suffix { display: none; }

#wemd h2 { margin: 40px 0 24px; }
#wemd h2 .content {
    display: inline-block; font-size: 20px; font-weight: 700;
    color: #fff; background: linear-gradient(135deg, #ff7096, #ffb7cd);
    padding: 8px 22px; border-radius: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
#wemd h2 .prefix, #wemd h2 .suffix { display: none; }

#wemd h3 { margin: 32px 0 18px; }
#wemd h3 .content {
    display: inline-block; font-size: 17px; font-weight: 600;
    color: #e91e63; padding: 4px 0 4px 14px;
    border-left: 4px solid #ff7096; border-radius: 0 4px 4px 0;
}
#wemd h3 .prefix, #wemd h3 .suffix { display: none; }

#wemd h4 { margin: 24px 0 12px; }
#wemd h4 .content { font-size: 16px; font-weight: 600; color: #8a5a6a; }
#wemd h4 .content::before { content: "✦ "; color: #ffb7cd; font-size: 12px; vertical-align: middle; }
#wemd h4 .prefix, #wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 28px 0; padding: 20px 24px;
    background: #fff5f7; border-left: 4px solid #ffb7cd;
    border-radius: 0 16px 16px 0;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}
#wemd .multiquote-1 p { color: #5a3a44; font-size: 15px; }
#wemd .multiquote-2 {
    margin: 24px 0; padding: 16px 20px;
    background: #fff5f7; border-left: 3px solid #ffb7cd;
    border-radius: 0 12px 12px 0;
}
#wemd .multiquote-2 p { color: #5a3a44; font-size: 14px; }
#wemd .multiquote-3 {
    margin: 22px 0; padding: 14px 18px;
    background: #fff0f5; border-left: 2px solid #ffe3ec;
    border-radius: 0 10px 10px 0;
}
#wemd .multiquote-3 p { color: #5a3a44; font-size: 14px; }

#wemd ul, #wemd ol { margin: 22px 0; padding-left: 24px; }
#wemd ul { list-style-type: disc; } #wemd ol { list-style-type: decimal; }
#wemd li section { margin: 8px 0; color: #5a3a44; line-height: 1.8; }
#wemd ul li::marker, #wemd ol li::marker { color: #ff7096; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #ffb7cd; }

#wemd a { color: #ff7096; text-decoration: none; border-bottom: 1.5px solid #ffe3ec; }

#wemd strong { font-weight: 700; color: #3d1820; }
#wemd em { font-style: italic; color: #c07888; }
#wemd em strong { font-weight: 700; font-style: italic; color: #3d1820; }
#wemd mark { background: #ffe3ec; color: #e91e63; padding: 2px 6px; border-radius: 3px; }
#wemd del { text-decoration: line-through; color: #c0a0a8; }

#wemd p code, #wemd li code {
    color: #c2185b; background: #fff0f5;
    padding: 2px 8px; margin: 0 3px; border-radius: 6px;
    font-size: 14px; font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid #ffe3ec;
}

#wemd pre code.hljs {
    display: block; padding: 20px; background: #2d1820;
    border-radius: 16px; font-size: 13px; line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto; white-space: pre; min-width: max-content;
    border: 1px solid rgba(255,112,150,0.2);
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
#wemd pre code:not(.hljs) {
    color: #e0b8c0; background: #2d1820;
    border-radius: 16px; border: 1px solid rgba(255,112,150,0.2);
}

#wemd img { display: block; margin: 24px auto; max-width: 100%; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
#wemd figcaption { margin-top: 10px; text-align: center; color: #c0a0a8; font-size: 13px; }

#wemd hr {
    margin: 40px auto; border: none; height: 2px; width: 50%;
    background: linear-gradient(90deg, transparent, #ffe3ec, transparent);
    border-radius: 1px;
}

#wemd table {
    width: 100%; border-collapse: separate; border-spacing: 0;
    margin: 28px 0; font-size: 14px; border-radius: 12px; overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}
#wemd table tr th {
    background: #fff0f5; color: #5a3a44;
    padding: 14px 16px; font-weight: 600; text-align: left;
    border-bottom: 2px solid #ffe3ec;
}
#wemd table tr td {
    padding: 14px 16px; color: #5a3a44;
    border-bottom: 1px solid #ffe3ec; background: #fff;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word, #wemd .footnote-ref { color: #ff7096; }
#wemd .footnotes-sep { border-top: 1px solid #ffe3ec; padding-top: 20px; margin-top: 40px; font-size: 12px; color: #c0a0a8; }
#wemd .footnote-num { font-weight: 600; color: #ff7096; margin-right: 4px; font-size: 11px; }
#wemd .footnote-item p { color: #c0a0a8; font-size: 12px; margin: 4px 0; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 28px 0; padding: 20px 24px; background: #fff5f7; border-radius: 16px; border: 1px solid #ffe3ec; }
#wemd .callout-title { font-weight: 600; color: #ff7096; margin-bottom: 8px; }
#wemd .callout-note { border-left: 4px solid #ff7096; }
#wemd .callout-tip { border-left: 4px solid #ffb7cd; }
#wemd .callout-important { border-left: 4px solid #ff7096; }
#wemd .callout-warning { border-left: 4px solid #f5a623; }
#wemd .callout-caution { border-left: 4px solid #d9534f; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 12px; }
#wemd .imageflow-caption { text-align: center; color: #c0a0a8; }
`;
