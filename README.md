# SupplyChain Guardian

Blockchain destekli tedarik zincirlerinde ürün izlenebilirliğini artırmak, eksik ve tutarsız kayıtları tespit etmek ve operasyonel sorunların çözümünü merkezi bir web arayüzünden yönetmek için geliştirilen bir web uygulaması.

> Örnek vaka: Walmart'ın gıda tedarik zinciri izlenebilirliği çalışmaları ve IBM Food Trust. Uygulama bu şirketlerin sistemlerine bağlı değildir; tüm veriler örnek veridir.

**Durum:** 1. adım (kurulum ve iskelet) tamamlandı. Şu an backend yalnızca sağlık kontrolü uç noktası sunuyor, frontend de bu bağlantıyı gösteriyor.

## Teknolojiler

| Katman | Teknoloji |
|---|---|
| Frontend | React 18 + Vite 5 |
| Backend | Node.js + Express 4 |
| Veritabanı | PostgreSQL (Supabase), 2. adımda bağlanacak |

## Gereksinimler

- [Node.js](https://nodejs.org) LTS sürümü (`npm` ile birlikte gelir). `node --watch` kullanıldığı için Node 18.11 veya üzeri gerekir.
- [Git](https://git-scm.com)

Adım adım Windows kurulum rehberi için [KURULUM.md](KURULUM.md) dosyasına bakın.

## Proje yapısı

```
guardianchain/
├── backend/              # Express API (port 3000)
│   ├── .env.example      # Ortam değişkenleri şablonu
│   └── src/index.js      # Sunucu, middleware ve route'lar
├── frontend/             # React arayüzü (port 5173)
│   ├── vite.config.js    # /api isteklerini backend'e yönlendiren proxy
│   └── src/App.jsx       # Ana sayfa
└── KURULUM.md            # Ayrıntılı kurulum rehberi
```

## Çalıştırma

Backend ve frontend ayrı terminallerde çalışır.

**1. Backend**

```bash
cd backend
copy .env.example .env    # macOS/Linux: cp .env.example .env
npm install
npm run dev
```

Kontrol: http://localhost:3000/api/health adresi `{"status":"ok", ...}` döndürmeli.

**2. Frontend**

```bash
cd frontend
npm install
npm run dev
```

Tarayıcıda http://localhost:5173 adresini açın. "✅ Backend bağlantısı: ok" yazısını görmelisiniz. Kırmızı hata görürseniz backend'in çalıştığından emin olun.

## Ortam değişkenleri

`backend/.env` dosyasında tanımlanır. Bu dosya `.gitignore`'dadır; GitHub'a gönderilmez.

| Değişken | Varsayılan | Açıklama |
|---|---|---|
| `PORT` | `3000` | Backend'in dinlediği port |
| `DATABASE_URL` | – | Supabase PostgreSQL bağlantı adresi (2. adımda eklenecek) |

## npm komutları

| Klasör | Komut | Ne yapar |
|---|---|---|
| backend | `npm run dev` | Sunucuyu başlatır, dosya değişince yeniden başlatır |
| backend | `npm start` | Sunucuyu izleme olmadan başlatır |
| frontend | `npm run dev` | Geliştirme sunucusunu başlatır |
| frontend | `npm run build` | Üretim derlemesini `dist/` klasörüne oluşturur |
| frontend | `npm run preview` | Derlenmiş sürümü yerelde önizler |

## API

| Yöntem | Yol | Açıklama |
|---|---|---|
| GET | `/api/health` | Sunucunun ayakta olduğunu ve sunucu saatini döndürür |

Eşleşmeyen tüm istekler `404 {"error":"Bulunamadı"}` döner. Her istek, kendi yazdığımız loglama middleware'i ile backend terminaline yazılır.

## Yol haritası

- [x] 1. Kurulum ve iskelet
- [ ] 2. Gereksinimler ve veritabanı modeli
- [ ] 3. Backend API, middleware ve sorun tespit kuralları
- [ ] 4. Frontend paneli ve dokümantasyon
