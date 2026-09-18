import type MarkdownIt from "markdown-it";
import type StateCore from "markdown-it/lib/rules_core/state_core";
import type Token from "markdown-it/lib/token";

const BOUNDARY_MARKER = "<!--wemd-cjk-emphasis-boundary-->";
const LEADING_PUNCTUATION = `"'“‘（【《「『`;
const TRAILING_PUNCTUATION = `，。！？；：、,.!?;:）】》」』”’"'`;

const rewriteOutsideCodeSpans = (source: string): string => {
  const rewrite = (text: string): string => {
    const leadingPunctuation = `[${LEADING_PUNCTUATION}]`;
    const punctuation = `[${TRAILING_PUNCTUATION}]`;
    const precedingText = `([\\p{L}\\p{N}])`;
    const followingText = `(?=[\\p{L}\\p{N}])`;

    return text
      .replace(
        new RegExp(`${precedingText}\\*\\*(?=${leadingPunctuation})`, "gu"),
        `$1${BOUNDARY_MARKER}**`,
      )
      .replace(
        new RegExp(
          `\\*\\*([^*\\n]*?${punctuation})\\*\\*${followingText}`,
          "gu",
        ),
        `**$1**${BOUNDARY_MARKER}`,
      )
      .replace(
        new RegExp(`${precedingText}__(?=${leadingPunctuation})`, "gu"),
        `$1${BOUNDARY_MARKER}__`,
      )
      .replace(
        new RegExp(`__([^_\\n]*?${punctuation})__${followingText}`, "gu"),
        `__$1__${BOUNDARY_MARKER}`,
      );
  };

  let result = "";
  let cursor = 0;
  const codeSpan = /(`+)[\s\S]*?\1/g;

  for (const match of source.matchAll(codeSpan)) {
    const index = match.index ?? 0;
    result += rewrite(source.slice(cursor, index));
    result += match[0];
    cursor = index + match[0].length;
  }

  return result + rewrite(source.slice(cursor));
};

const removeBoundaryMarkers = (token: Token): void => {
  if (!token.children) return;
  token.children = token.children.filter(
    (child) =>
      !(child.type === "html_inline" && child.content === BOUNDARY_MARKER),
  );
};

export default (md: MarkdownIt): void => {
  md.core.ruler.before(
    "inline",
    "wemd_cjk_emphasis_boundary",
    (state: StateCore) => {
      state.tokens.forEach((token) => {
        if (token.type === "inline") {
          token.content = rewriteOutsideCodeSpans(token.content);
        }
      });
    },
  );

  md.core.ruler.after(
    "inline",
    "wemd_cjk_emphasis_boundary_cleanup",
    (state: StateCore) => {
      state.tokens.forEach(removeBoundaryMarkers);
    },
  );
};
