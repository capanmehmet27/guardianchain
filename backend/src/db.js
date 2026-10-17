import pg from 'pg';

// Bağlantı havuzu (pool): her istekte yeni bağlantı açmak yerine
// birkaç bağlantıyı açık tutar ve istekler arasında paylaştırır.
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL, // .env dosyasından gelir
  ssl: { rejectUnauthorized: false },         // Supabase bağlantısı şifreli (SSL) olmalı
});

// Kolay kullanım için: query('SELECT ...', [parametreler])
export const query = (text, params) => pool.query(text, params);
