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
  preferredCity: "",
  nationality: "",
  contactPreference: "",
  travelDates: "",
  experiences: "",
  padelLevel: "",
  message: "",
  comments: "",
};

export function ContactForm() {
  const { messages } = useLocale();
  const f = messages.contactForm;
  const [formData, setFormData] = useState(initial);

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    const { publicKey, serviceId, templateId } = getEmailJsConfig();

    const contactLabel =
      formData.contactPreference === "email"
        ? f.contactEmail
        : formData.contactPreference === "whatsapp"
          ? f.contactWhatsapp
          : formData.contactPreference === "call"
            ? f.contactCall
            : formData.contactPreference;

    const composedMessage = [
      `Preferred city: ${formData.preferredCity}`,
      `Nationality: ${formData.nationality}`,
      `Contact preference: ${contactLabel}`,
      `Travel dates: ${formData.travelDates}`,
      `Experiences interested in: ${formData.experiences}`,
      `Padel level: ${formData.padelLevel}`,
      "",
      "Message:",
      formData.message,
      formData.comments ? `\nComments:\n${formData.comments}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...formData,
          contactPreference: contactLabel,
          message: composedMessage,
        },
        publicKey,
      );
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
            <p className={styles.formEyebrow}>{f.formEyebrow}</p>
            <h2 className={`${styles.formTitle} cooper-font`}>{f.formTitle}</h2>
            <p className={styles.formIntro}>{f.formIntro}</p>
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

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="preferredCity">{f.cityLabel}</label>
                <input
                  type="text"
                  id="preferredCity"
                  value={formData.preferredCity}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, preferredCity: e.target.value }))
                  }
                  placeholder={f.cityPlaceholder}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="nationality">{f.nationalityLabel}</label>
                <input
                  type="text"
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, nationality: e.target.value }))
                  }
                  placeholder={f.nationalityPlaceholder}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contactPreference">{f.contactPreferenceLabel}</label>
                <select
                  id="contactPreference"
                  value={formData.contactPreference}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, contactPreference: e.target.value }))
                  }
                  required
                >
                  <option value="" disabled>
                    {f.contactPreferencePlaceholder}
                  </option>
                  <option value="email">{f.contactEmail}</option>
                  <option value="whatsapp">{f.contactWhatsapp}</option>
                  <option value="call">{f.contactCall}</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="travelDates">{f.travelDatesLabel}</label>
                <input
                  type="text"
                  id="travelDates"
                  value={formData.travelDates}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, travelDates: e.target.value }))
                  }
                  placeholder={f.travelDatesPlaceholder}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="experiences">{f.experiencesLabel}</label>
                <input
                  type="text"
                  id="experiences"
                  value={formData.experiences}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, experiences: e.target.value }))
                  }
                  placeholder={f.experiencesPlaceholder}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="padelLevel">{f.padelLevelLabel}</label>
                <input
                  type="text"
                  id="padelLevel"
                  value={formData.padelLevel}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, padelLevel: e.target.value }))
                  }
                  placeholder={f.padelLevelPlaceholder}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{f.messageLabel}</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                placeholder={f.messagePlaceholder}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="comments">{f.commentsLabel}</label>
              <textarea
                id="comments"
                rows={3}
                value={formData.comments}
                onChange={(e) => setFormData((p) => ({ ...p, comments: e.target.value }))}
                placeholder={f.commentsPlaceholder}
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
