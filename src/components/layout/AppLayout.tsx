import { Outlet } from "react-router";
import { Sidebar } from './Sidebar'
import { Topbar } from "./Topbar";

export function AppLayout() {
  return (
    <div className="min-h-screen min-w-300 bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col border-l border-zinc-800">
          <Topbar />

          <main className="flex-1 bg-[radial-gradient(circle_at_top_right,rgba(163,255,18,0.08),transparent_35%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_100%,32px_32px,32px_32px] px-8 py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
