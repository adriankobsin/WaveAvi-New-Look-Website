import { BadgeCheck, Calendar } from "lucide-react";
import type { NewsItem } from "@/data/news";

const NewsMetadata = ({ item }: { item: NewsItem }) => (
  <div className="space-y-3 font-body">
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] uppercase text-muted-foreground">{item.category}</span>
      <span className="inline-flex items-center gap-1 border border-ocean/20 px-2 py-1 text-[10px] text-ocean">
        <BadgeCheck className="h-3 w-3 shrink-0" />{item.badge}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />{item.date}
      </span>
    </div>
    <dl className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
      <div><dt className="inline">Source: </dt><dd className="inline">{item.source}</dd></div>
      <div><dt className="inline">Author: </dt><dd className="inline">{item.author}</dd></div>
    </dl>
  </div>
);

export default NewsMetadata;