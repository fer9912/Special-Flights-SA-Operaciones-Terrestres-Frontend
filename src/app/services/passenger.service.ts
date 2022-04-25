import { PassengerModel } from "src/model/passenger.model";

export class PassengerService{  
    static getPassenger(id: number): PassengerModel{
        if(0 == id){
            return {idPassenger: 0,name: "Ejemplo"};
        }
        if(1 == id){
            return {idPassenger: 1,name: "Jano"};
        }
        if(2 == id){
            return {idPassenger: 2,name: "Fernando"};
        }        
        return {idPassenger: null ,name: "No existe el pasajero"};
    }
}