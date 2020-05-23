import { writable } from "svelte/store";
import { allTracks } from "./config";

export const selectedTrack = writable(allTracks[0].slug);
