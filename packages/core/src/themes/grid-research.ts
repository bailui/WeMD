export const gridResearchTheme = `/* 方格研究风：纸面网格、研究批注与清晰数据层级 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 28px 22px;
  color: #223237;
  background-color: #f7f3e8;
  background-image: linear-gradient(#dfe5dc 1px, transparent 1px), linear-gradient(90deg, #dfe5dc 1px, transparent 1px);
  background-size: 24px 24px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.84;
  letter-spacing: 0.016em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #223237;
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
  color: #173c3d;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 22px 0 40px;
  padding: 23px 20px 21px;
  border: 1px solid #789293;
  border-left: 5px solid #cc5c35;
  background-color: #eef2e8;
}

#wemd h1 .content {
  display: block;
  color: #173c3d;
  font-size: 29px;
  font-weight: 800;
  line-height: 1.38;
  letter-spacing: 0.018em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 40px 0 20px;
  padding: 0 0 9px;
  border-bottom: 2px solid #1b6e70;
  background-color: transparent;
}

#wemd h2 .content {
  color: #173c3d;
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
  border: 1px solid #789293;
  color: #f7f3e8;
  background-color: #1b6e70;
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
  border-left: 3px solid #cc5c35;
  background-color: transparent;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #36595a;
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
  color: #124f51;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #9b452b;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #6a5550;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #cc5c35;
  color: #593426;
  background-color: #f5d9b9;
}

#wemd a {
  color: #11666a;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #7ea6a5;
  text-underline-offset: 0.22em;
}

#wemd ul,
#wemd ol {
  margin: 17px 0 24px;
  padding-left: 25px;
  color: #cc5c35;
}

#wemd ul { list-style-type: square; }
#wemd ol { list-style-type: decimal; }

#wemd li section {
  margin: 7px 0;
  color: #223237;
  font-size: 16px;
  line-height: 1.78;
}

#wemd ol > li > section {
  padding-bottom: 5px;
  border-bottom: 1px dotted #aab8ae;
}

#wemd blockquote { border: none; }

#wemd .multiquote-1 {
  margin: 28px 0;
  padding: 17px 19px;
  border: 1px solid #9eb0a8;
  border-left: 4px solid #1b6e70;
  color: #294647;
  background-color: #edf1e8;
}

#wemd .multiquote-2 {
  margin: 24px 0;
  padding: 16px 18px;
  border-top: 2px solid #cc5c35;
  border-bottom: 2px solid #cc5c35;
  color: #433d35;
  background-color: #f6e7d4;
}

#wemd .multiquote-3 {
  margin: 24px 0;
  padding: 17px 19px;
  border: 1px solid #173c3d;
  color: #f7f3e8;
  background-color: #173c3d;
}

#wemd .multiquote-1 p,
#wemd .multiquote-2 p {
  margin: 0;
  color: #294647;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #f7f3e8;
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
  border-top: 2px solid #1b6e70;
  border-bottom: 1px solid #cc5c35;
  background-color: transparent;
}

#wemd figure {
  margin: 34px 0 38px;
  padding: 7px;
  border: 1px solid #9eb0a8;
  background-color: #fffdf5;
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
  border-top: 1px dotted #9eb0a8;
  color: #5d706d;
  background-color: #fffdf5;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  text-align: left;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #a7b8af;
  color: #125d60;
  background-color: #edf1e8;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 30px 0;
  border: 1px solid #173c3d;
  border-top: 5px solid #cc5c35;
  color: #eaf3ef;
  background-color: #142b30;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 20px;
  color: #eaf3ef;
  background-color: #142b30;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #456167;
  background-color: #142b30;
}

#wemd .table-container {
  margin: 32px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #173c3d;
  color: #223237;
  background-color: #fffdf5;
  text-align: left;
}

#wemd table tr:nth-child(2n) { background-color: #edf1e8; }

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px;
  border: 1px solid #9eb0a8;
  color: #223237;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #f7f3e8;
  background-color: #173c3d;
  font-weight: 700;
}

#wemd .callout {
  margin: 29px 0;
  padding: 17px 19px;
  border: 1px dashed #789293;
  border-radius: 0;
  color: #294647;
  background-color: #edf1e8;
  break-inside: avoid;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #cc5c35;
  color: #5a362a;
  background-color: #f8e3ce;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #175b5d;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  font-weight: 750;
}

#wemd .callout p {
  margin: 0;
  color: #294647;
  font-size: 15px;
}

#wemd .callout-warning p,
#wemd .callout-caution p { color: #5a362a; }

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #11666a;
  font-weight: 700;
}

#wemd .footnotes-sep {
  margin-top: 48px;
  padding-top: 15px;
  border-top: 3px double #173c3d;
  color: #173c3d;
  background-color: transparent;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
  color: #536562;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #9b452b;
  font-weight: 700;
}

#wemd .footnote-item p {
  margin: 0;
  color: #536562;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 30px 0;
  padding: 18px 10px;
  border: 1px solid #9eb0a8;
  color: #173c3d;
  background-color: #fffdf5;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg { max-width: 300% !important; }

#wemd .inline-equation {
  color: #173c3d;
  background-color: #f7f3e8;
}

#wemd .inline-equation > svg { vertical-align: middle; }

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px solid #9eb0a8;
  border-top: 5px solid #1b6e70;
  color: #223237;
  background-color: #fffdf5;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #223237;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #1b6e70;
  pointer-events: none;
}
`;
