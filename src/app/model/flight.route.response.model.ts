import { AircraftModel } from "./aircraft.model";
import { AirportModel } from "./airport.model";

export class FlightRouteResponseModel {
    route: AirportModel[];
    duration: number;
    aircraft: AircraftModel;
    day: string;
    distance: number;
  }