import { InsumoDTOModel } from "../model/insumoDTO.model";

export class InsumoVueloDTOModel {
	id: number;
	idInsumo: number;
	vuelo: string;
	cantidadInicial: number;
	cantidadFinal: number;
	insumo: InsumoDTOModel;
}