"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import styles from "./GroupsOverview.module.css";

export function GroupsOverview() {
  const pathname = usePathname();
  const router = useRouter();
  const { messages } = useLocale();
  const o = messages.groups.overview;

  function scrollToActivities(e: React.MouseEvent) {
    e.preventDefault();
    const target = document.getElementById("activities");
    if (pathname === "/groups" && target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#activities");
      return;
    }
    router.push("/groups#activities");
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <header className={styles.whyHeader}>
            <p className={styles.eyebrow}>Why Vibra</p>
            <h2 className={`${styles.whyTitle} cooper-font`}>{o.whyTravel.title}</h2>
            <p className={styles.whyIntro}>{o.whyTravel.intro}</p>
          </header>
          <ul className={styles.benefitsGrid}>
            {o.whyTravel.benefits.map((benefit) => (
              <li className={styles.benefitPill} key={benefit}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.builtSection}>
        <div className={styles.builtInner}>
          <div className={styles.builtCopy}>
            <h2 className={`${styles.sectionTitle} cooper-font`}>{o.builtAroundYou.title}</h2>
            <p className={styles.sectionIntro}>{o.builtAroundYou.intro}</p>
          </div>
          <div className={styles.choosePanel}>
            <ul className={styles.optionGrid}>
              {o.builtAroundYou.options.map((option) => (
                <li className={styles.optionChip} key={option}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.includedSection}>
        <div className={styles.includedInner}>
          <div className={styles.includedHeader}>
            <p className={styles.eyebrow}>Included</p>
            <h2 className={`${styles.sectionTitle} cooper-font`}>{o.whatsIncluded.title}</h2>
            <p className={styles.sectionIntro}>{o.whatsIncluded.intro}</p>
          </div>
          <div className={styles.categoryGrid}>
            {o.whatsIncluded.categories.map((category) => (
              <article className={styles.categoryCard} key={category.title}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <ul className={styles.categoryList}>
                  {category.items.map((item) => (
                    <li className={styles.categoryItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.eyebrow}>Your trip</p>
          <h2 className={`${styles.ctaTitle} cooper-font`}>{o.designedAround.title}</h2>
          <p className={styles.ctaText}>{o.designedAround.description}</p>
          <button
            type="button"
            className={`nav-link fgrotesk-font ${styles.ctaBtn}`}
            onClick={scrollToActivities}
          >
            {o.designedAround.cta}
          </button>
        </div>
      </section>
    </div>
  );
}
