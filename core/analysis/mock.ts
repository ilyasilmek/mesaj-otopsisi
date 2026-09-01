import type { AutopsyResult } from "@/core/types";

export function mockAutopsy(message: string): AutopsyResult {
  return { caseNumber: "000001", message, emotions: { "Kırgınlık": 81, "Sinir": 74, "Umursamazlık": 42, "Gerçekten tamam": 9 }, dangerLevel: 8.4, interpretation: "Bu mesaj teknik olarak tek kelime. Duygusal olarak 14 sayfa.", advice: "Şu an “Ne oldu?” yazmak yerine biraz beklemek daha güvenli olabilir.", shareText: "🔬 MESAJ OTOPSİSİ\n\n“" + message + "”\n\nKırgınlık 81% · Sinir 74% · Tehlike 8.4/10\n\nmesajotopsisi.app" };
}
