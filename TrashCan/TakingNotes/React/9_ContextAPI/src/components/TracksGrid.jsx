import { useContext } from "react";
import Track from "./Track";
import { TracksContext } from "../store/TracksContext";

export default function TracksGrid() {
  const { allTracks } = useContext(TracksContext);

  const render = allTracks.map((track) => (
    <Track key={track.id} id={track.id} name={track.name} />
  ));

  return <section className="grid">{render}</section>;
}
