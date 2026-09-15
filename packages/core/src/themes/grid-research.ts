export const gridResearchTheme = `/* 方格研究风：冷白研究纸、低对比网格与清晰信息层级 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 28px 22px;
  color: #34465a;
  background-color: #fbfcfe;
  background-image: linear-gradient(#e6ebf2 1px, transparent 1px), linear-gradient(90deg, #e6ebf2 1px, transparent 1px);
  background-size: 28px 28px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.84;
  letter-spacing: 0.016em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #34465a;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.84;
  text-align: left;
}

#wemd h1,
#wemd h2,
#wemd h3,
#wemd h4,
#wemd h5,
#wemd h6 {
  color: #24364b;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 22px 0 40px;
  padding: 23px 20px 21px;
  border: 1px solid #c9d6e3;
  border-left: 5px solid #4d7296;
  background-color: #eef4f8;
}

#wemd h1 .content {
  display: block;
  color: #20354c;
  font-size: 29px;
  font-weight: 800;
  line-height: 1.38;
  letter-spacing: 0.018em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 40px 0 20px;
  padding: 0 0 9px;
  border-bottom: 2px solid #6586a5;
  background-color: transparent;
}

#wemd h2 .content {
  color: #24364b;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.48;
  text-wrap: balance;
}

#wemd h3 {
  margin: 31px 0 16px;
  padding: 0;
  background-color: transparent;
}

#wemd h3 .content {
  display: inline-block;
  padding: 5px 11px;
  border: 1px solid #bdccda;
  color: #315270;
  background-color: #e9f0f6;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  text-wrap: balance;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 27px 0 13px;
  padding-left: 11px;
  border-left: 3px solid #7896b2;
  background-color: transparent;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #405a73;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.55;
}

#wemd h1 .prefix,
#wemd h1 .suffix,
#wemd h2 .prefix,
#wemd h2 .suffix,
#wemd h3 .prefix,
#wemd h3 .suffix,
#wemd h4 .prefix,
#wemd h4 .suffix,
#wemd h5 .prefix,
#wemd h5 .suffix,
#wemd h6 .prefix,
#wemd h6 .suffix { display: none; }

#wemd strong {
  color: #315f86;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #6b5a78;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #8a96a3;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #7698b8;
  color: #294964;
  background-color: #dfeaf4;
}

#wemd a {
  color: #386b98;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #94afc7;
  text-underline-offset: 0.22em;
}

#wemd ul,
#wemd ol {
  margin: 17px 0 24px;
  padding-left: 25px;
  color: #587b9c;
}

#wemd ul { list-style-type: square; }
#wemd ol { list-style-type: decimal; }

#wemd li section {
  margin: 7px 0;
  color: #34465a;
  font-size: 16px;
  line-height: 1.78;
}

#wemd ol > li > section {
  padding-bottom: 5px;
  border-bottom: 1px dotted #c0ccd8;
}

#wemd blockquote { border: none; }

#wemd .multiquote-1 {
  margin: 28px 0;
  padding: 17px 19px;
  border: 1px solid #c5d2de;
  border-left: 4px solid #587b9c;
  color: #344b61;
  background-color: #eef4f8;
}

#wemd .multiquote-2 {
  margin: 24px 0;
  padding: 16px 18px;
  border-top: 1px solid #9db2c5;
  border-bottom: 1px solid #9db2c5;
  color: #40546a;
  background-color: #f3f6f9;
}

#wemd .multiquote-3 {
  margin: 24px 0;
  padding: 17px 19px;
  border: 1px solid #304b65;
  color: #f3f7fb;
  background-color: #304b65;
}

#wemd .multiquote-1 p,
#wemd .multiquote-2 p {
  margin: 0;
  color: #40546a;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #f3f7fb;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-1 .multiquote-1,
#wemd .multiquote-1 .multiquote-2,
#wemd .multiquote-2 .multiquote-1,
#wemd .multiquote-2 .multiquote-2,
#wemd .multiquote-3 .multiquote-1,
#wemd .multiquote-3 .multiquote-2,
#wemd .multiquote-3 .multiquote-3 {
  margin: 12px 0 0;
  padding: 12px 14px;
}

#wemd hr {
  height: 0;
  margin: 42px 0;
  border: none;
  border-top: 1px solid #8da7bf;
  background-color: transparent;
}

#wemd figure {
  margin: 34px 0 38px;
  padding: 7px;
  border: 1px solid #c5d2de;
  background-color: #ffffff;
  break-inside: avoid;
}

#wemd figure a { border: none; }

#wemd img,
#wemd figure a img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

#wemd figcaption {
  margin-top: 0;
  padding: 9px 10px 4px;
  border-top: 1px dotted #c5d2de;
  color: #6c7f91;
  background-color: #ffffff;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  text-align: left;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #c0cedb;
  color: #315f86;
  background-color: #edf3f8;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 30px 0;
  border: 1px solid #263e56;
  border-top: 5px solid #6d90b0;
  color: #e8f0f7;
  background-color: #1d3043;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 20px;
  color: #e8f0f7;
  background-color: #1d3043;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #49637a;
  background-color: #1d3043;
}

#wemd .table-container {
  margin: 32px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #aebdcb;
  color: #34465a;
  background-color: #ffffff;
  text-align: left;
}

#wemd table tr:nth-child(2n) { background-color: #f2f6f9; }

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px;
  border: 1px solid #c9d4de;
  color: #34465a;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #f3f7fb;
  background-color: #3f5e7a;
  font-weight: 700;
}

#wemd .callout {
  margin: 29px 0;
  padding: 17px 19px;
  border: 1px dashed #8ea7be;
  border-radius: 0;
  color: #385169;
  background-color: #eef4f8;
  break-inside: avoid;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #b69a70;
  color: #604f38;
  background-color: #f8f3ea;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #3f6a91;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  font-weight: 750;
}

#wemd .callout p {
  margin: 0;
  color: #385169;
  font-size: 15px;
}

#wemd .callout-warning p,
#wemd .callout-caution p { color: #604f38; }

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #386b98;
  font-weight: 700;
}

#wemd .footnotes-sep {
  margin-top: 48px;
  padding-top: 15px;
  border-top: 3px double #7f99b1;
  color: #4c647a;
  background-color: transparent;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
  color: #65788a;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #466f94;
  font-weight: 700;
}

#wemd .footnote-item p {
  margin: 0;
  color: #65788a;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 30px 0;
  padding: 18px 10px;
  border: 1px solid #c0cedb;
  color: #2d475f;
  background-color: #f4f7fa;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg { max-width: 300% !important; }

#wemd .inline-equation {
  color: #2d475f;
  background-color: #edf3f8;
}

#wemd .inline-equation > svg { vertical-align: middle; }

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px solid #c0cedb;
  border-top: 5px solid #6d90b0;
  color: #2d475f;
  background-color: #f4f7fa;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #34465a;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #587b9c;
  pointer-events: none;
}
`;
