import {
  BarChart3,
  LayoutDashboard,
  PlusSquare,
  Shield,
  Sword,
  Terminal,
} from "lucide-react";
import { NavLink } from "react-router";
import { useQuests } from "../../features/quests/QuestContext";
import { getTotalCompletedXp } from "../../features/progress/progressUtils";
import {
  getNextRankForXp,
  getRankForXp,
  getRankProgress,
} from "../../features/progress/ranks";
import { cn } from "../../lib/cn";

const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Quest Board",
    path: "/quests",
    icon: Sword,
  },
  {
    label: "Create Quest",
    path: "/quests/new",
    icon: PlusSquare,
  },
  {
    label: "Progress",
    path: "/progress",
    icon: BarChart3,
  },
  {
    label: "Profile / Rank",
    path: "/profile",
    icon: Shield,
  },
];

export function Sidebar() {
  const { quests } = useQuests();

  const totalXp = getTotalCompletedXp(quests);
  const currentRank = getRankForXp(totalXp);
  const nextRank = getNextRankForXp(totalXp);
  const rankProgress = getRankProgress(totalXp);

  return (
    <aside className="flex min-h-screen w-70 flex-col border-r border-zinc-800 bg-[#080808]">
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center border-2 border-[#a3ff12] bg-black shadow-[4px_4px_0_#a3ff12]">
            <Terminal className="size-5 text-[#a3ff12]" />
          </div>

          <div>
            <p className="font-mono text-lg font-black tracking-[-0.06em] text-white">
              CODE//QUESTS
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Dev RPG Tracker
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 border border-transparent px-4 py-3 font-mono text-sm uppercase tracking-[0.16em] transition",
                  "text-zinc-400 hover:border-zinc-700 hover:bg-zinc-950 hover:text-white",
                  isActive &&
                    "border-[#a3ff12] bg-[#a3ff12] text-black shadow-[5px_5px_0_#1f1f1f] hover:border-[#a3ff12] hover:bg-[#a3ff12] hover:text-black",
                )
              }
            >
              <Icon className="size-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 p-4">
        <div className="border border-zinc-700 bg-black p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Current Rank
          </p>

          <p className="mt-2 font-mono text-lg font-black text-white">
            {currentRank.title}
          </p>

          <div className="mt-4 h-2 border border-zinc-700 bg-zinc-950">
            <div
              className="h-full bg-[#a3ff12]"
              style={{ width: `${rankProgress.percentage}%` }}
            />
          </div>

          <p className="mt-2 font-mono text-xs text-zinc-500">
            {nextRank
              ? `${totalXp.toLocaleString()} XP / ${nextRank.minXp.toLocaleString()} XP`
              : `${totalXp.toLocaleString()} XP / MAX`}
          </p>
        </div>
      </div>
    </aside>
  );
}
