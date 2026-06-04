"use client";

import { useMemo } from "react";
import type { PackageCardDef } from "@/components/PackagesInclude/PackagesInclude";
import { PackagesInclude } from "@/components/PackagesInclude/PackagesInclude";
import { useLocale } from "@/components/LocaleProvider/LocaleProvider";
import { IconFire } from "@/components/icons/IconFire";
import { IconGlobe } from "@/components/icons/IconGlobe";
import { IconGuide } from "@/components/icons/IconGuide";
import { IconShield } from "@/components/icons/IconShield";
import { IconStar } from "@/components/icons/IconStar";
import { IconTrophy } from "@/components/icons/IconTrophy";

const icons = [IconStar, IconShield, IconTrophy, IconFire, IconGlobe, IconGuide];

export function GroupsPackagesSection() {
  const { messages } = useLocale();

  const cards = useMemo((): PackageCardDef[] => {
    const raw = messages.groups.packages.cards;
    return raw.map((card, i) => ({
      Icon: icons[i] ?? IconStar,
      title: card.title,
      desc: card.desc,
    }));
  }, [messages.groups.packages.cards]);

  return (
    <PackagesInclude
      cards={cards}
      titleHtml={messages.groups.packages.titleHtml}
      subtitle={messages.groups.packages.subtitle}
    />
  );
}
