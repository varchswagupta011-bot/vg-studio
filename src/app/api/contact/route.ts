import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Email delivery system is not configured with an API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
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

    const recipient = process.env.CONTACT_EMAIL || "varchswagupta011@gmail.com";

    // Modern styled HTML email notification for VG STUDIO
    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F7F6F2; padding: 40px 20px; color: #080808;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #DAD9D3; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="border-bottom: 2px solid #080808; padding-bottom: 18px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h2 style="margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #080808;">VG STUDIO</h2>
                <span style="font-size: 11px; font-family: monospace; color: #777777; text-transform: uppercase;">New Project Inquiry Received</span>
              </div>
            </div>
          </div>

          <!-- Lead Details Table -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #777777; text-transform: uppercase; width: 140px;">Client Name</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: bold; color: #080808;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #777777; text-transform: uppercase;">Client Email</td>
              <td style="padding: 10px 0; font-size: 14px; color: #080808;">
                <a href="mailto:${email.trim()}" style="color: #080808; text-decoration: underline; font-weight: bold;">${email.trim()}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #777777; text-transform: uppercase;">Project Scope</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: bold; color: #080808;">${projectType || "General Web Project"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #777777; text-transform: uppercase;">Timestamp</td>
              <td style="padding: 10px 0; font-size: 12px; font-family: monospace; color: #777777;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="background-color: #F7F6F2; border: 1px solid #DAD9D3; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
            <span style="font-size: 11px; font-family: monospace; color: #777777; text-transform: uppercase; display: block; margin-bottom: 8px;">Project Objectives &amp; Details</span>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #222222; white-space: pre-wrap;">${message.trim()}</p>
          </div>

          <!-- Action Button -->
          <div style="text-align: center; margin-top: 10px;">
            <a href="mailto:${email.trim()}?subject=Re:%20VG%20STUDIO%20Project%20Inquiry%20(${encodeURIComponent(projectType || "Web Project")})" 
               style="display: inline-block; background-color: #080808; color: #FFFFFF; font-size: 13px; font-weight: bold; text-decoration: none; padding: 14px 28px; border-radius: 30px; letter-spacing: 0.5px; text-transform: uppercase;">
              Reply to Client Directly &rarr;
            </a>
          </div>

          <!-- Footer -->
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #EEEEEE; text-align: center; font-size: 11px; font-family: monospace; color: #999999;">
            VG STUDIO Notification • Dispatched via Resend API
          </div>
        </div>
      </div>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "VG STUDIO <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email.trim(),
      subject: `[VG STUDIO Inquiry] ${name.trim()} - ${projectType || "Project"}`,
      html: htmlEmail,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to dispatch email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been delivered directly to VG STUDIO. I will get back to you within 24 hours!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please reach out to varchswagupta011@gmail.com directly." },
      { status: 500 }
    );
  }
}
