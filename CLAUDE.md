# SupplyChain Guardian (guardianchain)

## Proje
Blockchain destekli tedarik zincirlerinde ürün izlenebilirliğini artırmak, eksik ve tutarsız kayıtları tespit etmek ve sorunların çözümünü tek bir web panelinden yönetmek için bir web uygulaması. Örnek vaka: Walmart gıda izlenebilirliği ve IBM Food Trust (gerçek sistemlere bağlı değil, tüm veriler örnek veri; kanıtlanmamış senaryolar "varsayımsal" olarak belirtilir).

Başarı ölçütleri: (1) ürünün geçtiği aşamalar görüntülenebiliyor, (2) eksik/tutarsız kayıt otomatik tespit ediliyor, (3) sorun bir kullanıcıya atanabiliyor, (4) çözüm geçmişi incelenebiliyor, (5) kayıt bütünlüğü kontrolü (ilk sürümde hash zinciriyle simüle edilmiş blockchain) güvenilir çalışıyor.

## Geliştirici ve çalışma şekli
- Mehmet projeyi tek başına, **öğrenmek için** yapıyor (git, GitHub, backend, frontend, middleware, veritabanı). Ödev ve LinkedIn portföyü için de kullanılacak.
- Tüm açıklamalar ve çıktılar **Türkçe** olsun. Kod, değişken adları ve commit mesajlarında kısa Türkçe açıklama yeterli.
- Kodu tek seferde yazıp geçme: her adımda neyi neden yaptığını kısaca açıkla, mümkünse komutları Mehmet'in kendisinin çalıştırmasına izin ver.
- Ortam: Windows, PowerShell, VS Code. Kullanıcı yolunda boşluk var (`C:\Users\mehmet çapan\...`), yolları tırnak içinde yaz.

## Teknoloji
- Frontend: React + Vite (`frontend/`, port 5180, `/api` istekleri backend'e proxy'lenir)
- Backend: Node.js + Express, ES modules (`backend/`, port 3000)
- Veritabanı: PostgreSQL, Supabase üzerinde. Supabase sadece veritabanı olarak kullanılır; hazır API/Auth özellikleri kullanılmaz (backend ve middleware elle yazılacak).
- Gizli bilgiler (`DATABASE_URL` vb.) sadece `backend/.env` içinde; `.env` asla commit edilmez.
- GitHub: https://github.com/capanmehmet27/guardianchain (dal: `main`)

## Yol haritası
1. [x] Kurulum ve iskelet (Express `/api/health`, React sayfası, KURULUM.md)
2. [ ] Gereksinim listesi ve veritabanı modeli: ürün/parti, aşama (stage), sevkiyat, belge, sorun (issue), sorun geçmişi, kullanıcı/rol tabloları + örnek veri (SQL dosyaları `db/` altında)
3. [ ] Backend API ve middleware: CRUD uç noktaları, demo rol girişi, kimlik ve hata middleware'leri, sorun tespit kuralları (eksik aşama, geciken teslimat, tutarsız tarih/parti/tesis), hash zinciriyle kayıt doğrulama
4. [ ] Frontend paneli (yönetim paneli, ürün izleme, sorun yönetimi ekranları), README, vaka notu, LinkedIn tanıtımı

Roller (demo kullanıcılar): tedarik zinciri yöneticisi, depo/lojistik çalışanı, üretici/tedarikçi, denetçi, sistem yöneticisi.
