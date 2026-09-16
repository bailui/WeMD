export const aiToolStyleLightTheme = `/* AI工具风·亮：清爽的产品编辑部排版 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 18px 14px;
  color: #555555;
  background-color: #ffffff;
  background-image: linear-gradient(45deg, transparent 48.5%, #eee8f7 49.5%, #eee8f7 50.5%, transparent 51.5%), linear-gradient(-45deg, transparent 48.5%, #eee8f7 49.5%, #eee8f7 50.5%, transparent 51.5%);
  background-size: 24px 24px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
  font-size: 14px;
  line-height: 1.65;
  letter-spacing: 0.5px;
  word-break: break-word;
}

#wemd p {
  margin: 12px 0;
  color: #555555;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.65;
  text-align: left;
}

#wemd h1,
#wemd h2,
#wemd h3,
#wemd h4,
#wemd h5,
#wemd h6 {
  color: #333333;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 14px 0 16px;
  padding: 0;
  border: none;
  background-color: transparent;
  text-align: center;
}

#wemd h1 .content {
  display: inline-block;
  box-sizing: border-box;
  max-width: 88%;
  padding: 6px 10px;
  border-radius: 3px 3px 0 0;
  color: #ffffff;
  background-color: #916dd5;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.55;
  letter-spacing: 0.3px;
  text-align: left;
  text-wrap: balance;
}

#wemd h2 {
  margin: 18px 8px 10px 0;
  padding: 0;
  border: none;
  background-color: transparent;
}

#wemd h2 .content {
  display: inline-block;
  padding: 2px 0 2px 8px;
  border-left: 2px solid #916dd5;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-wrap: balance;
}

#wemd h3 {
  margin: 18px 0 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  text-align: center;
}

#wemd h3 .content {
  display: inline-block;
  padding: 3px 0;
  border-bottom: 1px solid #916dd5;
  color: #333333;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 16px 0 8px;
  padding: 0;
  background-color: transparent;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #777777;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.55;
}

#wemd h4 .content::before,
#wemd h5 .content::before,
#wemd h6 .content::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 9px 2px 0;
  border-radius: 50%;
  background-color: #e2c056;
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
#wemd h6 .suffix {
  display: none;
}

#wemd strong {
  color: #916dd5;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #888888;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #bbbbbb;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #e2c056;
  color: #8a6d14;
  background-color: #f8f0d2;
}

#wemd a {
  color: #72aaa6;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #bad8d5;
  text-underline-offset: 0.22em;
}

#wemd ul,
#wemd ol {
  margin: 12px 0;
  padding-left: 20px;
  color: #916dd5;
}

#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }

#wemd li section {
  margin: 4px 0;
  color: #555555;
  font-size: 14px;
  line-height: 1.65;
  letter-spacing: 0.5px;
}

#wemd blockquote { border: none; }

#wemd .multiquote-1 {
  margin: 14px 0;
  padding: 11px 13px;
  border: 1px solid #e2e2e2;
  border-left: 3px solid #916dd5;
  color: #555555;
  background-color: #f5f5f5;
}

#wemd .multiquote-2 {
  margin: 14px 0;
  padding: 10px 13px;
  border-left: 3px solid #916dd5;
  color: #666666;
  background-color: #f4f0fb;
}

#wemd .multiquote-3 {
  margin: 12px 0;
  padding: 10px 13px;
  border: 1px solid #eadca8;
  border-left: 3px solid #e2c056;
  color: #666666;
  background-color: #fbf7e8;
}

#wemd .multiquote-1 p,
#wemd .multiquote-2 p {
  margin: 0;
  color: #666666;
  font-size: 14px;
  line-height: 1.65;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #666666;
  font-size: 14px;
  line-height: 1.65;
}

#wemd .multiquote-1 .multiquote-1,
#wemd .multiquote-1 .multiquote-2,
#wemd .multiquote-2 .multiquote-1,
#wemd .multiquote-2 .multiquote-2,
#wemd .multiquote-3 .multiquote-1,
#wemd .multiquote-3 .multiquote-2,
#wemd .multiquote-3 .multiquote-3 {
  margin: 12px 0 0;
  padding: 9px 11px;
}

#wemd hr {
  height: 0;
  margin: 24px 0;
  border: none;
  border-top: 1px solid #e4ddef;
  background-color: transparent;
}

#wemd figure {
  margin: 22px 0 26px;
  padding: 7px;
  border: 1px solid #e8e3ee;
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
  border-top: 1px solid #eeeeee;
  color: #999999;
  background-color: #ffffff;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #ddd2ef;
  color: #916dd5;
  background-color: #f4f0fb;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 22px 0;
  border: 1px solid #eeeeee;
  border-top: 5px solid #916dd5;
  color: #555555;
  background-color: #f8f8f8;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 19px;
  color: #555555;
  background-color: #f8f8f8;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #e3e3e3;
  background-color: #f8f8f8;
}

#wemd .table-container {
  margin: 22px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ded8e8;
  color: #555555;
  background-color: #ffffff;
  text-align: left;
}

#wemd table tr:nth-child(2n) { background-color: #faf8fd; }

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px 12px;
  border: 1px solid #e8e3ee;
  color: #555555;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #333333;
  background-color: #f1ecf8;
  font-weight: 700;
}

#wemd .callout {
  margin: 20px 0;
  padding: 14px 18px;
  border: 1px solid #ddd2ef;
  border-left: 4px solid #916dd5;
  border-radius: 0;
  color: #555555;
  background-color: #f4f0fb;
  break-inside: avoid;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #d5a24f;
  color: #5f4827;
  background-color: #fbf5e8;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #916dd5;
  font-size: 14px;
  font-weight: 750;
}

#wemd .callout p {
  margin: 0;
  color: #555555;
  font-size: 14px;
}

#wemd .callout-warning p,
#wemd .callout-caution p { color: #5f4827; }

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #916dd5;
  font-weight: 700;
}

#wemd .footnotes-sep {
  margin-top: 36px;
  padding-top: 15px;
  border-top: 1px solid #e4ddef;
  color: #777777;
  background-color: transparent;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
  color: #888888;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #916dd5;
  font-weight: 700;
}

#wemd .footnote-item p {
  margin: 0;
  color: #888888;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 22px 0;
  padding: 17px 10px;
  border: 1px solid #ddd2ef;
  color: #555555;
  background-color: #faf8fd;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg { max-width: 300% !important; }

#wemd .inline-equation {
  color: #916dd5;
  background-color: #f4f0fb;
}

#wemd .inline-equation > svg { vertical-align: middle; }

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px solid #ddd2ef;
  border-top: 5px solid #916dd5;
  color: #555555;
  background-color: #faf8fd;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #555555;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #916dd5;
  pointer-events: none;
}

#wemd .imageflow-layer1 {
  margin: 22px 0;
  padding: 0;
  border: 0;
  overflow: hidden;
}

#wemd .imageflow-layer2 {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}

#wemd .imageflow-layer3 {
  display: inline-block;
  width: 80%;
  margin-right: 10px;
  vertical-align: top;
  white-space: normal;
  word-wrap: break-word;
}

#wemd .imageflow-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
}

#wemd .imageflow-caption {
  color: #999999;
  text-align: center;
}
`;
