import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validasi input
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
        }

        // Validasi email sederhana
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 });
        }

        // Simpan ke Supabase
        const { data, error } = await supabase.from("contacts").insert([{ name, email, message }]).select();

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 500 });
        }

        return NextResponse.json({ message: "Pesan berhasil dikirim!", data }, { status: 200 });
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
    }
}
