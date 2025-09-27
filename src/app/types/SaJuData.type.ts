interface StemBranch {
  kr: string;
  cn: string;
  yinYang: string;
}

interface TextPair {
  kr: string;
  cn: string;
}

type NoblePerson = TextPair;

export interface SaJuColumn {
  label: string;
  tenStar: TextPair;
  heavenlyStem: StemBranch;
  earthlyBranch: StemBranch;
  branchTenStar: TextPair;
  twelveFortune: TextPair;
  twelveGodKill: TextPair;
  noblePeople: NoblePerson[] | null;
}

export interface SaJuMeta {
  firstName: string;
  lastName: string;
  birth: string;
}

export interface SaJuData {
  meta: SaJuMeta;
  columns: SaJuColumn[];
}
