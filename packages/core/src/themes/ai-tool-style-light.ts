export const aiToolStyleLightTheme = `/* AI工具风·亮：清爽的产品编辑部排版 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 28px 22px;
  color: #34443f;
  background-color: #fbfdfc;
  background-image: linear-gradient(180deg, #ffffff 0%, #f4f8f7 100%);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.82;
  letter-spacing: 0.018em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #34443f;
  background-color: transparent;
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
  color: #1f3430;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 24px 0 38px;
  padding: 22px 20px 20px;
  border-top: 5px solid #0f766e;
  border-bottom: 1px solid #c9ded8;
  background-color: #edf7f4;
}

#wemd h1 .content {
  display: block;
  color: #173f39;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.38;
  letter-spacing: 0.015em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 38px 0 20px;
  padding: 1px 0 1px 13px;
  border-left: 4px solid #168579;
  background-color: transparent;
}

#wemd h2 .content {
  color: #1f3430;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.5;
  text-wrap: balance;
}

#wemd h3 {
  margin: 30px 0 16px;
  padding: 0 0 8px;
  border-bottom: 1px solid #d5e4e0;
  background-color: transparent;
}

#wemd h3 .content {
  color: #2b4b45;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 26px 0 12px;
  padding: 0;
  background-color: transparent;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #40615a;
  font-size: 16px;
  font-weight: 700;
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
  background-color: #41a497;
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
  color: #0f6f66;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #597069;
  font-style: italic;
}

#wemd s,
#wemd del {
  color: #8b9995;
  text-decoration: line-through;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #55a99f;
  color: #264d47;
  background-color: #dff2ed;
}

#wemd a {
  color: #0d766c;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #91c8c0;
  text-underline-offset: 0.22em;
}

#wemd ul,
#wemd ol {
  margin: 17px 0 24px;
  padding-left: 25px;
  color: #178276;
}

#wemd ul { list-style-type: disc; }
#wemd ol { list-style-type: decimal; }

#wemd li section {
  margin: 7px 0;
  color: #34443f;
  font-size: 16px;
  line-height: 1.78;
  letter-spacing: 0.012em;
}

#wemd blockquote { border: none; }

#wemd .multiquote-1 {
  margin: 27px 0;
  padding: 17px 19px;
  border: 1px solid #c8ddd7;
  border-left: 4px solid #178276;
  color: #304d47;
  background-color: #edf7f4;
}

#wemd .multiquote-2 {
  margin: 24px 0;
  padding: 16px 18px;
  border-left: 4px solid #6aa49b;
  color: #40544f;
  background-color: #f1f5f4;
}

#wemd .multiquote-3 {
  margin: 24px 0;
  padding: 17px 19px;
  border: 1px solid #285b53;
  color: #f4fbf9;
  background-color: #285b53;
}

#wemd .multiquote-1 p,
#wemd .multiquote-2 p {
  margin: 0;
  color: #40544f;
  font-size: 15px;
  line-height: 1.78;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #f4fbf9;
  font-size: 15px;
  line-height: 1.78;
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
  margin: 40px 0;
  border: none;
  border-top: 1px solid #bdd5cf;
  background-color: transparent;
}

#wemd figure {
  margin: 32px 0 36px;
  padding: 7px;
  border: 1px solid #d3e1dd;
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
  border-top: 1px solid #e2ebe8;
  color: #758580;
  background-color: #ffffff;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #c6ddd7;
  color: #0f6f66;
  background-color: #edf7f4;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 29px 0;
  border: 1px solid #254941;
  border-top: 5px solid #41a497;
  color: #dff4ef;
  background-color: #18342f;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 19px;
  color: #dff4ef;
  background-color: #18342f;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #396159;
  background-color: #18342f;
}

#wemd .table-container {
  margin: 30px 0;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #bfd4ce;
  color: #34443f;
  background-color: #ffffff;
  text-align: left;
}

#wemd table tr:nth-child(2n) { background-color: #f3f8f6; }

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px 12px;
  border: 1px solid #d4e2de;
  color: #34443f;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr th {
  color: #21443d;
  background-color: #e5f2ee;
  font-weight: 700;
}

#wemd .callout {
  margin: 28px 0;
  padding: 16px 18px;
  border: 1px solid #c5dbd5;
  border-left: 4px solid #178276;
  border-radius: 0;
  color: #365049;
  background-color: #edf7f4;
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
  color: #0f6f66;
  font-size: 14px;
  font-weight: 750;
}

#wemd .callout p {
  margin: 0;
  color: #365049;
  font-size: 15px;
}

#wemd .callout-warning p,
#wemd .callout-caution p { color: #5f4827; }

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #0f766e;
  font-weight: 700;
}

#wemd .footnotes-sep {
  margin-top: 46px;
  padding-top: 15px;
  border-top: 1px solid #bfd4ce;
  color: #56716a;
  background-color: transparent;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
  color: #657771;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #0f766e;
  font-weight: 700;
}

#wemd .footnote-item p {
  margin: 0;
  color: #657771;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 29px 0;
  padding: 17px 10px;
  border: 1px solid #c5dbd5;
  color: #23433d;
  background-color: #f4f9f7;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg { max-width: 300% !important; }

#wemd .inline-equation {
  color: #23433d;
  background-color: #edf7f4;
}

#wemd .inline-equation > svg { vertical-align: middle; }

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px solid #c5dbd5;
  border-top: 5px solid #41a497;
  color: #23433d;
  background-color: #f4f9f7;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #34443f;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #178276;
  pointer-events: none;
}

#wemd .imageflow-layer1 {
  margin: 32px 0;
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
  color: #758580;
  text-align: center;
}
`;
