import { Route, Routes } from "react-router";
import { AppLayout } from "../components/layout/AppLayout";
import { CreateQuestPage } from "../pages/CreateQuestPage";
import { DashboardPage } from "../pages/DashboardPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ProgressPage } from "../pages/ProgressPage";
import { QuestBoardPage } from "../pages/QuestBoardPage";
import { QuestDetailPage } from "../pages/QuestDetailPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/quests" element={<QuestBoardPage />} />
        <Route path="/quests/new" element={<CreateQuestPage />} />
        <Route path="/quests/:questId" element={<QuestDetailPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
