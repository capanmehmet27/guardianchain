import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: her istek, route'a ulaşmadan önce bu fonksiyonlardan geçer.
app.use(cors());          // Frontend'in (farklı port) bu API'ye istek atmasına izin verir
app.use(express.json());  // Gelen JSON gövdesini req.body içine çevirir

// Kendi yazdığımız ilk middleware: gelen her isteği konsola yazar.
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next(); // Sıradaki middleware'e / route'a geç
});

// İlk API uç noktamız: sunucu ayakta mı?
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'SupplyChain Guardian', time: new Date().toISOString() });
});

// Hiçbir route eşleşmezse 404 döner.
app.use((req, res) => {
  res.status(404).json({ error: 'Bulunamadı' });
});

app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});
