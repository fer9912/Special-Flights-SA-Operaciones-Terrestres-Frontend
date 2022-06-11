import { InsumoDTOModel } from "../model/insumoDTO.model";

export class InsumoVueloDTOModel {
	Id: number;
	SupplyId: number;
	FlightId: string;
	InitialQuantity: number;
	FinalQuantity: number;
	Supply: InsumoDTOModel;
}