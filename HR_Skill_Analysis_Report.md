# Laporan Analisis Technical Skill Portofolio (HR Perspective)

**Tanggal:** 27 Agustus 2026
**Tujuan:** Analisis efektivitas dan relevansi tampilan skill teknis pada website portofolio dari sudut pandang HR / Technical Recruiter.

---

## 1. Pendahuluan
Secara keseluruhan, portofolio Anda sudah menampilkan spektrum teknologi yang sangat luas dan modern, mencakup Frontend, Backend, AI, Cloud, hingga Desktop. Ini menunjukkan Anda adalah seorang *Full Stack Developer* yang proaktif dan terus mengikuti perkembangan teknologi (seperti AI dan Cloud).

Namun, ada beberapa elemen dalam daftar skill (terutama pada halaman `/skills`) yang **tidak perlu ditampilkan** atau **perlu direvisi** agar portofolio Anda terlihat lebih profesional, terukur, dan tidak *redundant* di mata *Tech Recruiter* atau *Engineering Manager*.

---

## 2. Analisis: Apa yang Tidak Perlu Ditampilkan & Mengapa

Berikut adalah hal-hal yang sebaiknya **dihapus atau disesuaikan** dari halaman portofolio Anda:

### A. Indikator Persentase (Progress Bar) pada Skill
- **Konteks:** Menampilkan React (90%), Tailwind CSS (95%), Python (85%), dll.
- **Alasan:** Indikator persentase sangat **subjektif dan tidak memiliki standar ukur yang jelas**. Di mata HR atau User (Tech Lead), persentase 90% bagi Anda mungkin setara dengan 50% bagi standar perusahaan mereka. Selain itu, memberikan nilai seperti 70% pada Java bisa memberi kesan bahwa Anda "kurang percaya diri" atau "setengah-setengah" di teknologi tersebut.
- **Rekomendasi:** Hapus *progress bar* atau persentase. Cukup tampilkan daftar teknologi yang Anda kuasai. Biarkan proyek-proyek Anda yang membuktikan seberapa mahir Anda dalam teknologi tersebut.

### B. Pengulangan (Redundansi) Bahasa Pemrograman
- **Konteks:** `TypeScript`, `JavaScript`, dan `C#` muncul di kategori "Frontend", "Desktop", sekaligus di kategori "Languages".
- **Alasan:** Mengulang skill yang sama di beberapa kategori hanya menghabiskan ruang dan membuat daftar terlihat membengkak tanpa nilai tambah.
- **Rekomendasi:** Hapus kategori "Languages" sama sekali jika bahasa tersebut sudah terwakili di kategori spesifik (Frontend/Backend/Desktop). Alternatifnya, kumpulkan semua bahasa di "Languages", lalu di "Frontend/Backend" fokus saja pada Framework dan *Library* (seperti React, NestJS, Next.js).

### C. Basic Tools (Alat Dasar Pengembangan)
- **Konteks:** Menampilkan `VS Code` dan `Prisma Studio`.
- **Alasan:** Sebagai seorang Software Engineer, mampu menggunakan *code editor* seperti VS Code atau melihat database UI melalui Prisma Studio adalah **hal yang sudah sangat diasumsikan (bare minimum)**. Menuliskan ini justru terkadang menurunkan kesan "Senioritas" atau profesionalitas dari skill lain yang jauh lebih kompleks (seperti AWS atau Docker).
- **Rekomendasi:** Hapus `VS Code` dan `Prisma Studio`. Tetap pertahankan tools yang berkaitan dengan kolaborasi, infrastruktur, atau CI/CD seperti `Git`, `GitHub`, `Postman`, `Docker`, dan `AWS`.

### D. Skill Konseptual / Arsitektural sebagai "Daftar Skill"
- **Konteks:** Menulis `JWT Auth`, `RBAC`, dan `REST API` sebagai *skill badges*.
- **Alasan:** Ini adalah konsep, standar, atau pola arsitektur, bukan "teknologi/alat" spesifik. Semua Backend Developer diharapkan memahami REST API dan otentikasi (seperti JWT).
- **Rekomendasi:** Daripada menjadikannya *badge* di halaman skills, jauh lebih kuat efeknya jika Anda memasukkan kata kunci ini di dalam **deskripsi pengalaman kerja atau studi kasus proyek** Anda (misalnya: *"Membangun sistem autentikasi yang aman menggunakan JWT dan RBAC pada NestJS"*).

### E. Tools Non-Programming di Kategori AI & Automation
- **Konteks:** Menulis `Google Workspace`.
- **Alasan:** Penggunaan Google Workspace (Docs, Sheets, Drive) umumnya bukan dianggap sebagai skill *Software Engineering*.
- **Rekomendasi:** Kecuali yang Anda maksud adalah **Google Apps Script (GAS)** atau integrasi **Google Workspace APIs** untuk otomatisasi (yang mana merupakan skill teknis bagus), sebaiknya spesifikkan namanya. Jika hanya penggunaan *end-user*, sebaiknya dihapus.

---

## 3. Kesimpulan & Rekomendasi Eksekusi

Agar portofolio Anda lebih tajam dan disukai oleh rekruter teknis, Anda disarankan untuk melakukan revisi pada file `/app/skills/page.tsx`:

1. **Hapus visualisasi level (persentase & bar chart)**, ubah menjadi bentuk *grid* logo atau tag/chip sederhana yang bersih.
2. **Bersihkan duplikasi** agar satu teknologi (seperti TypeScript) hanya muncul sekali.
3. **Filter *skill* Anda.** Fokus pada bahasa pemrograman utama, framework, database, cloud/devops, dan tools spesifik (Docker, Git). Hapus VS Code, JWT, dan RBAC dari *badge list*.

Dengan pemangkasan ini, portofolio Anda akan terlihat lebih rapi, fokus, tidak bertele-tele, dan secara langsung menonjolkan keahlian *engineering* Anda yang sebenarnya.
