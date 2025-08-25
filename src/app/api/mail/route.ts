import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Same schema as your form
const ContactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  website: z.string().url().optional(),
  inquiry: z.string().min(20),
});

// ---------- Transport (Gmail App Password) ----------
function getTransport() {
  const user = process.env.EMAIL;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    throw new Error("Email credentials are missing in env.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

// ---------- Shared styling ----------
const brand = {
  bg: "#101a23",
  panel: "#182634",
  text: "#90adcb",
  heading: "#ffffff",
  primary: "#1b88f8",
  border: "#314d68",
};

function wrapHTML(content: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Panielix Solutions</title>
  </head>
  <body style="margin:0;background:${brand.bg};font-family:Inter,Arial,sans-serif;color:${brand.text};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.bg};padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:${brand.panel};border:1px solid ${brand.border};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:28px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:32px;height:32px;color:${brand.primary}">▲</div>
                  <h1 style="margin:0;font-size:18px;color:${brand.heading};font-weight:800;">Panielix Solutions</h1>
                </div>
                ${content}
                <div style="margin-top:28px;padding-top:18px;border-top:1px solid ${brand.border};font-size:12px;opacity:.85">
                  © ${new Date().getFullYear()} Panielix Solutions — All rights reserved.
                </div>
              </td>
            </tr>
          </table>
          <div style="margin-top:10px;font-size:12px;color:${brand.text};opacity:.7">This is an automated message.</div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// ---------- Templates ----------
function ownerEmailHTML(data: z.infer<typeof ContactSchema>) {
  return wrapHTML(`
    <h2 style="margin:18px 0 6px;color:${brand.heading};font-size:22px;font-weight:800;">New Inquiry Received</h2>
    <p style="margin:0 0 14px;">A new lead submitted the contact form:</p>

    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:separate;border-spacing:0 8px;">
      <tr>
        <td style="width:160px;color:${brand.text};opacity:.85;">Name</td>
        <td style="color:${brand.heading};font-weight:600;">${data.fullName}</td>
      </tr>
      <tr>
        <td style="color:${brand.text};opacity:.85;">Email</td>
        <td style="color:${brand.heading};font-weight:600;">${data.email}</td>
      </tr>
      ${data.website
      ? `<tr>
              <td style="color:${brand.text};opacity:.85;">Website</td>
              <td style="color:${brand.heading};font-weight:600;">
                <a href="${data.website}" style="color:${brand.primary};text-decoration:none;">${data.website}</a>
              </td>
            </tr>`
      : ""
    }
    </table>

    <div style="margin-top:16px;padding:14px;border:1px solid ${brand.border};border-radius:10px;background:#0f1722;">
      <div style="color:${brand.text};opacity:.85;margin-bottom:6px;">Inquiry</div>
      <div style="white-space:pre-wrap;color:${brand.heading};line-height:1.6;">${data.inquiry}</div>
    </div>

    <a href="mailto:${data.email}" style="display:inline-block;margin-top:18px;background:${brand.primary};color:#fff;padding:12px 18px;border-radius:10px;font-weight:700;text-decoration:none;">
      Reply to ${data.fullName}
    </a>
  `);
}

function customerEmailHTML(fullName: string) {
  return wrapHTML(`
    <h2 style="margin:18px 0 6px;color:${brand.heading};font-size:22px;font-weight:800;">
      Thank you, ${fullName}!
    </h2>
    <p style="margin:0 0 10px;">
      We’ve received your message and our team is reviewing it now.
    </p>
    <p style="margin:0 0 14px;">
      We’ll reach out shortly, or propose a convenient time to talk through your goals and next steps.
    </p>

    <a href="https://www.panielix.com#packages"
       style="display:inline-block;margin-top:14px;background:${brand.primary};color:#fff;padding:12px 18px;border-radius:10px;font-weight:700;text-decoration:none;">
      Explore Solutions
    </a>

    <div style="margin-top:16px;padding:12px;border:1px solid ${brand.border};border-radius:10px;background:#0f1722;">
      <div style="font-weight:700;color:${brand.heading};margin-bottom:6px;">What happens next?</div>
      <ol style="margin:0;padding-left:18px;line-height:1.6;">
        <li>We review your inquiry.</li>
        <li>We follow up with clarifying questions or a proposed meeting time.</li>
        <li>We share a tailored plan to reach your objectives.</li>
      </ol>
    </div>

    <p style="margin-top:16px;">If you need anything meanwhile, just reply to this email.</p>
  `);
}

// ---------- Senders ----------
async function sendOwnerEmail(data: z.infer<typeof ContactSchema>) {
  const transporter = getTransport();
  const from = process.env.EMAIL!;
  await transporter.sendMail({
    from: `"Panielix Solutions" <${from}>`,
    to: from, // send to yourself
    subject: `New Inquiry — ${data.fullName}`,
    replyTo: data.email,
    html: ownerEmailHTML(data),
  });
}

async function sendCustomerConfirmation(fullName: string, toEmail: string) {
  const transporter = getTransport();
  const from = process.env.EMAIL!;
  await transporter.sendMail({
    from: `"Panielix Solutions" <${from}>`,
    to: toEmail,
    subject: "We received your inquiry — Panielix Solutions",
    html: customerEmailHTML(fullName),
  });
}

// ---------- Route ----------
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    const data = parsed.data;

    // Send to you first (fail fast if SMTP is broken)
    await sendOwnerEmail(data);

    // Fire-and-forget confirmation (don’t block response)
    sendCustomerConfirmation(data.fullName, data.email).catch(console.error);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
