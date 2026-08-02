"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { getEmailJsConfig } from "@/lib/emailjs-config";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./ContactForm.module.css";

const initial = {
  name: "",
  email: "",
  phone: "",
  groupSize: "",
  message: "",
};

export function ContactForm() {
  const { messages } = useLocale();
  const f = messages.contactForm;
  const [formData, setFormData] = useState(initial);

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    const { publicKey, serviceId, templateId } = getEmailJsConfig();
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      window.alert(f.alertSuccess);
      setFormData(initial);
    } catch (error) {
      window.alert(f.alertError);
      console.error(error);
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <div className={styles.formPanel}>
          <div className={styles.formHeader}>
            <p className={styles.formEyebrow}>
              {"formEyebrow" in f ? f.formEyebrow : "Contact form"}
            </p>
            <h2 className={`${styles.formTitle} cooper-font`}>
              {"formTitle" in f ? f.formTitle : "Send us a message"}
            </h2>
            <p className={styles.formIntro}>
              {"formIntro" in f
                ? f.formIntro
                : "Share your dates, group size and what you are looking for."}
            </p>
          </div>

          <form className={styles.form} onSubmit={submitEmail}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{f.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder={f.namePlaceholder}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{f.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder={f.emailPlaceholder}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="number">{f.phoneLabel}</label>
                <input
                  type="tel"
                  id="number"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  placeholder={f.phonePlaceholder}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="group">{f.groupLabel}</label>
                <input
                  type="number"
                  id="group"
                  value={formData.groupSize}
                  onChange={(e) => setFormData((p) => ({ ...p, groupSize: e.target.value }))}
                  placeholder={f.groupPlaceholder}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{f.messageLabel}</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                placeholder={f.messagePlaceholder}
                required
              />
            </div>

            <button type="submit" className={`${styles.btnContact} fgrotesk-font`}>
              {f.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
