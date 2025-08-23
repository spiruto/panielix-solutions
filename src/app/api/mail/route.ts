import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// IMPORTANT: SMTP requires the Node.js runtime, not Edge
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const allowedDomain = "https://www.panielix.com";
    const allowedDomain2 = "https://panielix.com";
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    if (!origin.startsWith(allowedDomain) || !origin.startsWith(allowedDomain2) && !referer.startsWith(allowedDomain) || !referer.startsWith(allowedDomain2)) {
      return new Response("Forbidden", { status: 403 });
    }
    const { fullName, email, website, inquiry } = await req.json();
    if (!fullName ||
      !email ||
      !inquiry) {
      throw new Error("Data Incomplete")
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,         // or 587 with secure: false
      secure: true,      // true for 465, false for 587
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"My App" <${process.env.NEXT_PUBLIC_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_EMAIL,                 // send to yourself
      subject: "You have received a new Contact Mail",
      text: inquiry,
      html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Lead — Panielix Solutions</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Preheader (hidden in most clients) -->
  <style>
    @media (max-width:600px){
      .container{width:100% !important}
      .px{padding-left:20px !important;padding-right:20px !important}
      .h1{font-size:24px !important;line-height:32px !important}
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#101a23;">
  <!-- Preheader text -->
  <div style="display:none;visibility:hidden;opacity:0;overflow:hidden;height:0;width:0;color:transparent;">
    New website inquiry from ${fullName} — Panielix Solutions
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#101a23;">
    <tr>
      <td align="center" style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px;max-width:600px;background:#182634;border:1px solid #223649;border-radius:14px;overflow:hidden;">
          <!-- Accent bar -->
          <tr>
            <td style="height:6px;background:#1b88f8;line-height:6px;font-size:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="px" style="padding:28px 28px 0 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left">
                    <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#90adcb;">
                      Panielix Solutions
                    </div>
                    <div class="h1" style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-weight:800;font-size:28px;line-height:36px;color:#ffffff;margin-top:6px;">
                      New Contact Inquiry
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td class="px" style="padding:14px 28px 0 28px;">
              <p style="margin:0;font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:16px;line-height:24px;color:#dbe7f4;">
                You’ve received a new lead from your website contact form. Here are the details:
              </p>
            </td>
          </tr>

          <!-- Lead card -->
          <tr>
            <td class="px" style="padding:20px 28px 0 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#223649;border:1px solid #314d68;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <!-- Name -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:120px;vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:13px;line-height:18px;color:#90adcb;">Full Name</div>
                        </td>
                        <td style="vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;color:#ffffff;font-weight:600;">
                            ${fullName}
                          </div>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td style="width:120px;vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:13px;line-height:18px;color:#90adcb;">Email</div>
                        </td>
                        <td style="vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;">
                            <a href="mailto:${email}" style="color:#46aaff;text-decoration:none;">${email}</a>
                          </div>
                        </td>
                      </tr>

                      <!-- Website (optional) -->
                      <!-- Remove this row entirely if website is not provided -->
                      ${website ? `
                      <tr>
                        <td style="width:120px;vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:13px;line-height:18px;color:#90adcb;">Website</div>
                        </td>
                        <td style="vertical-align:top;padding:6px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;">
                            <a href="${website}" style="color:#46aaff;text-decoration:none;" target="_blank" rel="noopener">${website}</a>
                          </div>
                        </td>
                      </tr>`: ""}

                      <!-- Inquiry -->
                      <tr>
                        <td style="width:120px;vertical-align:top;padding:10px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:13px;line-height:18px;color:#90adcb;">Inquiry</div>
                        </td>
                        <td style="vertical-align:top;padding:10px 0;">
                          <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:15px;line-height:22px;color:#e6f1fb;">
                            ${inquiry}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${website ? `
          <tr>
            <td class="px" style="padding:22px 28px 0 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Secondary CTA shown only if website exists -->
                  <td style="width:12px;">&nbsp;</td>
                  <td style="border-radius:10px;background:#314d68;">
                    <a href="${website}" target="_blank" rel="noopener"
                       style="display:inline-block;padding:12px 18px;font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:14px;font-weight:700;line-height:18px;color:#ffffff;text-decoration:none;">
                      View Website
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`: ""}

          <!-- Spacer -->
          <tr><td style="height:24px;line-height:24px;font-size:0;">&nbsp;</td></tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="padding:0 28px 28px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #314d68;">
                <tr>
                  <td style="padding-top:16px;">
                    <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:12px;line-height:18px;color:#90adcb;">
                      © ${new Date().getFullYear()} Panielix Solutions. All rights reserved.
                    </div>
                    <div style="font-family:Inter, Noto Sans, Arial, Helvetica, sans-serif;font-size:12px;line-height:18px;color:#90adcb;margin-top:4px;">
                      This message was sent from your website contact form.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`                 // optional
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 400 });
  }
}
