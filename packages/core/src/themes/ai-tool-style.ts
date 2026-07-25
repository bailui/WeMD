export const aiToolStyleTheme = `/* WeMD Theme: AI工具派 · AI Tool Style */
#wemd {
    padding: 32px 22px;
    max-width: 677px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    color: rgba(0,0,0,0.9);
    background: transparent;
    word-break: break-word;
}

#wemd p {
    margin: 20px 0;
    line-height: 1.75;
    text-align: justify;
    color: rgba(0,0,0,0.9);
    font-size: 17px;
    letter-spacing: 0.5px;
}

#wemd h1 {
    margin: 40px 0 30px;
    text-align: left;
}
#wemd h1 .content {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    background: #916DD5;
    padding: 12px 20px;
    border-radius: 8px 8px 0 0;
}
#wemd h1 .prefix,
#wemd h1 .suffix { display: none; }

#wemd h2 {
    margin: 36px 0 20px;
    text-align: left;
}
#wemd h2 .content {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    color: #333;
    padding: 4px 0 4px 14px;
    border-left: 4px solid #916DD5;
}
#wemd h2 .prefix,
#wemd h2 .suffix { display: none; }

#wemd h3 {
    margin: 30px 0 15px;
    text-align: center;
}
#wemd h3 .content {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
#wemd h3 .prefix,
#wemd h3 .suffix { display: none; }

#wemd h4 {
    margin: 20px 0 10px;
    text-align: left;
}
#wemd h4 .content {
    font-size: 16px;
    font-weight: 600;
    color: #666;
}
#wemd h4 .prefix::before { content: "✦ "; color: #FFD861; font-size: 12px; }
#wemd h4 .suffix { display: none; }

#wemd .multiquote-1 {
    margin: 24px 0;
    padding: 16px 20px;
    background: #F1F9FF;
    border-left: none;
    border-radius: 8px;
}
#wemd .multiquote-1 p { color: rgba(0,0,0,0.9); font-size: 15px; }
#wemd .multiquote-2 {
    margin: 20px 0;
    padding: 14px 18px;
    background: #F8F4FF;
    border-left: 3px solid #916DD5;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-2 p { color: rgba(0,0,0,0.9); font-size: 14px; }
#wemd .multiquote-3 {
    margin: 18px 0;
    padding: 12px 16px;
    background: #FFFDF5;
    border-left: 3px solid #FFD861;
    border-radius: 0 8px 8px 0;
}
#wemd .multiquote-3 p { color: rgba(0,0,0,0.8); font-size: 14px; }

#wemd ul, #wemd ol { margin: 20px 0; padding-left: 24px; }
#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }
#wemd li section { margin: 6px 0; color: rgba(0,0,0,0.9); line-height: 1.75; }
#wemd ul li::marker, #wemd ol li::marker { color: #916DD5; }
#wemd ul ul { list-style-type: circle; margin-top: 6px; }
#wemd ol ol { list-style-type: lower-alpha; }
#wemd ul ul li::marker, #wemd ol ol li::marker { color: #FFD861; }

#wemd a {
    color: #576B95;
    text-decoration: none;
    border-bottom: 1px solid rgba(87,107,149,0.3);
}

#wemd strong { font-weight: 700; color: #000; }
#wemd em { font-style: italic; color: #666; }
#wemd em strong { font-weight: 700; font-style: italic; color: #000; }
#wemd mark { background: rgba(255,216,97,0.3); color: #333; padding: 2px 6px; border-radius: 3px; }
#wemd del { text-decoration: line-through; color: #999; }

#wemd p code, #wemd li code {
    color: #916DD5;
    background: #F8F4FF;
    padding: 2px 8px;
    margin: 0 3px;
    border-radius: 4px;
    font-size: 14px;
    font-family: "SF Mono", "Courier New", monospace;
}

#wemd pre code.hljs {
    display: block;
    padding: 16px 20px;
    background: #2D2A3A;
    border-radius: 8px;
    font-size: 13px;
    line-height: 1.6;
    font-family: "SF Mono", "Consolas", "Monaco", monospace;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
    border: 1px solid rgba(145,109,213,0.2);
}
#wemd pre code:not(.hljs) {
    color: #d0c8e0;
    background: #2D2A3A;
    border-radius: 8px;
    border: 1px solid rgba(145,109,213,0.2);
}

#wemd img { display: block; margin: 20px auto; max-width: 100%; border-radius: 4px; }
#wemd figcaption { margin-top: 8px; text-align: center; color: #999; font-size: 13px; }

#wemd hr { margin: 40px auto; border: none; height: 1px; background: #e0e0e0; }

#wemd table {
    width: 100%; border-collapse: collapse;
    margin: 24px 0; font-size: 14px; border: 1px solid #e0e0e0;
}
#wemd table tr th {
    background: #F8F4FF; color: #333;
    padding: 12px 16px; font-weight: 600;
    text-align: left; border-bottom: 2px solid #916DD5;
}
#wemd table tr td {
    padding: 12px 16px; color: rgba(0,0,0,0.9);
    border-bottom: 1px solid #e0e0e0; background: #fff;
}
#wemd table tr:last-child td { border-bottom: none; }

#wemd .footnote-word, #wemd .footnote-ref { color: #916DD5; }
#wemd .footnotes-sep {
    border-top: 1px solid #e0e0e0; padding-top: 20px;
    margin-top: 40px; font-size: 12px; color: #999;
}
#wemd .footnote-num { font-weight: 600; color: #916DD5; margin-right: 4px; font-size: 11px; }
#wemd .footnote-item p { color: #999; font-size: 12px; margin: 4px 0; }

#wemd .block-equation svg, #wemd .katex-block svg { max-width: 100% !important; }
#wemd .inline-equation svg, #wemd .katex-inline svg { max-width: 100%; vertical-align: middle; }

#wemd .callout { margin: 24px 0; padding: 16px 20px; border-radius: 8px; }
#wemd .callout-title { font-weight: 600; }
#wemd .callout-note { background: #F1F9FF; border-left: 4px solid #79B4B0; }
#wemd .callout-tip { background: #FFFDF5; border-left: 4px solid #FFD861; }
#wemd .callout-important { background: #F8F4FF; border-left: 4px solid #916DD5; }
#wemd .callout-warning { background: #FFF5F0; border-left: 4px solid #f5a623; }
#wemd .callout-caution { background: #FFF0F0; border-left: 4px solid #e74c3c; }
#wemd .callout-note .callout-title { color: #79B4B0; }
#wemd .callout-tip .callout-title { color: #d4a017; }
#wemd .callout-important .callout-title { color: #916DD5; }

#wemd .imageflow-layer1 { margin-top: 1em; margin-bottom: 0.5em; border: 0; padding: 0; overflow: hidden; }
#wemd .imageflow-layer2 { white-space: nowrap; width: 100%; overflow-x: scroll; }
#wemd .imageflow-layer3 { display: inline-block; word-wrap: break-word; white-space: normal; vertical-align: top; width: 80%; margin-right: 10px; flex-shrink: 0; }
#wemd .imageflow-img { display: block; width: 100%; height: auto; max-height: 300px; object-fit: contain; border-radius: 4px; }
#wemd .imageflow-caption { text-align: center; color: #999; }
`;
