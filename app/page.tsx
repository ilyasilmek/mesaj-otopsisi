"use client";

import { useState } from "react";

export default function HomePage() {
  const [result, setResult] = useState(false);
  return <main className="shell"><section className="hero"><div className="eyebrow">🔬 MESAJ OTOPSİSİ</div><h1>“Tamam” gerçekten tamam mı?</h1><p className="lead">Mesajı bırak. Bağlamı inceleyelim.</p>{!result ? <div className="actions"><label className="primary-button">📸 Ekran görüntüsü yükle<input type="file" accept="image/*" onChange={() => setResult(true)} hidden /></label><div className="divider"><span>veya</span></div><button className="secondary-button" onClick={() => setResult(true)}>✍️ Metin gir</button></div> : <div className="report"><div className="report-top"><span>OTOPSİ RAPORU</span><span>VAKA #000001</span></div><div className="quote">“Tamam.”</div><div className="metrics"><p>Kırgınlık <b>81%</b></p><p>Sinir <b>74%</b></p><p>Gerçekten tamam <b>9%</b></p></div><div className="danger"><span>TEHLİKE SEVİYESİ</span><b>🔴 8.4/10</b></div><div className="finding"><small>OTOPSİ SONUCU</small><p>Bu mesaj teknik olarak tek kelime. Duygusal olarak 14 sayfa.</p></div><div className="report-actions"><button className="primary-button">📤 Sonucu paylaş</button><button className="secondary-button" onClick={() => setResult(false)}>🔄 Başka mesaj</button></div></div>}</section></main>;
}
