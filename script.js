/* =======================
   KONFIGURASI
   - slots: mapping slot -> daftar petugas
   - APPS_SCRIPT_URL: endpoint Web App (1 spreadsheet untuk semua jam)
   Apps Script akan memakai nama sheet = nama slot (otomatis bikin kalau belum ada).
======================= */
const CONFIG = {
  APPS_SCRIPT_URL: "PASTE_WEB_APP_URL_DI_SINI", // ex: https://script.google.com/macros/s/AKfyc.../exec
  slots: {
    "Senin - Jam 1": [
      "1 Wustho A - Ustd. Noviya",
      "1 Wustho B - Ustd. Sevira",
      "1 Wustho C - Ust. Budi",
      "1 Wustho D - Ust. Diki",
      "1 Wustho E - Ust. Izzuddin",
      "1 Wustho F - Ust. Agus",
      "2 Wustho A - Ustd. Haya",
      "2 Wustho B - Ustd. Aliya",
      "2 Wustho C - Ustd. Wafiq",
      "2 Wustho D - Ust. Bayu",
      "2 Wustho E - Ust. Oryzaki",
    ],
    "Senin - Jam 2": ["Sinta", "Dina"],
    "Selasa - Jam 1": ["Tara", "Bagas"],
    "Selasa - Jam 2": ["Raka", "Lia"],
    // tambahkan slot lain di sini...
  },
};

/* =======================
   INIT UI
======================= */
const $ = (q) => document.querySelector(q);
const slotSel = $("#slot");
const tanggalEl = $("#tanggal");
const petugasWrap = $("#petugasContainer");
const form = $("#absenForm");
const statusMsg = $("#statusMsg");
const resetBtn = $("#resetBtn");

// isi tanggal default = hari ini (Asia/Jakarta approx)
(function setToday() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  tanggalEl.value = local.toISOString().slice(0, 10);
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
  const tanggal = tanggalEl.value;
  if (!slot) {
    status("Pilih slot dulu ya.", false);
    return;
  }
  if (!tanggal) {
    status("Tanggal belum diisi.", false);
    return;
  }

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

  const payload = { slot, tanggal, petugas };
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

=== APPS SCRIPT (contoh ringkas) ===
const SPREADSHEET_ID = "PASTE_SPREADSHEET_ID_DI_SINI";
function doPost(e){
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheetName = data.slot; // 1 tab per jam
  const sh = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  if (sh.getLastRow() === 0){
    sh.appendRow(["Timestamp","Tanggal","Nama Petugas","Status","Keterangan"]);
  }
  const ts = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");
  data.petugas.forEach(p=>{
    sh.appendRow([ts, data.tanggal, p.nama, p.status, p.keterangan || ""]);
  });
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
