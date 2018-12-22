import {Enseignant} from './enseignant.model';

export class Matiere {

  id: number;
  labelle: string;
  enseignant: Enseignant;

  constructor(labelle?: string, enseignant?: Enseignant) {
    this.labelle = labelle;
    this.enseignant = enseignant;

  }
}
