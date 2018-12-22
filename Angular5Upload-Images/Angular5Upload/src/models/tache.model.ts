import {Enseignant} from './enseignant.model';

export class Tache {

  id: number;
  dateRecuperation: string;
  heureRecuperation: string;
  nombreCopies: number;
  pathDoc: string;
  enseignant: Enseignant;
  description: string;

  constructor(dateRecuperation?: string,
              heureRecuperation?: string,
              nombreCopies?: number,
              pathDoc?: string,
              description?: string,
              enseignant?: Enseignant) {

    this.dateRecuperation = dateRecuperation;
    this.heureRecuperation = heureRecuperation;
    this.nombreCopies = nombreCopies;
    this.pathDoc = pathDoc;
    this.enseignant = enseignant;
    this.description = description;
  }

}
