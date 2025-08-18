/* =======================
   KONFIGURASI
   - slots: mapping slot -> daftar petugas
   - APPS_SCRIPT_URL: endpoint Web App (1 spreadsheet untuk semua jam)
   Apps Script akan memakai nama sheet = nama slot (otomatis bikin kalau belum ada).
======================= */
const CONFIG = {
  APPS_SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbzWirahkYpYb1i8OXAhcR0P59YTHWlxHgVOz8diWle1x8sWtPvYyW9uYEKdW55KDzDaRA/exec", // ex: https://script.google.com/macros/s/AKfyc.../exec
  slots: {
    "Kelas 1 Wustho A": [
      "Ahad 1 - Ust. Anwar",
      "Ahad 2 - Ust. Anwar",
      "Senin 1 - Novia",
      "Senin 2 - Najma",
      "Selasa 1 - Sevira",
      "Selasa 2 - Ust. Budi",
      "Rabu 1 - Najma",
      "Rabu 2 - Ust. Anwar",
      "Kamis - Noviya",
      "Jumat - Ust. Anwar",
      "Sabtu 1 - U. May",
      "Sabtu 2 - U. Anwar",
    ],
    "Kelas 1 Wustho B": [
      "Ahad 1 - U. Novi",
      "Ahad 2 - U. Khus",
      "Senin 1 - U. Sep",
      "Senin 2 - U. Anwar",
      "Selasa 1 - U. Nopi",
      "Selasa 2 - U. Khus",
      "Rabu 1 - U. Nopi",
      "Rabu 2 - U. Budi",
      "Kamis - U. May",
      "Jumat - U. Khus",
      "Sabtu 1 - U. Nopi",
      "Sabtu 2 - U. Khus",
    ],
    "Kelas 1 Wustho C": [
      "Ahad 1 - U. May",
      "Ahad 2 - U. Kana",
      "Senin 1 - U. Budi",
      "Senin 2 - U. Budi",
      "Selasa 1 - U. Najma",
      "Selasa 2 - U. Anwaar",
      "Rabu 1 - U. Budi",
      "Rabu 2 - U. Sep",
      "Kamis - U. Budi",
      "Jumat - U. Najma",
      "Sabtu 1 - U. Budi",
      "Sabtu 2 - U. Kana",
    ],
    "Kelas 1 Wustho D": [
      "Ahad 1 - U. Diki",
      "Ahad 2 - U. Udin",
      "Senin 1 - U. Diki",
      "Senin 2 - U. Tamam",
      "Selasa 1 - U. Kainul",
      "Selasa 2 - U. Naufal",
      "Rabu 1 - U. Udin",
      "Rabu 2 - U. patir",
      "Kamis - U. dIKI",
      "Jumat - U. Patir",
      "Sabtu 1 - U. Diki",
      "Sabtu 2 - U. Diki",
    ],
    "Kelas 1 Wustho E": [
      "Ahad 1 - U. Pater",
      "Ahad 2 - U. Makmur",
      "Senin 1 - U. Udin",
      "Senin 2 - U. Makmur",
      "Selasa 1 - U. Udin",
      "Selasa 2 - U. MAkmur",
      "Rabu 1 - U. Diki",
      "Rabu 2 - U. Makmur",
      "Kamis - U. Naufal",
      "Jumat - U. Kain",
      "Sabtu 1 - U. Fatir",
      "Sabtu 2 - U. Tamam",
    ],
    "Kelas 1 Wustho F": [
      "Ahad 1 - U. Tamam",
      "Ahad 2 - U. Pater",
      "Senin 1 - U. Agus",
      "Senin 2 - U. Kain",
      "Selasa 1 - U. Patir",
      "Selasa 2 - U. Agus",
      "Rabu 1 - U. agus",
      "Rabu 2 - U. Udin",
      "Kamis - U. Agus",
      "Jumat - U. Diki",
      "Sabtu 1 - U. Udin",
      "Sabtu 2 - U. Nopal",
    ],
    "Kelas 2 Wustho A": [
      "Ahad 1 - U. Salma",
      "Ahad 2 - U. Isna",
      "Senin 1 - U. Haya",
      "Senin 2 - U. Aliya",
      "Selasa 1 - U. Haya",
      "Selasa 2 - U. Ani",
      "Rabu 1 - U. Haya",
      "Rabu 2 - U. Ani",
      "Kamis - U. Haya",
      "Jumat - U. Ani",
      "Sabtu 1 - U. Adinda",
      "Sabtu 2 - U. wapiq",
    ],
    "Kelas 2 Wustho B": [
      "Ahad 1 - U. Arifa",
      "Ahad 2 - U. Arifa",
      "Senin 1 - U. aLIYA",
      "Senin 2 - U. Arifa",
      "Selasa 1 - U. Zaki",
      "Selasa 2 - U. Zaki",
      "Rabu 1 - U. Zaki",
      "Rabu 2 - U. Isna",
      "Kamis - U. Adinda",
      "Jumat - U. Arifa",
      "Sabtu 1 - U. Wapiq",
      "Sabtu 2 - U. salma",
    ],
    "Kelas 2 Wustho C": [
      "Ahad 1 - U. Herlina",
      "Ahad 2 - U. Herlina",
      "Senin 1 - U. Wapiq",
      "Senin 2 - U. Isna",
      "Selasa 1 - U. Sito",
      "Selasa 2 - U. Adinda",
      "Rabu 1 - U. Sito",
      "Rabu 2 - U. Aliya",
      "Kamis - U. Herlina",
      "Jumat - U. SAlma",
      "Sabtu 1 - U. Sito",
      "Sabtu 2 - U. Sitio",
    ],
    "Kelas 2 Wustho D": [
      "Ahad 1 - U. Ori",
      "Ahad 2 - U. Tamam",
      "Senin 1 - U. BAyu",
      "Senin 2 - U. Apip",
      "Selasa 1 - U. Tamam",
      "Selasa 2 - U. TAmam",
      "Rabu 1 - U. Bayu",
      "Rabu 2 - U. {Purwoko}",
      "Kamis - U. Hisyam",
      "Jumat - U. Imron R",
      "Sabtu 1 - U. Tamam",
      "Sabtu 2 - U. Bayu",
    ],
    "Kelas 2 Wustho E": [
      "Ahad 1 - U. Robit",
      "Ahad 2 - U. Imron R",
      "Senin 1 - U. Ori",
      "Senin 2 - U. Purwoko",
      "Selasa 1 - U. Bit",
      "Selasa 2 - U. Apip",
      "Rabu 1 - U. Rop",
      "Rabu 2 - U. Ori",
      "Kamis - U. Ori",
      "Jumat - U. Ori",
      "Sabtu 1 - U. Hisyam",
      "Sabtu 2 - U. Ori",
    ],
    "Kelas 3 Wustho A": [
      "Ahad 1 - U. Hani",
      "Ahad 2 - U. NAdia",
      "Senin 1 - U. Muyas",
      "Senin 2 - U. Muyas",
      "Selasa 1 - U. Muyas",
      "Selasa 2 - U. Mahbub",
      "Rabu 1 - U. Sopi",
      "Rabu 2 - U. SAifudin",
      "Kamis - U. Sopi",
      "Jumat - U. HAni",
      "Sabtu 1 - U. NAdia",
      "Sabtu 2 - U. HAni",
    ],
    "Kelas 3 Wustho B": [
      "Ahad 1 - U. Sopi",
      "Ahad 2 - U. SAlma",
      "Senin 1 - U. NAnang",
      "Senin 2 - U. Saifudin",
      "Selasa 1 - U. Nadia",
      "Selasa 2 - U. Nanang",
      "Rabu 1 - U. SAlma",
      "Rabu 2 - U. Sopi",
      "Kamis - U. Nanang",
      "Jumat - U. Mahbub",
      "Sabtu 1 - U. SAlma",
      "Sabtu 2 - U. Nadia",
    ],
    "Kelas 3 Wustho C": [
      "Ahad 1 - U. Bain",
      "Ahad 2 - U. BAin",
      "Senin 1 - U. KAin",
      "Senin 2 - U. Bain",
      "Selasa 1 - U. nanang",
      "Selasa 2 - U. Soim",
      "Rabu 1 - U. Bima",
      "Rabu 2 - U. KAin",
      "Kamis - U. Kain",
      "Jumat - U. Bima",
      "Sabtu 1 - U. Soim",
      "Sabtu 2 - U. Am",
    ],
    "Kelas 3 Wustho D": [
      "Ahad 1 - U. Ardan",
      "Ahad 2 - U. Soim",
      "Senin 1 - U. Rosid",
      "Senin 2 - U. Rosid",
      "Selasa 1 - U. Aqwam",
      "Selasa 2 - U. Ardan",
      "Rabu 1 - U. Rosid",
      "Rabu 2 - U. Nanang",
      "Kamis - U. Soim",
      "Jumat - U. Aqwam",
      "Sabtu 1 - U. Am",
      "Sabtu 2 - U. Aqwam",
    ],
    "Kelas 1 Ulya A": [
      "Ahad 1 - U. Fida",
      "Ahad 2 - Kh. Rikhan",
      "Senin 1 - U. Im I",
      "Senin 2 - U. Fida",
      "Selasa 1 - U. Im I",
      "Selasa 2 - U. Imam",
      "Rabu 1 - U. Fida",
      "Rabu 2 - U. Im I",
      "Kamis - G Syarif",
      "Jumat - U. Fida",
      "Sabtu 1 - U. Ip",
      "Sabtu 2 - G. Syarif",
    ],
    "Kelas 1 Ulya B": [
      "Ahad 1 - KH. Rikhan",
      "Ahad 2 - U. Hamid",
      "Senin 1 - U. Jufri",
      "Senin 2 - U. Jufri",
      "Selasa 1 - U. Hamid",
      "Selasa 2 - U. Hamid",
      "Rabu 1 - U. Zupri",
      "Rabu 2 - Gus Syarif",
      "Kamis - U. Ip",
      "Jumat - G. Syarif",
      "Sabtu 1 - U. Hamid",
      "Sabtu 2 - U. Imam",
    ],
    "Kelas 2 Ulya A": [
      "Ahad 1 - U. Mahbub",
      "Ahad 2 - U. Mahbub",
      "Senin 1 - KH. Mizan",
      "Senin 2 - U. Agung",
      "Selasa 1 - U. Mahbub",
      "Selasa 2 - U. Agung",
      "Rabu 1 - G. Syarif",
      "Rabu 2 - U. Mahbub",
      "Kamis - U. Abdur",
      "Jumat - U. Agung",
      "Sabtu 1 - U. Agung",
      "Sabtu 2 - KH. Rikhan",
    ],
    "Kelas 2 Ulya B": [
      "Ahad 1 - U. Baron",
      "Ahad 2 - U. Baron",
      "Senin 1 - KH. Mizan",
      "Senin 2 - U. BAron",
      "Selasa 1 - U. Abdur",
      "Selasa 2 - U. Abdur",
      "Rabu 1 - U. Soim",
      "Rabu 2 - U. Abdur",
      "Kamis - U. Baron",
      "Jumat - U. Abdur",
      "Sabtu 1 - KH. Rikhan",
      "Sabtu 2 - U. Abdur",
    ],
    "Kelas 3 Ulya": [
      "Ahad 1 - U. Hisyam",
      "Ahad 2 - U. Hisyam",
      "Senin 1 - U. SAm",
      "Senin 2 - U. Budi J",
      "Selasa 1 - U. SAm",
      "Selasa 2 - U. Baron",
      "Rabu 1 - U. Hisyam",
      "Rabu 2 - U. Muchtim",
      "Kamis - KH. Mizan",
      "Jumat - U. Hisyam",
      "Sabtu 1 - U. Muchtim",
      "Sabtu 2 - U. Baron",
    ],
    // tambahkan slot lain di sini...
  },
};

