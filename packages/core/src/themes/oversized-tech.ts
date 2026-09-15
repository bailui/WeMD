export const oversizedTechTheme = `/* 大号科技风：超大标题、硬朗分区与高对比信息色 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 22px 20px;
  color: #172238;
  background-color: #f4f7fb;
  font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.78;
  letter-spacing: 0.008em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #243149;
  font-size: 16px;
  line-height: 1.78;
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
  margin: 18px 0 46px;
  padding: 30px 22px 25px;
  border: 2px solid #101b31;
  border-bottom: 9px solid #c6f135;
  color: #ffffff;
  background-color: #101b31;
}

#wemd h1 .content {
  display: block;
  color: #ffffff;
  font-size: 39px;
  font-weight: 900;
  line-height: 1.22;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 46px 0 22px;
  padding: 11px 14px 12px;
  border-left: 7px solid #1263e5;
  border-bottom: 2px solid #101b31;
  color: #101b31;
  background-color: #e7effc;
}

#wemd h2 .content {
  color: #101b31;
  font-size: 28px;
  font-weight: 850;
  line-height: 1.28;
  letter-spacing: -0.015em;
  text-wrap: balance;
}

#wemd h3 {
  margin: 34px 0 16px;
  padding: 0;
  background-color: #f4f7fb;
}

#wemd h3 .content {
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #101b31;
  color: #101b31;
  background-color: #c6f135;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.4;
  text-wrap: balance;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 28px 0 13px;
  padding: 6px 10px;
  border-left: 3px solid #1263e5;
  color: #17375f;
  background-color: #edf2f8;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #17375f;
  font-size: 16px;
  font-weight: 750;
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
  color: #0b55c3;
  font-weight: 800;
}

#wemd em,
#wemd em strong {
  color: #5b36a9;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #5c6678;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border: 1px solid #9fbd2f;
  color: #17220c;
  background-color: #dcff68;
}

#wemd a {
  color: #0b55c3;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #7ca9e7;
  text-underline-offset: 0.2em;
}

#wemd ul,
#wemd ol {
  margin: 18px 0 25px;
  padding-left: 27px;
  color: #1263e5;
}

#wemd ul {
  list-style-type: square;
}

#wemd ol {
  list-style-type: decimal;
  font-weight: 750;
}

#wemd li section {
  margin: 6px 0;
  color: #243149;
  font-weight: 400;
  line-height: 1.75;
}

#wemd ol > li > section {
  padding: 4px 0 7px;
  border-bottom: 1px solid #c7d2df;
}

#wemd blockquote {
  border: none;
}

#wemd .multiquote-1 {
  margin: 30px 0;
  padding: 19px 20px;
  border: 2px solid #1263e5;
  border-left: 8px solid #1263e5;
  color: #17375f;
  background-color: #e8f0fd;
}

#wemd .multiquote-2 {
  margin: 26px 0;
  padding: 19px 20px;
  border: 2px solid #101b31;
  color: #f5f8ff;
  background-color: #101b31;
}

#wemd .multiquote-3 {
  margin: 26px 0;
  padding: 18px 20px;
  border: 2px solid #101b31;
  border-bottom: 7px solid #1263e5;
  color: #17220c;
  background-color: #c6f135;
}

#wemd .multiquote-1 p {
  margin: 0;
  color: #17375f;
  font-size: 15px;
  line-height: 1.75;
}

#wemd .multiquote-2 p {
  margin: 0;
  color: #f5f8ff;
  font-size: 15px;
  line-height: 1.75;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #17220c;
  font-size: 15px;
  line-height: 1.75;
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
  height: 7px;
  margin: 44px 0;
  border: none;
  border-right: 72px solid #c6f135;
  background-color: #1263e5;
}

#wemd figure {
  margin: 35px 0 40px;
  padding: 7px;
  border: 2px solid #101b31;
  border-bottom: 7px solid #1263e5;
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
  padding: 8px 9px 4px;
  border-top: 1px solid #c7d2df;
  color: #53627a;
  background-color: #ffffff;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  text-align: left;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #9db9dc;
  color: #0b55c3;
  background-color: #e8f0fd;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 31px 0;
  border: 2px solid #101b31;
  border-top: 8px solid #1263e5;
  color: #e9f1ff;
  background-color: #101828;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 20px;
  color: #e9f1ff;
  background-color: #101828;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #40506d;
  background-color: #101828;
}

#wemd .table-container {
  margin: 33px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #101b31;
  color: #243149;
  background-color: #ffffff;
  text-align: left;
}

#wemd table tr {
  background-color: #ffffff;
}

#wemd table tr:nth-child(2n) {
  background-color: #eaf1fb;
}

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 11px 9px;
  border: 1px solid #aab9cd;
  color: #243149;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #ffffff;
  background-color: #1263e5;
  font-weight: 750;
}

#wemd .callout {
  margin: 31px 0;
  padding: 18px 20px;
  border: 2px solid #1263e5;
  border-left: 8px solid #1263e5;
  border-radius: 0;
  color: #17375f;
  background-color: #e8f0fd;
  break-inside: avoid;
}

#wemd .callout-important {
  border-color: #5b36a9;
  color: #422b72;
  background-color: #eee8fa;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #a07e20;
  color: #453a14;
  background-color: #f2fbcf;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #0b55c3;
  font-size: 14px;
  font-weight: 800;
}

#wemd .callout p {
  margin: 0;
  color: #243149;
  font-size: 15px;
}

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #0b55c3;
  font-weight: 750;
}

#wemd .footnotes-sep {
  margin-top: 49px;
  padding-top: 16px;
  border-top: 8px solid #101b31;
  color: #101b31;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #0b55c3;
  font-weight: 800;
}

#wemd .footnote-item p {
  margin: 0;
  color: #53627a;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 31px 0;
  padding: 19px 10px;
  border: 2px solid #101b31;
  border-bottom: 7px solid #1263e5;
  color: #101b31;
  background-color: #ffffff;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg {
  max-width: 300% !important;
}

#wemd .inline-equation {
  color: #101b31;
  background-color: #e8f0fd;
}

#wemd .inline-equation > svg {
  vertical-align: middle;
}

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 2px solid #101b31;
  border-top: 8px solid #1263e5;
  color: #101b31;
  background-color: #ffffff;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #243149;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #1263e5;
  pointer-events: none;
}
`;
