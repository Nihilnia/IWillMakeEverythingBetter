import { createContext } from "react";

export const TracksContext = createContext({
  allTracks: [],
  handleChangeTrackName: () => {},
});
