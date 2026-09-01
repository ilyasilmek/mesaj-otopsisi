import type { AutopsyResult } from "@/core/types";

export function mockAutopsy(message: string): AutopsyResult {
  const text = message.trim() || "Tamam.";
  const passive = /tamam|peki|olur/i.test(text);
  const dangerLevel = passive ? 8.4 : 5.7;
  return {
    caseNumber: Math.floor(100000 + Math.random() * 900000).toString(),
    message: text,
    emotions: passive ? { Kırgınlık: 81, Sinir: 74, Umursamazlık: 42, "Gerçekten tamam": 9 } : { Merak: 68, Kırgınlık: 31, Sinir: 22, "Gerçekten normal": 57 },
    dangerLevel,
    interpretation: passive ? "Bu mesaj teknik olarak kısa. Duygusal olarak 14 sayfa." : "Mesajın görünen anlamıyla gizli anlamı arasında küçük bir mesafe var.",
    advice: passive ? "Hemen “Ne oldu?” yazmak yerine biraz beklemek daha güvenli olabilir." : "Bağlamı görmeden kesin hüküm vermek yerine konuşmanın tamamını incelemek daha sağlıklı.",
    shareText: `🔬 MESAJ OTOPSİSİ\n\n“${text}”\n\nTehlike ${dangerLevel}/10\n\nMesaj Otopsisi`
  };
}
