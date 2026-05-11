/** Prefer env vars; fall back for local dev parity with legacy Vue `.env`-less setup */
export function getEmailJsConfig() {
  return {
    publicKey:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "rXl9T75PEg6BL6TxA",
    serviceId:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_6bh7gps",
    templateId:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_lp60trd",
  };
}
