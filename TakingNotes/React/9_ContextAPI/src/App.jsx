import NotesPage from "./pages/NotesPage";
import TracksDB from "./pages/TracksDB";

export default function App() {
  return (
    <section className="h-screen bg-[#0c0c0d] text-[#fff] text-center font-ibm-plex-mono">
      <NotesPage />
      <TracksDB />
    </section>
  );
}
