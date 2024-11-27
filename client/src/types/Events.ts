export interface EventI {
  adresse: string;
  description_evt: string;
  date: string;
  lieu: string;
  nom: string;
  id: number;
  id_manif: number;
  media_url?: string;
  types_libelles: string;
  themes_libelles: string;
  code_postal: number;
  url_site: string;
  id_agenda_in: number;
  heure_debut: number;
  emetteur: string;
  lien_agenda: string;
}

export interface EventApi {
  results: EventI[];
  id: number;
}

export interface CardsThemeI {
  name: string;
  apiUrl: string;
  link: string;
}
