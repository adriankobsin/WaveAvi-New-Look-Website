import { describe, expect, it } from "vitest";
import { newsItems, newsPath } from "../data/news";

describe("news publication records", () => {
  it("requires source and author attribution for every entry", () => {
    expect(newsItems.length).toBeGreaterThan(0);
    for (const item of newsItems) {
      expect(item.source.trim().length).toBeGreaterThan(0);
      expect(item.author.trim().length).toBeGreaterThan(0);
    }
  });
  it("gives every entry a unique directly addressable news URL", () => {
    const paths = newsItems.map(newsPath);
    expect(new Set(paths).size).toBe(newsItems.length);
    for (const path of paths) expect(path).toMatch(/^\/news\/[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(paths).toContain("/news/phnom-penh-opening");
    expect(paths).toContain("/news/arena-central-sports-bar");
  });
  it("retains the supplied journal destination without inventing its byline", () => {
    const journal = newsItems.find((item) => item.featured);
    expect(journal?.externalUrl).toBe("https://elevation88.app.box.com/s/1oevu10ck9xquzdchn0kf5ntbb61hg1r");
    expect(journal?.author).toBe("Byline not provided");
  });
});