export const mauvePurpleTheme = `/* WeMD Theme: 锦葵紫 */
#wemd {
    padding: 36px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #4a3d5a;
    background: linear-gradient(180deg, #faf8fc 0%, #ffffff 40%);
    border-radius: 20px;
    word-break: break-word;
}

#wemd p {
    margin: 22px 0; line-height: 1.85; text-align: justify;
    color: #4a3d5a; font-size: 16px; letter-spacing: 0.3px;
}

#wemd h1 { margin: 50px 0 36px; text-align: center; }
#wemd h1 .content {
    display: inline-block; font-size: 26px; font-weight: 700;
    color: #2a1840; padding-bottom: 16px; position: relative;
}
#wemd h1 .content::after {
    content: ""; position: absolute; bottom: 0; left: 50%;
    transform: translateX(-50%); width: 60px; height: 3px;
    background: linear-gradient(90deg, #D8B4E2, #A06EB4, #D8B4E2);
    border-radius: 2px;
}
#wemd h1 .prefix, #wemd h1 .suffix { display: none; }

#wemd h2 { margin: 40px 0 24px; }
#wemd h2 .content {
    display: inline-block; font-size: 20px; font-weight: 700;
    color: #fff; background: linear-gradient(135deg, #A06EB4, #D8B4E2);
    padding: 8px 22px; border-radius: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
#wemd h2 .prefix, #wemd h2 .suffix { display: none; }

#wemd h3 { margin: 32px 0 18px; }
#wemd h3 .content {
    display: inline-block; font-size: 17px; font-weight: 600;
    color: #6A3F7A; padding: 4px 0 4px 14px;
    border-left: 4px solid #A06EB4; border-radius: 0 4px 4px 0;
}
#wemd h3 .prefix, #wemd h3 .suffix { display: none; }

#wemd h4 { margin: 24px 0 12px; }
#wemd h4 .content { font-size: 16px; font-weight: 600; color: #7a5a8a; }
#wemd h4 .content::before { content: "✦ "; color: #D8B4E2; font-size: 12px; vertical-align: middle; }
#wemd h4 .prefix, #wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 28px 0; padding: 20px 24px;
    background: #faf8fc; border-left: 4px solid #D8B4E2;
    border-radius: 0 16px 16px 0;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}
#wemd .multiquote-1 p { color: #4a3d5a; font-size: 15px; }
#wemd .multiquote-2 {
    margin: 24px 0; padding: 16px 20px;
    background: #faf8fc; border-left: 3px solid #D8B4E2;
    border-radius: 0 12px 12px 0;
}
#wemd .multiquote-2 p { color: #4a3d5a; font-size: 14px; }
#wemd .multiquote-3 {
    margin: 22px 0; padding: 14px 18px;
    background: #faf6fc; border-left: 2px solid #F3E5F5;
    border-radius: 0 10px 10px 0;
}
#wemd .multiquote-3 p { color: #4a3d5a; font-size: 14px; }

#wemd ul, #wemd ol { margin: 22px 0; padding-left: 24px; }
#wemd ul { list-style-type: disc; } #wemd ol { list-style-type: decimal; }
#wemd li section { margin: 8px 0; color: #4a3d5a; line-height: 1.8; }
#wemd ul li::marker, #wemd ol li::marker { color: #A06EB4; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #D8B4E2; }

#wemd a { color: #A06EB4; text-decoration: none; border-bottom: 1.5px solid #F3E5F5; }

#wemd strong { font-weight: 700; color: #2a1840; }
#wemd em { font-style: italic; color: #9078b0; }
#wemd em strong { font-weight: 700; font-style: italic; color: #2a1840; }
#wemd mark { background: #F3E5F5; color: #6A3F7A; padding: 2px 6px; border-radius: 3px; }
#wemd del { text-decoration: line-through; color: #b0a0c0; }

#wemd p code, #wemd li code {
    color: #5E35B1; background: #F2EFF9;
    padding: 2px 8px; margin: 0 3px; border-radius: 6px;
    font-size: 14px; font-family: "SF Mono", "Courier New", monospace;
    border: 1px solid #F3E5F5;
}

#wemd pre code.hljs {
    display: block; padding: 20px; background: #2a1e33;
    border-radius: 16px; font-size: 13px; line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto; white-space: pre; min-width: max-content;
    border: 1px solid rgba(160,110,180,0.2);
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
#wemd pre code:not(.hljs) {
    color: #d0c0e0; background: #2a1e33;
    border-radius: 16px; border: 1px solid rgba(160,110,180,0.2);
}

#wemd img { display: block; margin: 24px auto; max-width: 100%; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
#wemd figcaption { margin-top: 10px; text-align: center; color: #b0a0c0; font-size: 13px; }

#wemd hr {
    margin: 40px auto; border: none; height: 2px; width: 50%;
    background: linear-gradient(90deg, transparent, #F3E5F5, transparent);
    border-radius: 1px;
}

#wemd table {
    width: 100%; border-collapse: separate; border-spacing: 0;
    margin: 28px 0; font-size: 14px; border-radius: 12px; overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}
#wemd table tr th {
    background: #faf6fc; color: #4a3d5a;
    padding: 14px 16px; font-weight: 600; text-align: left;
    border-bottom: 2px solid #F3E5F5;
}
#wemd table tr td {
    padding: 14px 16px; color: #4a3d5a;
    border-bottom: 1px solid #F3E5F5; background: #fff;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word, #wemd .footnote-ref { color: #A06EB4; }
#wemd .footnotes-sep { border-top: 1px solid #F3E5F5; padding-top: 20px; margin-top: 40px; font-size: 12px; color: #b0a0c0; }
#wemd .footnote-num { font-weight: 600; color: #A06EB4; margin-right: 4px; font-size: 11px; }
#wemd .footnote-item p { color: #b0a0c0; font-size: 12px; margin: 4px 0; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 28px 0; padding: 20px 24px; background: #faf8fc; border-radius: 16px; border: 1px solid #F3E5F5; }
#wemd .callout-title { font-weight: 600; color: #A06EB4; margin-bottom: 8px; }
#wemd .callout-note { border-left: 4px solid #A06EB4; }
#wemd .callout-tip { border-left: 4px solid #D8B4E2; }
#wemd .callout-important { border-left: 4px solid #A06EB4; }
#wemd .callout-warning { border-left: 4px solid #f5a623; }
#wemd .callout-caution { border-left: 4px solid #d9534f; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 12px; }
#wemd .imageflow-caption { text-align: center; color: #b0a0c0; }
`;
