import { RespuestaCarta } from "./respuesta-carta.model";

export interface RespuestaBusqueda {
    object: string;
    total_cards: number;
    has_more: boolean;
    data: RespuestaCarta[];
  }