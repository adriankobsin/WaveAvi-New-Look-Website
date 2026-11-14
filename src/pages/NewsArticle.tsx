import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Link as LinkIcon, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import NewsMetadata from "@/components/NewsMetadata";
import { Button } from "@/components/ui/button";
import { newsItems, newsPath } from "@/data/news";
import { newsMedia } from "@/data/news-media";
import NotFound from "./NotFound";
import { toast } from "sonner";

const NewsArticle = () => {
  const { slug } = useParams();
  const item = newsItems.find((entry) => entry.slug === slug);
  if (!item) return <NotFound />;
  const url = `https://www.waveavi.com${newsPath(item)}`;
  const gallery = newsMedia[item.slug] ?? [];
  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: item.title, url });
      else {
        await navigator.clipboard.writeText(url);
        toast.success("News link copied");
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) toast.error("Unable to share this link");
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${item.title} | Wave-AVI`} description={item.excerpt} path={newsPath(item)} type="article"
        jsonLd={{ "@context": "https://schema.org", "@type": "Article", headline: item.title,
          description: item.excerpt, url, mainEntityOfPage: url,
          ...(item.author !== "Byline not provided" ? { author: { "@type": "Organization", name: item.author } } : {}),
          publisher: { "@type": "Organization", name: item.source } }} />
      <Navbar />
      <main className="section-padding pt-32 pb-24 md:pt-44">
        <article className="mx-auto max-w-4xl">
          <Button asChild variant="link" className="mb-10 px-0"><Link to="/#innovation"><ArrowLeft />Latest from Wave-AVI</Link></Button>
          <NewsMetadata item={item} />
          <h1 className="mt-8 text-3xl md:text-5xl font-display font-semibold leading-tight text-foreground">{item.title}</h1>
          <p className="mt-8 text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground">{item.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="outline" onClick={share}><Share2 />Share</Button>
            <Button asChild variant="ghost"><a href={url}><LinkIcon />Permalink</a></Button>
            {item.externalUrl && <Button asChild variant="outline"><a href={item.externalUrl} target="_blank" rel="noopener noreferrer">Read the feature — Page 52<ArrowUpRight /></a></Button>}
          </div>
          {gallery.length > 0 && <div className={`mt-14 grid gap-6 ${item.featured ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {gallery.map((shot) => <figure key={shot.src}>
              <img src={shot.src} srcSet={shot.srcSet} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 40vw, 436px" loading="lazy" decoding="async" width={960} height={720} alt={shot.caption}
                className={`w-full object-cover ${item.featured ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
              <figcaption className="mt-3 text-xs leading-relaxed font-body text-muted-foreground">{shot.caption}{shot.illustrative && <span className="block mt-1">AI-generated illustration; not a project photograph.</span>}</figcaption>
            </figure>)}
          </div>}
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default NewsArticle;