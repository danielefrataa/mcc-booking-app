// Utility untuk membuat elemen <option>
function createOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

// Load daftar ruangan ke dropdown
async function loadRuangan() {
    try {
        const response = await fetch('/api/ruangan');
        if (!response.ok) throw new Error('Gagal mengambil data ruangan');

        const ruangan = await response.json();
        const select = document.getElementById('id_ruangan');
        if (!select) return;

        select.innerHTML = '';
        select.appendChild(createOption('', 'Pilih Ruangan'));

        ruangan.forEach(r => {
            select.appendChild(createOption(r.id, `${r.nama_ruangan} (Kapasitas: ${r.kapasitas})`));
        });
    } catch (error) {
        console.error('loadRuangan Error:', error.message);
    }
}

// Load kategori event ke dropdown
async function loadKategoriEvent() {
    try {
        const response = await fetch('/api/kategori');
        if (!response.ok) throw new Error('Gagal mengambil data kategori event');

        const kategori = await response.json();
        const select = document.getElementById('kategori_event');
        if (!select) return;

        select.innerHTML = '';
        select.appendChild(createOption('', 'Pilih Kategori Event'));

        kategori.forEach(k => {
            select.appendChild(createOption(k.id, k.nama_kategori));
        });
    } catch (error) {
        console.error('loadKategoriEvent Error:', error.message);
    }
}

// Tampilkan card ruangan
async function tampilkanListRuangan() {
    try {
        const response = await fetch('/api/ruangan');
        if (!response.ok) throw new Error('Gagal mengambil list ruangan');

        const ruangan = await response.json();
        const list = document.getElementById('ruangan-list');
        if (!list) return;

        list.innerHTML = '';

        ruangan.forEach(r => {
            const div = document.createElement('div');
            div.className = 'bg-white border border-blue-200 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col md:flex-row items-center';

            const image = r.gambar ?? 'default.jpg';
            const statusClass = r.status === 'available' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800';

            div.innerHTML = `
                <img src="/img/${image}" alt="${r.nama_ruangan}" class="w-32 h-24 object-cover rounded-lg mr-4 mb-2 md:mb-0">
                <div class="flex-1">
                    <h3 class="text-lg font-bold mb-1">${r.nama_ruangan}</h3>
                    <p class="mb-1"><strong>Kapasitas:</strong> ${r.kapasitas}</p>
                    <p class="mb-1"><strong>Fasilitas:</strong> ${r.fasilitas || '-'}</p>
                    <p class="mb-1"><strong>Lantai:</strong> ${r.lantai}</p>
                    <p class="mb-1"><strong>Status:</strong> 
                        <span class="inline-block px-2 py-1 rounded text-xs ${statusClass}">
                            ${r.status}
                        </span>
                    </p>
                </div>
            `;
            list.appendChild(div);
        });
    } catch (error) {
        console.error('tampilkanListRuangan Error:', error.message);
    }
}

// Load daftar booking
async function loadBooking() {
    try {
        const response = await fetch('/api/booking');
        if (!response.ok) throw new Error('Gagal mengambil data booking');

        const bookings = await response.json();
        const list = document.getElementById('list-booking');
        if (!list) return;

        list.innerHTML = '';

        bookings.forEach(booking => {
            const div = document.createElement('div');
            div.className = 'bg-gray-50 p-4 rounded-md';
            div.innerHTML = `
                <p class="font-semibold">Kode Booking: ${booking.kode_booking}</p>
                <p>Ruangan: ${booking.id_ruangan}</p>
                <p>Tanggal: ${new Date(booking.tanggal_mulai).toLocaleString()} - ${new Date(booking.tanggal_selesai).toLocaleString()}</p>
                <p>Status: ${booking.status}</p>
            `;
            list.appendChild(div);
        });
    } catch (error) {
        console.error('loadBooking Error:', error.message);
    }
}

// Navigasi dari Step 1 ke Step 2
document.getElementById('form-step-1')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const ruangan = document.getElementById('id_ruangan')?.value;
    const mulai = document.getElementById('tanggal_mulai')?.value;
    const selesai = document.getElementById('tanggal_selesai')?.value;

    if (!ruangan || !mulai || !selesai) {
        return alert('Lengkapi semua field pada Step 1!');
    }

    document.getElementById('id_ruangan_2').value = ruangan;
    document.getElementById('tanggal_mulai_2').value = mulai;
    document.getElementById('tanggal_selesai_2').value = selesai;

    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
});

// Submit booking dari Step 2
document.getElementById('form-step-2')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        id_ruangan: document.getElementById('id_ruangan_2')?.value,
        tanggal_mulai: document.getElementById('tanggal_mulai_2')?.value,
        tanggal_selesai: document.getElementById('tanggal_selesai_2')?.value,
        tujuan: document.getElementById('tujuan')?.value,
        jumlah_peserta: document.getElementById('jumlah_peserta')?.value,
        nama_event: document.getElementById('nama_event')?.value,
        kategori_event: document.getElementById('kategori_event')?.value,
        nama_pic: document.getElementById('nama_pic')?.value,
        no_pic: document.getElementById('no_pic')?.value,
        jenis_event: document.getElementById('jenis_event')?.value
    };

    // Validasi singkat
    if (!formData.nama_event || !formData.nama_pic || !formData.no_pic) {
        return alert('Pastikan semua field telah diisi!');
    }

    try {
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Gagal booking');

        const data = await response.json();
        alert('Booking berhasil! Kode: ' + data.kode_booking);

        loadBooking();
        document.getElementById('form-step-1').reset();
        document.getElementById('form-step-2').reset();
        document.getElementById('step-2').classList.add('hidden');
        document.getElementById('step-1').classList.remove('hidden');
    } catch (error) {
        console.error('Submit Booking Error:', error.message);
        alert('Gagal booking. Silakan coba lagi.');
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadRuangan();
    tampilkanListRuangan();
    loadBooking();
    loadKategoriEvent(); // tambahkan ini untuk load kategori event saat awal
});
