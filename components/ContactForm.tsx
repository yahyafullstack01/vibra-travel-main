"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { IconBallBL } from "@/components/icons/IconBallBL";
import { getEmailJsConfig } from "@/lib/emailjs-config";
import { useLocale } from "@/components/LocaleProvider";
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
    <section id="contact">
      <div className={styles.contactFormContainer}>
        <div className={styles.contactFormWrap}>
          <div className={styles.trDecoration}>
            <IconBallBL />
          </div>
          <div className={styles.contactFormContent}>
            <div className={styles.contactForm}>
              <form onSubmit={submitEmail}>
                <div className={styles.formLine}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{f.nameLabel}</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
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
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder={f.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formLine}>
                  <div className={styles.formGroup}>
                    <label htmlFor="number">{f.phoneLabel}</label>
                    <input
                      type="number"
                      id="number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
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
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, groupSize: e.target.value }))
                      }
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
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder={f.messagePlaceholder}
                    required
                  />
                  <div className={styles.formSubmit}>
                    <button type="submit" className={styles.btnContact}>
                      {f.send}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className={`${styles.contactItems} cooper-font`}>
              <div className={styles.title}>
                <span>{f.consultTitle}</span>
              </div>
              <div className={`${styles.desc} fgrotesk-font`}>{f.consultDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
