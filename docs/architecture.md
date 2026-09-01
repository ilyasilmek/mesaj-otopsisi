# Mimari Kararlar

## Hedef

Mesaj Otopsisi önce PWA olarak yayınlanır; ileride iOS ve Android istemcileri aynı backend ve analiz sözleşmesini kullanır.

## Katmanlar

1. Client — Next.js responsive web/PWA arayüzü.
2. API — Next.js Route Handlers.
3. Core — UI'dan bağımsız analiz tipleri, şemaları ve orkestrasyon mantığı.
4. AI adapter — Model sağlayıcısına özel kodu tek yerde tutar.
5. Share — Yapılandırılmış sonuçtan paylaşılabilir kart üretir.

## Akış

Screenshot/Text → Validation → Conversation extraction → Context analysis → Humor/report generation → Structured result → UI/Share

AI anahtarı browser'a gönderilmez. Görseller kalıcı depolama gerektirmediği sürece geçici işlenir.

## Mobil stratejisi

İlk seçenek PWA'dır. Mobil uygulama ihtiyacı doğrulanınca React Native/Expo istemcisi aynı API sözleşmesine bağlanabilir. Platforma özel UI yeniden yazılabilir; analiz mantığı ve veri sözleşmeleri yeniden yazılmamalıdır.

## Veri tabanı

MVP'de kullanıcı hesabı ve kalıcı geçmiş olmadığı için veritabanı zorunlu değildir. İhtiyaç doğarsa PostgreSQL gibi kalıcı bir katman eklenebilir.

## Reklam

MVP'de reklam kapalıdır. Sonradan bağımsız bir AdSlot bileşeni olarak eklenebilir.
