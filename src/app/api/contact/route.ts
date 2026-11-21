import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please share a brief project summary (at least 10 characters)." },
        { status: 400 }
      );
    }

    // In production with Resend/SendGrid/SMTP:
    // e.g. await resend.emails.send(...)
    // For now, log the submission securely on server:
    console.log("[VG STUDIO INQUIRY]", {
      name: name.trim(),
      email: email.trim(),
      projectType: projectType || "General Web Project",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project inquiry has been received. I will review it and get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please reach out directly via email." },
      { status: 500 }
    );
  }
}
