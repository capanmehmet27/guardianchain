# SupplyChain Guardian

Blockchain destekli tedarik zincirlerinde ürün izlenebilirliğini artırmak, eksik ve tutarsız kayıtları tespit etmek ve operasyonel sorunların çözümünü merkezi bir web arayüzünden yönetmek için geliştirilen bir web uygulaması.

> Örnek vaka: Walmart'ın gıda tedarik zinciri izlenebilirliği çalışmaları ve IBM Food Trust. Uygulama bu şirketlerin sistemlerine bağlı değildir; tüm veriler örnek veridir.

## Teknolojiler

| Katman | Teknoloji |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Veritabanı | PostgreSQL (Supabase) |

## Proje yapısı

```
guardianchain/
├── backend/     # Express API (port 3000)
│   └── src/index.js
└── frontend/    # React arayüzü (port 5173)
    └── src/App.jsx
```

## Çalıştırma

```bash
# Terminal 1
cd backend
npm install
npm run dev

# Terminal 2
cd frontend
npm install
npm run dev
```

Tarayıcıda http://localhost:5173 adresini açın.

## Yol haritası

- [x] 1. Kurulum ve iskelet
- [ ] 2. Gereksinimler ve veritabanı modeli
- [ ] 3. Backend API, middleware ve sorun tespit kuralları
- [ ] 4. Frontend paneli ve dokümantasyon
