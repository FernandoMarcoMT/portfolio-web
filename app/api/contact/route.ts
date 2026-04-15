type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const isValidEmail = (value: string) => /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]+)$/.test(value);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim() || "New Contact Message";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: "Invalid sender email format." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "marco3072003@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey) {
      return Response.json(
        { message: "Server email is not configured. Set RESEND_API_KEY." },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        subject: `[Portfolio] ${subject}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend API error:", errorBody);
      return Response.json(
        { message: "Failed to send message. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { message: "Unexpected server error while sending message." },
      { status: 500 },
    );
  }
}
