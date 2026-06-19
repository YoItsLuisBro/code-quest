export type DeveloperRank = {
  title: string;
  minXp: number;
  description: string;
};

export const developerRanks: DeveloperRank[] = [
  {
    title: "Console Initiate",
    minXp: 0,
    description: "You have entered the terminal. The first quests await.",
  },
  {
    title: "Syntax Squire",
    minXp: 250,
    description: "You understand the basics and are building coding momentum.",
  },
  {
    title: "Component Knight",
    minXp: 750,
    description: "You can build resuable pieces and structure small apps.",
  },
  {
    title: "State Ranger",
    minXp: 1500,
    description:
      "You manage state, data flow, and user interaction with control.",
  },
  {
    title: "Algorithm Warden",
    minXp: 3000,
    description:
      "You are sharpening problem-solving and techincal interview skills.",
  },
  {
    title: "Full Stack Paladin",
    minXp: 5000,
    description: "You can connect frontend, backend, database, and deployment.",
  },
  {
    title: "Code Archmage",
    minXp: 8000,
    description: "You are operating at portfolio-ready developer power.",
  },
];

export function getRankForXp(totalXp: number) {
  return (
    [...developerRanks].reverse().find((rank) => totalXp >= rank.minXp) ??
    developerRanks[0]
  );
}

export function getNextRankForXp(totalXp: number) {
  return developerRanks.find((rank) => rank.minXp > totalXp) ?? null;
}

export function getRankProgress(totalXp: number) {
  const currentRank = getRankForXp(totalXp);
  const nextRank = getNextRankForXp(totalXp);

  if (!nextRank) {
    return {
      percentage: 100,
      xpIntoCurrentRank: totalXp - currentRank.minXp,
      xpNeededForNextRank: 0,
      xpRemaining: 0,
    };
  }

  const xpIntoCurrentRank = totalXp - currentRank.minXp;
  const xpNeededForNextRank = nextRank.minXp - currentRank.minXp;
  const xpRemaining = nextRank.minXp - totalXp;

  return {
    percentage: Math.round((xpIntoCurrentRank / xpNeededForNextRank) * 100),
    xpIntoCurrentRank,
    xpNeededForNextRank,
    xpRemaining,
  };
}
