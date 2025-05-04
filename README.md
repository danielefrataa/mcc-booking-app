
---

## ⚙️ Cara Menjalankan

1. **Clone repo ini**
   ```bash
   git clone https://github.com/USERNAME/mcc-booking-app.git
   cd mcc-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Copy file .env**
   ```bash
   cp .env.example .env
   ```
   - Isi konfigurasi database sesuai environment kamu.

4. **Setup database (migrasi & seeder)**
   ```bash
   node scripts/setupDatabase.js
   ```

5. **Jalankan server**
   ```bash
   node server.js
   ```


---

## 🔑 Endpoint API Utama

### **Auth & User**
- `POST /api/users` — Register user
- `POST /api/users/login` — Login user

### **Kategori & Sub Sektor**
- `GET /api/kategori` — List kategori event
- `GET /api/subsektor` — List sub sektor

### **Ruangan**
- `GET /api/ruangan` — List semua ruangan
- `GET /api/ruangan/:id` — Detail ruangan

### **Booking**
- `POST /api/booking` — Buat booking baru
- `GET /api/booking/status/:status` — List booking by status
- `PATCH /api/booking/:id/status` — Update status booking (approve/reject)

---


## 📄 Lisensi

MIT License

---
