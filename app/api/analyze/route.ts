import { NextResponse } from "next/server";
import { mockAutopsy } from "@/core/analysis/mock";
import type { AnalyzeInput } from "@/core/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AnalyzeInput;
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const hasImage = typeof body.imageBase64 === "string" && body.imageBase64.length > 0;
    if (!text && !hasImage) return NextResponse.json({ error: "Mesaj metni veya görsel gerekli." }, { status: 400 });
    return NextResponse.json({ result: mockAutopsy(text || "Ekran görüntüsündeki mesaj") });
  } catch {
    return NextResponse.json({ error: "İstek işlenemedi." }, { status: 400 });
  }
}
