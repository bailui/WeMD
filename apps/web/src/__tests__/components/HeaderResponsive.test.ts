/// <reference types="node" />

import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const headerCss = readFileSync("src/components/Header/Header.css", "utf8");

describe("Header responsive layout", () => {
  it("compacts secondary actions and pins the header to the viewport at medium widths", () => {
    expect(headerCss).toMatch(
      /@media\s*\(min-width:\s*769px\)\s*and\s*\(max-width:\s*1180px\)[\s\S]*?\.app-header\s*\{[^}]*width:\s*calc\(100vw\s*-\s*32px\);/,
    );
    expect(headerCss).toMatch(
      /@media\s*\(min-width:\s*769px\)\s*and\s*\(max-width:\s*1180px\)[\s\S]*?\.header-action-secondary\s+span\s*\{[^}]*display:\s*none;/,
    );
    expect(headerCss).toMatch(
      /@media\s*\(min-width:\s*769px\)\s*and\s*\(max-width:\s*1180px\)[\s\S]*?\.header-action-primary\s*\{[^}]*white-space:\s*nowrap;/,
    );
  });

  it("keeps article-theme and copy entry points reachable in narrow desktop/Electron layout", () => {
    expect(headerCss).toMatch(
      /@media\s*\(max-width:\s*768px\)[\s\S]*?\.app\[data-layout-mode=["']desktop["']\]\s+\.app-header\s*\{[^}]*width:\s*calc\(100vw\s*-\s*16px\);/,
    );
    expect(headerCss).toMatch(
      /\.app\[data-layout-mode=["']desktop["']\]\s+\.header-nav-button--article-theme\s*\{[^}]*display:\s*inline-flex;/,
    );
    expect(headerCss).toMatch(
      /\.app\[data-layout-mode=["']desktop["']\]\s+\.header-action-primary\s*\{[^}]*display:\s*inline-flex;/,
    );
  });
});
