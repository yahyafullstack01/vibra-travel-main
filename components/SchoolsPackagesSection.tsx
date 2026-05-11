"use client";

import { useMemo } from "react";
import type { PackageCardDef } from "@/components/PackagesInclude";
import { PackagesInclude } from "@/components/PackagesInclude";
import { useLocale } from "@/components/LocaleProvider";
import { IconHost } from "@/components/icons/IconHost";
import { IconSchool } from "@/components/icons/IconSchool";
import { IconShield } from "@/components/icons/IconShield";
import { IconStar } from "@/components/icons/IconStar";
import { IconTailor } from "@/components/icons/IconTailor";
import { IconTrophy } from "@/components/icons/IconTrophy";

const icons = [IconShield, IconTailor, IconTrophy, IconStar, IconSchool, IconHost];

export function SchoolsPackagesSection() {
  const { messages } = useLocale();

  const cards = useMemo((): PackageCardDef[] => {
    const raw = messages.schools.packages.cards;
    return raw.map((card, i) => ({
      Icon: icons[i] ?? IconShield,
      title: card.title,
      desc: card.desc,
    }));
  }, [messages.schools.packages.cards]);

  return (
    <PackagesInclude
      cards={cards}
      titleHtml={messages.schools.packages.titleHtml}
      subtitle={messages.schools.packages.subtitle}
    />
  );
}
