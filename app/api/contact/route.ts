import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  groupSize?: string;
  preferredCity?: string;
  nationality?: string;
  contactPreference?: string;
  travelDates?: string;
  experiences?: string;
  padelLevel?: string;
  message?: string;
  comments?: string;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS").replace(/\s+/g, "");
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || smtpUser;
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || smtpUser;
    const fromName = process.env.CONTACT_FROM_NAME?.trim() || "Vibra Travel Website";
    const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = (process.env.SMTP_SECURE ?? "true") !== "false";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${body.phone?.trim() || "-"}`,
      `Group size: ${body.groupSize?.trim() || "-"}`,
      `Preferred city: ${body.preferredCity?.trim() || "-"}`,
      `Nationality: ${body.nationality?.trim() || "-"}`,
      `Contact preference: ${body.contactPreference?.trim() || "-"}`,
      `Travel dates: ${body.travelDates?.trim() || "-"}`,
      `Experiences: ${body.experiences?.trim() || "-"}`,
      `Padel level: ${body.padelLevel?.trim() || "-"}`,
      "",
      "Message:",
      message,
      body.comments?.trim() ? `\nComments:\n${body.comments.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New trip enquiry from ${name}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 },
    );
  }
}
