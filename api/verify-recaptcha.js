// /api/verify-recaptcha.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "No token provided" });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return res
        .status(500)
        .json({ success: false, message: "Server misconfigured" });
    }

    // Google requires form-urlencoded
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await googleRes.json();

    if (data.success) {
      // ✅ Verified
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed reCAPTCHA verification",
        errors: data["error-codes"] || [],
      });
    }
  } catch (err) {
    console.error("verify-recaptcha error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
}
