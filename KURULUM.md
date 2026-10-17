# 1. Adım: Kurulum Rehberi (Windows)

Bu rehberdeki her komutu kendiniz yazarak çalıştırın. Amaç sadece projeyi çalıştırmak değil, her parçanın ne işe yaradığını görmek.

## A. Araçları kurun

| Araç | Ne işe yarar | Kontrol komutu |
|---|---|---|
| **VS Code** (IDE) | Kodu yazdığımız editör. Bilgisayarınızda zaten var gibi görünüyor. | - |
| **Node.js (LTS)** | JavaScript'i tarayıcı dışında, sunucuda çalıştırır. `npm` (paket yöneticisi) onunla gelir. https://nodejs.org | `node -v` ve `npm -v` |
| **Git** | Kodun sürüm geçmişini tutar. https://git-scm.com/download/win | `git --version` |
| **GitHub hesabı** | Git deposunun internetteki kopyası, portföyünüz. | - |

Kurduktan sonra VS Code'u kapatıp açın, ardından **Terminal > New Terminal** ile terminali açıp kontrol komutlarını çalıştırın. Her biri bir sürüm numarası yazmalı.

Git'e kim olduğunuzu bir kez söyleyin (commit'lerde bu isim görünür):

```bash
git config --global user.name "Adınız Soyadınız"
git config --global user.email "github-hesabinizdaki@eposta.com"
```

## B. Projeyi açın

1. Proje dosyaları `Belgeler\guardianchain` klasöründe.
2. VS Code'da **File > Open Folder** ile bu klasörü açın.

Klasördeki dosyalar:

- `backend/src/index.js`: Express sunucusu. İçindeki yorumları okuyun; **middleware** kavramını ilk burada göreceksiniz.
- `frontend/src/App.jsx`: React sayfası. Açılınca backend'e istek atıp cevabı gösterir.
- `.gitignore`: Git'in takip etmeyeceği dosyalar (`node_modules`, `.env`).
- `backend/.env.example`: Gizli ayarların şablonu.

## C. Backend'i çalıştırın

```bash
cd backend
copy .env.example .env
npm install
npm run dev
```

- `npm install`: `package.json` içindeki kütüphaneleri (`express`, `cors`, `dotenv`) indirip `node_modules` klasörüne koyar.
- `npm run dev`: Sunucuyu başlatır. Dosyayı kaydettiğinizde otomatik yeniden başlar.

Tarayıcıda http://localhost:3000/api/health adresini açın. Şunu görmelisiniz:

```json
{"status":"ok","app":"SupplyChain Guardian","time":"..."}
```

Terminale bakın: middleware her isteği oraya yazdı. Bu terminal açık kalsın.

## D. Frontend'i çalıştırın

VS Code'da ikinci bir terminal açın (terminal panelindeki **+** düğmesi):

```bash
cd frontend
npm install
npm run dev
```

http://localhost:5173 adresini açın. Yeşil "✅ Backend bağlantısı: ok" yazısı görmelisiniz.

**Burada ne oldu?** Tarayıcıdaki React uygulaması (frontend) `/api/health` adresine istek attı, Vite bu isteği 3000 portundaki Express'e (backend) iletti, Express JSON cevap döndü. Backend terminalini kapatıp sayfayı yenilerseniz kırmızı hata mesajını görürsünüz; deneyin.

## E. Git ve GitHub

GitHub'daki `guardianchain` deposunda ilk commit hazır: https://github.com/capanmehmet27/guardianchain

Şimdi bilgisayarınızdaki `guardianchain` klasörünü bu depoya bağlayın. VS Code'da yeni bir terminal açın (`guardianchain` klasöründe olmalı) ve sırayla çalıştırın:

```bash
git init -b main
git remote add origin https://github.com/capanmehmet27/guardianchain.git
git fetch origin
git reset origin/main
git branch -u origin/main
git status
```

- `git init`: Klasörü bir Git deposuna çevirir (gizli `.git` klasörü oluşur).
- `git remote add origin ...`: GitHub'daki depoyu "origin" adıyla tanıtır.
- `git fetch`: GitHub'daki commit'leri indirir, dosyalarınıza dokunmaz.
- `git reset origin/main`: Yerel geçmişi GitHub'daki ilk commit'e eşitler.
- `git branch -u`: `main` dalının GitHub'daki `main`'i takip etmesini sağlar.

`git status` çıktısında "nothing to commit, working tree clean" (değişiklik yok) görmelisiniz. `node_modules` ve `.env` listede görünmüyor; bunu `.gitignore` sağlıyor.

**Kendi ilk commit'iniz:** `README.md` dosyasında bir satırı değiştirin (ör. en alta adınızı yazın), sonra:

```bash
git status
git add README.md
git status
git commit -m "README'ye geliştirici bilgisi eklendi"
git push
```

İki `git status` arasındaki farka dikkat edin: `git add` değişikliği "sahneye" alır, `git commit` o anın fotoğrafını çeker, `git push` fotoğrafı GitHub'a gönderir. İlk push'ta tarayıcıda GitHub girişi istenebilir. GitHub sayfasını yenileyin: commit'iniz orada.

## F. Supabase

1. https://supabase.com adresinde GitHub hesabınızla giriş yapın.
2. **New project** deyin. Ad: `supplychain-guardian`. Bölge olarak size yakın olanı (ör. Frankfurt) seçin.
3. Veritabanı şifresini güçlü seçin ve **bir yere not edin**.

Bağlantı adresini şimdilik almanız gerekmiyor; 2. adımda birlikte `.env` dosyasına ekleyeceğiz. Şifreyi ve bağlantı adresini sohbete yazmayın.

## 1. Adım tamamlandı mı?

- [ ] `node -v`, `npm -v`, `git --version` çalışıyor
- [ ] http://localhost:5173 yeşil mesajı gösteriyor
- [ ] Kod GitHub'da görünüyor
- [ ] Supabase projesi oluşturuldu

Hepsi tamamsa 2. adıma (gereksinimler ve veritabanı modeli) geçebiliriz. Takıldığınız yerde hata mesajını olduğu gibi yazmanız yeterli.
