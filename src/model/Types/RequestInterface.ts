export interface ConfirmacionCreacionRequest {
  email: string;
  subject: string;
  message: string;
  username: string;
  url: string;
}

export interface RecuperacionCuentaRequest {
  email: string;
  subject: string;
  message: string;
  username: string;
  code: number;
}

export interface PromocionRequest {
  email: string;
  subject: string;
  message: string;
  cardname: string;
  sale: number;
  image: string;
}

export interface SubastaRequest {
  email: string;
  subject: string;
  message: string;
  username: string;
  cardname: string;
  credits: number;
  image: string;
}
