export const violetLabTheme = `/* 紫雾实验风：实验记录、紫灰标注与理性留白 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 25px 22px;
  color: #30283d;
  background-color: #f7f4fb;
  background-image: linear-gradient(180deg, #fbf9fe 0%, #f7f4fb 100%);
  font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.82;
  letter-spacing: 0.016em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #40374d;
  font-size: 16px;
  line-height: 1.82;
  text-align: left;
}

#wemd h1,
#wemd h2,
#wemd h3,
#wemd h4,
#wemd h5,
#wemd h6 {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 20px 0 44px;
  padding: 26px 22px 23px;
  border: 1px solid #6c5890;
  border-top: 6px solid #6b42c5;
  border-bottom: 6px solid #a880dc;
  color: #2d2140;
  background-color: #eee8f7;
}

#wemd h1 .content {
  display: block;
  color: #2d2140;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.34;
  letter-spacing: 0.018em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 43px 0 21px;
  padding: 9px 13px;
  border: 1px solid #806ba4;
  border-left: 5px solid #6b42c5;
  color: #382452;
  background-color: #f0ebf7;
}

#wemd h2 .content {
  color: #382452;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 20px;
  font-weight: 750;
  line-height: 1.45;
  text-wrap: balance;
}

#wemd h3 {
  margin: 32px 0 15px;
  padding: 0 0 7px;
  border-bottom: 1px dashed #9684b2;
  background-color: #f7f4fb;
}

#wemd h3 .content {
  color: #6841a8;
  font-size: 17px;
  font-weight: 750;
  line-height: 1.5;
  text-wrap: balance;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 28px 0 13px;
  padding: 5px 9px;
  border-left: 3px solid #a880dc;
  color: #544167;
  background-color: #f0ebf7;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #544167;
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
#wemd h6 .suffix {
  display: none;
}

#wemd strong {
  color: #5b32a3;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #8450a2;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #6f627b;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #8061af;
  color: #3c2852;
  background-color: #e6d9f4;
}

#wemd a {
  color: #6340a9;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #ae9acb;
  text-underline-offset: 0.22em;
}

#wemd ul,
#wemd ol {
  margin: 18px 0 25px;
  padding-left: 26px;
  color: #7a50bd;
}

#wemd ul {
  list-style-type: square;
}

#wemd ol {
  font-family: "SFMono-Regular", Consolas, monospace;
  list-style-type: decimal-leading-zero;
}

#wemd li section {
  margin: 6px 0;
  color: #40374d;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  line-height: 1.76;
}

#wemd ol > li > section {
  padding: 4px 0 7px;
  border-bottom: 1px dotted #c0b3d2;
}

#wemd blockquote {
  border: none;
}

#wemd .multiquote-1 {
  margin: 30px 0;
  padding: 18px 19px;
  border: 1px solid #a694be;
  border-left: 4px solid #6b42c5;
  color: #493b59;
  background-color: #eee8f7;
}

#wemd .multiquote-2 {
  margin: 25px 0;
  padding: 17px 19px;
  border: 1px dashed #806ba4;
  color: #3d3448;
  background-color: #f7f4fb;
}

#wemd .multiquote-3 {
  margin: 25px 0;
  padding: 18px 20px;
  border: 1px solid #49345f;
  border-bottom: 5px solid #b38ad7;
  color: #f7f1ff;
  background-color: #49345f;
}

#wemd .multiquote-1 p,
#wemd .multiquote-2 p {
  margin: 0;
  color: #493b59;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #f7f1ff;
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
  height: 1px;
  margin: 43px 0;
  border: none;
  border-top: 1px dashed #806ba4;
  border-bottom: 3px solid #d5c6e6;
  background-color: #f7f4fb;
}

#wemd figure {
  margin: 35px 0 40px;
  padding: 8px;
  border: 1px dashed #9684b2;
  background-color: #ffffff;
  break-inside: avoid;
}

#wemd figure a {
  border: none;
}

#wemd img,
#wemd figure a img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

#wemd figcaption {
  margin-top: 7px;
  padding: 8px 9px 3px;
  border-top: 1px dashed #c0b3d2;
  color: #6e607d;
  background-color: #ffffff;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 12px;
  line-height: 1.65;
  text-align: left;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #b6a4ce;
  color: #5b32a3;
  background-color: #eee8f7;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 31px 0;
  border: 1px solid #49345f;
  border-top: 6px solid #a880dc;
  color: #eee9f7;
  background-color: #21172d;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 20px;
  color: #eee9f7;
  background-color: #21172d;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #5f4a72;
  background-color: #21172d;
}

#wemd .table-container {
  margin: 33px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #806ba4;
  color: #40374d;
  background-color: #ffffff;
  text-align: left;
}

#wemd table tr {
  background-color: #ffffff;
}

#wemd table tr:nth-child(2n) {
  background-color: #f0ebf7;
}

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px;
  border: 1px solid #c0b3d2;
  color: #40374d;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #ffffff;
  background-color: #67459b;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-weight: 700;
}

#wemd .callout {
  margin: 31px 0;
  padding: 18px 20px;
  border: 1px dashed #806ba4;
  border-left: 4px solid #6b42c5;
  border-radius: 0;
  color: #493b59;
  background-color: #eee8f7;
  break-inside: avoid;
}

#wemd .callout-important {
  border-color: #694593;
  color: #3f2a54;
  background-color: #e3d5f1;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #a16b47;
  color: #5d402d;
  background-color: #f6e7dc;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #5b32a3;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  font-weight: 750;
}

#wemd .callout p {
  margin: 0;
  color: #493b59;
  font-size: 15px;
}

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #6340a9;
  font-weight: 750;
}

#wemd .footnotes-sep {
  margin-top: 49px;
  padding: 14px 11px;
  border-top: 3px double #684d8a;
  color: #49345f;
  background-color: #eee8f7;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #6b42c5;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-weight: 750;
}

#wemd .footnote-item p {
  margin: 0;
  color: #6e607d;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 31px 0;
  padding: 19px 10px;
  border: 1px dashed #9684b2;
  border-bottom: 4px solid #8061af;
  color: #382452;
  background-color: #ffffff;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg {
  max-width: 300% !important;
}

#wemd .inline-equation {
  color: #382452;
  background-color: #eee8f7;
}

#wemd .inline-equation > svg {
  vertical-align: middle;
}

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px dashed #9684b2;
  border-top: 6px solid #6b42c5;
  color: #382452;
  background-color: #ffffff;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #40374d;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #6b42c5;
  pointer-events: none;
}
`;