/* =======================
   INIT UI
======================= */
const $ = (q) => document.querySelector(q);
const slotSel = $("#slot");
const bulanEl = $("#bulan");
const petugasWrap = $("#petugasContainer");
const form = $("#absenForm");
const statusMsg = $("#statusMsg");
const resetBtn = $("#resetBtn");

// isi tanggal default = hari ini (Asia/Jakarta approx)
(function setThisMonth() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  bulanEl.value = local.toISOString().slice(0, 7); // format YYYY-MM
})();

// isi dropdown slot
Object.keys(CONFIG.slots).forEach((s) => {
  const opt = document.createElement("option");
  opt.value = s;
  opt.textContent = s;
  slotSel.appendChild(opt);
});

// render daftar petugas sesuai slot
slotSel.addEventListener("change", renderPetugas);

function renderPetugas() {
  petugasWrap.innerHTML = "";
  const slot = slotSel.value;
  const list = CONFIG.slots[slot] || [];
  if (!slot || list.length === 0) return;

  const table = document.createElement("table");
  table.className = "table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nama Petugas</th>
        <th>Kehadiran</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  list.forEach((nama, idx) => {
    const row = document.createElement("tr");

    // buat id unik
    const safe = slug(`${nama}-${idx}`);

    // kolom nama
    const tdNama = document.createElement("td");
    tdNama.innerHTML = `<span class="td-label"></span><strong>${nama}</strong>`;

    // kolom kehadiran (chip radio)
    const tdKehadiran = document.createElement("td");
    tdKehadiran.innerHTML = `
      <span class="td-label"></span>
      <div class="chips" role="group" aria-label="Kehadiran ${nama}">
        <label class="chip"><input type="radio" name="status-${safe}" value="Hadir" required> Hadir</label>
        <label class="chip"><input type="radio" name="status-${safe}" value="Tidak Hadir" required> Tidak Hadir</label>
      </div>
    `;

    // kolom keterangan (kotak)
    const tdKet = document.createElement("td");
    tdKet.innerHTML = `
      <span class="td-label"></span>
      <textarea class="note" name="ket-${safe}" placeholder="Catatan (opsional)"></textarea>
    `;

    row.appendChild(tdNama);
    row.appendChild(tdKehadiran);
    row.appendChild(tdKet);

    tbody.appendChild(row);
  });

  petugasWrap.appendChild(table);

  // binder chip visual
  petugasWrap.querySelectorAll(".chips").forEach((group) => {
    group.querySelectorAll(".chip").forEach((chip) => {
      const input = chip.querySelector("input");
      chip.addEventListener("click", () => {
        group
          .querySelectorAll(".chip")
          .forEach((c) => (c.dataset.checked = false));
        input.checked = true;
        chip.dataset.checked = true;
      });
    });
  });
}

