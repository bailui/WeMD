export const auroraDarkTheme = `/* 极光暗色风：深海夜幕与高可读极光色标 */
#wemd {
  max-width: 677px;
  margin: 0 auto;
  padding: 25px 22px;
  color: #d9f2ef;
  background-color: #07151f;
  background-image: radial-gradient(circle at 12% 4%, #15374a 0, transparent 32%), radial-gradient(circle at 88% 18%, #2d2550 0, transparent 29%);
  font-family: "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.82;
  letter-spacing: 0.018em;
  word-break: break-word;
}

#wemd p {
  margin: 0 0 22px;
  color: #d9f2ef;
  background-color: #07151f;
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
  color: #f4fffd;
  background-color: #0b2230;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  text-align: left;
}

#wemd h1 {
  margin: 20px 0 43px;
  padding: 27px 22px 24px;
  border: 1px solid #356074;
  border-top: 6px solid #4ee1c1;
  border-bottom: 6px solid #a68cff;
  color: #f4fffd;
  background-color: #0b2230;
}

#wemd h1 .content {
  display: block;
  color: #f4fffd;
  background-color: #0b2230;
  font-size: 31px;
  font-weight: 800;
  line-height: 1.36;
  letter-spacing: 0.025em;
  text-wrap: balance;
}

#wemd h2 {
  margin: 42px 0 20px;
  padding: 12px 15px;
  border-left: 4px solid #4ee1c1;
  border-bottom: 1px solid #315368;
  color: #f4fffd;
  background-color: #102737;
}

#wemd h2 .content {
  color: #f4fffd;
  background-color: #102737;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.45;
  text-wrap: balance;
}

#wemd h3 {
  margin: 31px 0 15px;
  padding: 0;
  color: #d9f2ef;
  background-color: #07151f;
}

#wemd h3 .content {
  display: inline-block;
  padding: 5px 11px;
  border: 1px solid #6f67a7;
  color: #eeeaff;
  background-color: #292342;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-wrap: balance;
}

#wemd h4,
#wemd h5,
#wemd h6 {
  margin: 27px 0 13px;
  padding: 7px 10px;
  border-left: 3px solid #ffb86b;
  color: #f7dcc0;
  background-color: #142530;
}

#wemd h4 .content,
#wemd h5 .content,
#wemd h6 .content {
  color: #f7dcc0;
  background-color: #142530;
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
  padding: 0 2px;
  color: #67efd2;
  background-color: #102737;
  font-weight: 750;
}

#wemd em,
#wemd em strong {
  color: #c5b9ff;
  background-color: #07151f;
  font-style: italic;
}

#wemd mark {
  padding: 1px 5px;
  border-bottom: 2px solid #ffb86b;
  color: #fff4e5;
  background-color: #573c28;
}

#wemd a {
  color: #75edd6;
  background-color: #07151f;
  font-weight: 650;
  text-decoration: underline;
  text-decoration-color: #587e82;
  text-underline-offset: 0.22em;
}

#wemd .table-of-contents a {
  border: none;
  color: #75edd6;
  background-color: #07151f;
  font-weight: 650;
}

#wemd s,
#wemd del {
  color: #9bbab6;
  background-color: #07151f;
  font-style: italic;
  text-decoration: line-through;
}

#wemd ul,
#wemd ol {
  margin: 18px 0 24px;
  padding: 10px 10px 10px 29px;
  border: 1px solid #244554;
  color: #4ee1c1;
  background-color: #0a1b26;
}

#wemd ul {
  list-style-type: square;
}

#wemd ol {
  color: #b7a7ff;
  list-style-type: decimal;
}

#wemd li {
  color: #d9f2ef;
  background-color: #0a1b26;
}

#wemd li section {
  margin: 6px 0;
  color: #d9f2ef;
  background-color: #0a1b26;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  line-height: 1.76;
}

#wemd ol > li > section {
  padding-bottom: 4px;
  border-bottom: 1px dotted #315368;
}

#wemd blockquote {
  border: none;
  color: #d9f2ef;
  background-color: #07151f;
}

#wemd .multiquote-1 {
  margin: 30px 0;
  padding: 18px 20px;
  border: 1px solid #315368;
  border-left: 4px solid #4ee1c1;
  color: #d9f2ef;
  background-color: #0d2633;
}

#wemd .multiquote-2 {
  margin: 25px 0;
  padding: 17px 19px;
  border: 1px solid #665c9a;
  border-left: 4px solid #a68cff;
  color: #eeeaff;
  background-color: #292342;
}

#wemd .multiquote-3 {
  margin: 25px 0;
  padding: 17px 19px;
  border: 1px solid #86654a;
  border-left: 4px solid #ffb86b;
  color: #fff1df;
  background-color: #39291f;
}

#wemd .multiquote-1 p {
  margin: 0;
  color: #d9f2ef;
  background-color: #0d2633;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-2 p {
  margin: 0;
  color: #eeeaff;
  background-color: #292342;
  font-size: 15px;
  line-height: 1.76;
}

#wemd .multiquote-3 p {
  margin: 0;
  color: #fff1df;
  background-color: #39291f;
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
  height: 3px;
  margin: 43px 0;
  border: none;
  border-left: 90px solid #4ee1c1;
  border-right: 46px solid #a68cff;
  color: #d9f2ef;
  background-color: #ffb86b;
}

#wemd figure {
  margin: 34px 0 39px;
  padding: 8px;
  border: 1px solid #315368;
  color: #d9f2ef;
  background-color: #0a1b26;
  break-inside: avoid;
}

#wemd figure a {
  border: none;
  color: #75edd6;
  background-color: #0a1b26;
}

#wemd img,
#wemd figure a img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border: 1px solid #315368;
  background-color: #0a1b26;
}

#wemd figcaption {
  margin-top: 8px;
  padding: 8px 10px;
  border-top: 1px solid #315368;
  color: #a9cbc7;
  background-color: #0b202c;
  font-size: 12px;
  line-height: 1.65;
  text-align: left;
}

#wemd p code,
#wemd li code {
  padding: 2px 6px;
  border: 1px solid #466675;
  color: #82f2dc;
  background-color: #102737;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  word-break: break-all;
}

#wemd pre {
  margin: 31px 0;
  border: 1px solid #315368;
  border-top: 6px solid #a68cff;
  color: #d9f2ef;
  background-color: #08131c;
  overflow-x: auto;
}

#wemd pre code,
#wemd pre code.hljs {
  display: block;
  min-width: max-content;
  padding: 20px;
  color: #d9f2ef;
  background-color: #08131c;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre;
}

#wemd pre.custom > .mac-sign {
  display: block;
  border-bottom: 1px solid #315368;
  color: #d9f2ef;
  background-color: #08131c;
}

#wemd .table-container {
  margin: 33px 0;
  color: #d9f2ef;
  background-color: #081823;
  overflow-x: auto;
}

#wemd table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #456576;
  color: #d9f2ef;
  background-color: #081823;
  text-align: left;
}

#wemd table tr {
  color: #d9f2ef;
  background-color: #0a1b26;
}

#wemd table tr:nth-child(2n) {
  color: #d9f2ef;
  background-color: #102737;
}

#wemd table tr th,
#wemd table tr td {
  min-width: 88px;
  padding: 10px;
  border: 1px solid #315368;
  color: #d9f2ef;
  background-color: #0a1b26;
  font-size: 14px;
  line-height: 1.6;
}

#wemd table tr:nth-child(2n) td {
  color: #d9f2ef;
  background-color: #102737;
}

#wemd table tr th {
  color: #07151f;
  background-color: #65e6cd;
  font-weight: 750;
}

#wemd .callout {
  margin: 31px 0;
  padding: 18px 20px;
  border: 1px solid #466675;
  border-left: 4px solid #4ee1c1;
  border-radius: 0;
  color: #d9f2ef;
  background-color: #0d2633;
  break-inside: avoid;
}

#wemd .callout-important {
  border-color: #8f7ccd;
  color: #eeeaff;
  background-color: #292342;
}

#wemd .callout-warning,
#wemd .callout-caution {
  border-color: #c48955;
  color: #fff1df;
  background-color: #39291f;
}

#wemd .callout-title {
  margin-bottom: 7px;
  color: #75edd6;
  background-color: #0d2633;
  font-size: 14px;
  font-weight: 750;
}

#wemd .callout-important .callout-title {
  color: #c5b9ff;
  background-color: #292342;
}

#wemd .callout-warning .callout-title,
#wemd .callout-caution .callout-title {
  color: #ffc98e;
  background-color: #39291f;
}

#wemd .callout p {
  margin: 0;
  color: #d9f2ef;
  background-color: #0d2633;
  font-size: 15px;
}

#wemd .callout-important p {
  color: #eeeaff;
  background-color: #292342;
}

#wemd .callout-warning p,
#wemd .callout-caution p {
  color: #fff1df;
  background-color: #39291f;
}

#wemd .footnote-word,
#wemd .footnote-ref {
  color: #75edd6;
  background-color: #07151f;
  font-weight: 700;
}

#wemd .footnotes-sep {
  margin-top: 49px;
  padding: 15px 12px;
  border-top: 3px solid #4ee1c1;
  color: #f4fffd;
  background-color: #0b202c;
}

#wemd .footnotes {
  color: #b9d9d5;
  background-color: #0b202c;
}

#wemd .footnote-item {
  display: flex;
  margin-top: 9px;
  color: #b9d9d5;
  background-color: #0b202c;
}

#wemd .footnote-num {
  width: 30px;
  flex-shrink: 0;
  color: #c5b9ff;
  background-color: #0b202c;
  font-weight: 700;
}

#wemd .footnote-item p {
  margin: 0;
  color: #b9d9d5;
  background-color: #0b202c;
  font-size: 13px;
  line-height: 1.65;
}

#wemd .block-equation {
  display: block;
  margin: 31px 0;
  padding: 19px 10px;
  border: 1px solid #456576;
  color: #f4fffd;
  background-color: #0b2230;
  text-align: center;
  overflow-x: auto;
}

#wemd .block-equation > svg {
  max-width: 300% !important;
}

#wemd .inline-equation {
  color: #f4fffd;
  background-color: #102737;
}

#wemd .inline-equation > svg {
  vertical-align: middle;
}

#wemd pre.mermaid {
  padding: 20px 10px;
  border: 1px solid #456576;
  border-top: 6px solid #4ee1c1;
  color: #f4fffd;
  background-color: #0b2230;
}

#wemd .task-list-item {
  display: flex;
  align-items: flex-start;
  margin-left: -1.2em;
  color: #d9f2ef;
  background-color: #0a1b26;
  list-style: none;
}

#wemd .task-list-item input[type='checkbox'] {
  margin-top: 7px;
  margin-right: 8px;
  accent-color: #4ee1c1;
  background-color: #0a1b26;
  pointer-events: none;
}
`;
