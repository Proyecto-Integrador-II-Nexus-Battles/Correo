export interface RecuperarContrasenaEJS {
  username: string;
  code: number;
}

export interface ConfirmarCuentaEJS {
  username: string;
  url: string;
}

export interface PromocionesEJS {
  cardname: string;
  sale: number;
  image: string;
}

export interface SubastaEJS {
  username: string;
  cardname: string;
  image: string;
}
