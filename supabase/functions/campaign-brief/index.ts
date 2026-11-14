// Drafts a Wave-AVI ad campaign brief from a goal, audience and offer.
// Protected by a shared passcode (CAMPAIGN_BRIEF_PASSCODE) so public visitors cannot spend AI credits.
import { generateResponse, GatewayError } from "npm:@lovable.dev/ai-gateway";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });

const BRAND = `Wave-AVI is a high-end technical consultancy and integrator of audio video, entertainment, IT, connectivity and control systems for superyachts, luxury residences, hotels and beach clubs. It also supplies marine lighting (LEDs, strip LEDs, downlights, explosion-proof marine lighting) across Southeast Asia and Europe. Entities: Wave-AVI Ltd. (UK), Wave AVI BV (Netherlands), Wave AVI Co. Ltd. (Thailand), Wave AVI Pte. Ltd. (Singapore). Tone: discreet, cinematic, premium, "effortless technology". Contact: info@waveavi.com, website https://www.waveavi.com. Never invent awards, clients, prices or statistics.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "Invalid request" }, 400); }

  const expected = Deno.env.get("CAMPAIGN_BRIEF_PASSCODE");
  if (!expected) return json({ error: "Access code is not configured yet." }, 503);
  if (body.passcode !== expected) return json({ error: "Incorrect access code." }, 401);

  const field = (k: string, max: number) => {
    const v = typeof body[k] === "string" ? (body[k] as string).trim() : "";
    return v.length > 0 && v.length <= max ? v : null;
  };
  const goal = field("goal", 1000), audience = field("audience", 1500), offer = field("offer", 1500);
  if (!goal || !audience || !offer) return json({ error: "Please fill in goal, audience and offer (under 1,500 characters each)." }, 400);

  try {
    const res: any = await generateResponse({
      model: "openai/gpt-6-astra",
      instructions: `You are a senior performance marketing strategist writing for Wave-AVI.\n${BRAND}\nWrite in British English, in Markdown.`,
      input: `Draft a tailored ad campaign brief.\n\nCampaign goal: ${goal}\nTarget audience: ${audience}\nOffer: ${offer}\n\nUse these sections: Summary; Objective & success measure; Audience segments (with locations and languages); Key message & positioning; Offer framing; Recommended channels and campaign types (with reasoning); Ad copy ideas (3 headlines, 3 primary texts, CTAs); Creative direction; Landing page & tracking needs; Suggested budget approach (as a range to confirm, not a commitment); Risks and open questions. Flag any assumption clearly.`,
    });
    const text = (res.output ?? [])
      .flatMap((o: any) => o.content ?? [])
      .filter((c: any) => c.type === "output_text")
      .map((c: any) => c.text)
      .join("\n").trim();
    if (!text) return json({ error: "The AI returned no brief. Please try again." }, 502);
    return json({ brief: text });
  } catch (e) {
    if (e instanceof GatewayError) {
      console.error("Gateway error", e.code, e.httpStatus, e.message);
      const msg = e.httpStatus === 402 ? "AI credits are exhausted. Please top up and try again."
        : e.httpStatus === 429 ? "Too many requests right now. Please wait a moment and try again."
        : "The AI service could not draft the brief. Please try again.";
      return json({ error: msg }, e.httpStatus && e.httpStatus >= 400 ? e.httpStatus : 502);
    }
    console.error(e);
    return json({ error: "Something went wrong drafting the brief." }, 500);
  }
});
