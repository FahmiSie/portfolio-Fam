import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    // Menginisialisasi Resend di dalam fungsi agar tidak crash saat build di Vercel
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Mengambil data yang dikirim dari form frontend
    const { name, email, message } = await req.json();

    // Validasi sederhana
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tolong lengkapi semua field.' },
        { status: 400 }
      );
    }

    // Mengirim email menggunakan Resend
    const { data, error } = await resend.emails.send({
      // "onboarding@resend.dev" adalah domain bawaan Resend untuk testing. Jangan diubah.
      from: 'Portfolio Form <onboarding@resend.dev>', 
      
      // PENTING: Ganti dengan alamat email yang Anda gunakan untuk mendaftar di Resend!
      to: 'fahmiaqila.m0@gmail.com', 
      
      subject: `Pesan Baru dari ${name} di Portfolio`,
      replyTo: email, // Agar Anda bisa langsung membalas ke email pengirim
      html: `
        <h2>Anda mendapat pesan baru!</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses permintaan.' },
      { status: 500 }
    );
  }
}
