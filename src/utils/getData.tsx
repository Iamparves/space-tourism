import data from "../data/data.json";
import { Crew, Destination, Technology } from "./types";

export const getDestinations = (): Destination[] => data.destinations;

export const getCrews = (): Crew[] => data.crew;

export const getTechnologies = (): Technology[] => data.technology;
