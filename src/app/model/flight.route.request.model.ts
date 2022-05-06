import { AircraftModel } from "./aircraft.model";
import { AirportModel } from "./airport.model";

export class FlightRouteRequestModel {
    includeDestinations: AirportModel[];
    excludeDestinations: AirportModel[];
    aircraft: AircraftModel;
  }