export interface Countries {
  flags: Flags
  name: Name
  translations: Translations
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface Name {
  common: string
  official: string
  nativeName: any
}

export interface Country {
  flag: string
  name: CountryName
  translations: Translations
}


export interface CountryName {
  common: string
  official: string
}

export interface Translations {
  ara: Ara
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu
  est: Est
  fin: Fin
  fra: Fra
  hrv: Hrv
  hun: Hun
  ita: Ita
  jpn: Jpn
  kor: Kor
  nld: Nld
  per: Per
  pol: Pol
  por: Por
  rus: Rus
  slk: Slk
  spa: Spa
  srp: Srp
  swe: Swe
  tur: Tur
  urd: Urd
  zho: Zho
}

export interface Ara {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}
