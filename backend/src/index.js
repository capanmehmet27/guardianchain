import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { query } from './db.js';

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

// Veritabanı bağlantı testi: Supabase'e basit bir sorgu gönderir.
app.get('/api/db-health', async (req, res) => {
  try {
    const result = await query('SELECT now() AS db_time, version() AS db_version');
    res.json({ status: 'ok', ...result.rows[0] });
  } catch (err) {
    console.error('Veritabanı hatası:', err.message);
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Hiçbir route eşleşmezse 404 döner.
app.use((req, res) => {
  res.status(404).json({ error: 'Bulunamadı' });
});

app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});
