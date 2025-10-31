import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Cek environment variables
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        console.log("Supabase URL:", supabaseUrl);
        console.log("Supabase Key exists:", !!supabaseKey);
        console.log("Supabase Key length:", supabaseKey?.length);

        if (!supabaseUrl || !supabaseKey) {
            return NextResponse.json({
                success: false,
                error: "Environment variables tidak ditemukan",
                details: {
                    hasUrl: !!supabaseUrl,
                    hasKey: !!supabaseKey,
                },
            });
        }

        // Test import supabase
        const { supabase } = await import("@/lib/supabase");

        // Test koneksi ke database
        const { data, error } = await supabase.from("contacts").select("count").limit(1);

        if (error) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Supabase connection error",
                    details: error,
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Semua konfigurasi OK!",
            supabaseUrl,
            keyLength: supabaseKey.length,
        });
    } catch (error) {
        console.error("Test error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Test failed",
                details: (error as Error).message,
            },
            { status: 500 }
        );
    }
}