// reset
resetBtn.addEventListener("click", () => {
  form.reset();
  petugasWrap.innerHTML = "";
  slotSel.value = "";
  status("Form dibersihkan.");
});

// submit ke Apps Script
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const slot = slotSel.value;
  const bulan = bulanEl.value;
  if (!slot) {
    status("Pilih slot dulu ya.", false);
    return;
  }
  if (!bulan) {
    status("Bulan belum diisi.", false);
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> Mengirim...';

  const petugas = (CONFIG.slots[slot] || []).map((nama, idx) => {
    const safe = slug(`${nama}-${idx}`);
    const statusVal =
      form.querySelector(`input[name="status-${safe}"]:checked`)?.value || "";
    const ketVal =
      form.querySelector(`textarea[name="ket-${safe}"]`)?.value || "";
    return { nama, status: statusVal, keterangan: ketVal };
  });

  // validasi minimal semua punya status
  if (petugas.some((p) => !p.status)) {
    status("Masih ada petugas yang belum dipilih statusnya.", false);
    return;
  }

  const payload = { slot, bulan, petugas };
  try {
    await fetch(CONFIG.APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    status("✅ Absensi terkirim. Cek Sheet kamu.");
    form.reset();
    petugasWrap.innerHTML = "";
    slotSel.value = "";
  } catch (err) {
    console.error(err);
    status("❌ Gagal kirim. Cek koneksi atau URL Apps Script.", false);
  }
  submitBtn.disabled = false;
  submitBtn.textContent = "Kirim Absensi";
});

