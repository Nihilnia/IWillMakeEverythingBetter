import TracksContextProvider from "../store/TracksContext";
import TracksGrid from "../components/TracksGrid";

export default function TracksDB() {
  return (
    <TracksContextProvider>
      <TracksGrid />
    </TracksContextProvider>
  );
}
