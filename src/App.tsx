import { QuestProvider } from "./features/quests/QuestContext";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <QuestProvider>
      <AppRoutes />
    </QuestProvider>
  );
}