/* =======================
   HELPERS
======================= */
function status(msg, ok = true) {
  statusMsg.textContent = msg;
  statusMsg.style.color = ok ? "var(--g-600)" : "#c62828";
}
function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/*
=== FORMAT PAYLOAD KE APPS SCRIPT ===
{
  slot: "Senin - Jam 1",
  tanggal: "2025-08-13",
  petugas: [
    { nama: "Ari",  status: "Hadir",       keterangan: "" },
    { nama: "Bima", status: "Tidak Hadir", keterangan: "Sakit" }
  ]
}
*/
const SPREADSHEET_ID = "18cGRzPaUdZBZfc1hRVOC_OrlUYbzPbcxEDIEo1yi938";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheetName = data.slot; // 1 tab per slot
  const sh = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

  // header kalau sheet masih kosong
  if (sh.getLastRow() === 0) {
    sh.appendRow([
      "Timestamp",
      "Bulan",
      "Nama Petugas",
      "Status",
      "Keterangan",
    ]);
  }

  const ts = Utilities.formatDate(
    new Date(),
    "Asia/Jakarta",
    "yyyy-MM-dd HH:mm:ss"
  );

  // masukkan semua baris petugas
  data.petugas.forEach((p) => {
    sh.appendRow([ts, data.bulan, p.nama, p.status, p.keterangan || ""]);
  });

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
