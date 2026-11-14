import journalCover from "@/assets/journal-cover.jpg";
import journalArticle from "@/assets/journal-article.jpg";
import journalInterview from "@/assets/journal-interview.jpg";
import NewsPhnomPenhSkyline240 from "@/assets/news-phnom-penh-skyline-240.webp";
import NewsPhnomPenhSkyline480 from "@/assets/news-phnom-penh-skyline-480.webp";
import NewsPhnomPenhSkyline960 from "@/assets/news-phnom-penh-skyline-960.webp";
import NewsCambodiaOffice240 from "@/assets/news-cambodia-office-240.webp";
import NewsCambodiaOffice480 from "@/assets/news-cambodia-office-480.webp";
import NewsCambodiaOffice960 from "@/assets/news-cambodia-office-960.webp";
import NewsArenaCentralBar240 from "@/assets/news-arena-central-bar-240.webp";
import NewsArenaCentralBar480 from "@/assets/news-arena-central-bar-480.webp";
import NewsArenaCentralBar960 from "@/assets/news-arena-central-bar-960.webp";
import NewsAvControlRack240 from "@/assets/news-av-control-rack-240.webp";
import NewsAvControlRack480 from "@/assets/news-av-control-rack-480.webp";
import NewsAvControlRack960 from "@/assets/news-av-control-rack-960.webp";

export interface NewsShot {
  src: string;
  srcSet?: string;
  caption: string;
  illustrative?: boolean;
}
const responsiveShot = (small: string, medium: string, large: string, caption: string): NewsShot => ({
  src: medium,
  srcSet: `${small} 240w, ${medium} 480w, ${large} 960w`,
  caption,
  illustrative: true,
});
export const newsMedia: Record<string, NewsShot[]> = {
  "beyond-luxury-yacht-technology": [
    { src: journalCover, caption: "The Property & Lifestyle Journal — Issue 1 cover" },
    { src: journalArticle, caption: "Wave-AVI feature — page 52" },
    { src: journalInterview, caption: "Adrian Kobsin interview" },
  ],
  "phnom-penh-opening": [
    responsiveShot(NewsPhnomPenhSkyline240, NewsPhnomPenhSkyline480, NewsPhnomPenhSkyline960, "Phnom Penh — our newest Asia-Pacific hub"),
    responsiveShot(NewsCambodiaOffice240, NewsCambodiaOffice480, NewsCambodiaOffice960, "Engineering and systems design studio"),
  ],
  "arena-central-sports-bar": [
    responsiveShot(NewsArenaCentralBar240, NewsArenaCentralBar480, NewsArenaCentralBar960, "Large-format screen wall and multi-zone audio"),
    responsiveShot(NewsAvControlRack240, NewsAvControlRack480, NewsAvControlRack960, "Rack room and one-touch staff control"),
  ],
};
