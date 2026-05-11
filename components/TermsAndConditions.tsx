"use client";

import { useLocale } from "@/components/LocaleProvider";
import styles from "./TaC.module.css";

export function TermsAndConditions() {
  const { messages } = useLocale();
  const L = messages.legal;

  return (
    <div className={styles.tacContainer}>
      <div className={styles.tacContent}>
        <h1 className={`${styles.tacTitle} cooper-font`}>{L.title}</h1>
        <p className={`${styles.tacDesc} fgrotesk-font`}>
          {L.introBefore}
          <b>{L.brand}</b>
          {L.introAfter}
        </p>
        <ol className={`${styles.tacList} fgrotesk-font`}>
          <li>
            <span className={styles.tacSectionTitle}>{L.s1Title}</span>
            <ol type="a">
              <li>{L.s1a}</li>
              <li>{L.s1b}</li>
              <li>{L.s1c}</li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s2Title}</span>
            <ul>
              <li>{L.s2u1}</li>
              <li>{L.s2u2}</li>
              <li>{L.s2u3}</li>
              <li>{L.s2u4}</li>
              <li>
                {L.s2u5Before}
                <b>{L.s2u5Bold}</b>
              </li>
            </ul>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s3Title}</span>
            <ol type="a">
              <li>
                <b>{L.s3aLabel}</b>
                <br />
                {L.s3aBody}
              </li>
              <li>
                <b>{L.s3bLabel}</b>
                <br />
                {L.s3bBody}
              </li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s4Title}</span>
            <ol type="a">
              <li>{L.s4a}</li>
              <li>
                {L.s4bBefore}
                <b>{L.s4bBold}</b>
                {L.s4bAfter}
              </li>
              <li>{L.s4c}</li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s5Title}</span>
            <ol type="a">
              <li>{L.s5a}</li>
              <li>{L.s5b}</li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s6Title}</span>
            <ol type="a">
              <li>{L.s6a}</li>
              <li>{L.s6b}</li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s7Title}</span>
            <ol type="a">
              <li>{L.s7a}</li>
              <li>{L.s7b}</li>
            </ol>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s8Title}</span>
            <p>{L.s8p}</p>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s9Title}</span>
            <p>{L.s9p}</p>
          </li>
          <li>
            <span className={styles.tacSectionTitle}>{L.s10Title}</span>
            <p>{L.s10p}</p>
          </li>
        </ol>
        <div className={`${styles.tacContact} fgrotesk-font`}>
          <b>{L.contactHeading}</b>
          <br />
          {L.contactIntro}
          <br />
          📧 <a href="mailto:info@vibra-travel.com">info@vibra-travel.com</a>
          <br />
          📞 <a href="tel:+34744484995">(+34) 744484995</a>
          <br />
          🌐{" "}
          <a href="https://www.vibra-travel.com" target="_blank" rel="noopener noreferrer">
            www.vibra-travel.com
          </a>
        </div>
      </div>
    </div>
  );
}
