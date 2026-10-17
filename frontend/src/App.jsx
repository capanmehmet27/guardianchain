import { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  // Sayfa açılınca backend'e istek at
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setError('Backend\'e ulaşılamadı. Backend çalışıyor mu?'));
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 32 }}>
      <h1>SupplyChain Guardian</h1>
      <p>Tedarik zinciri izlenebilirliği ve sorun yönetimi paneli</p>
      {health && <p style={{ color: 'green' }}>✅ Backend bağlantısı: {health.status} ({health.time})</p>}
      {error && <p style={{ color: 'crimson' }}>❌ {error}</p>}
      {!health && !error && <p>Backend kontrol ediliyor...</p>}
    </main>
  );
}
