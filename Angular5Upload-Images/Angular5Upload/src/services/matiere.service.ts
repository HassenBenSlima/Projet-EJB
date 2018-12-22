import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Matiere} from '../models/matiere.model';
import {EnseignantService} from './enseignant.service';

@Injectable()
export class MatiereService {

  constructor(private http: HttpClient, public enseignantService: EnseignantService) {
  }

  getMatiere(id: number): Observable<Matiere[]> {
    return this.http.get<Matiere[]>('http://localhost:8080/rest/rest/impService/getMatier/' + id);
  }

  deleteMatiere(id: number) {
    return this.http.delete('http://localhost:8080/rest/rest/impService/deleteMatier/' + id);
  }


  OnSaveMatiere(matiere: Matiere): Observable<Matiere> {
    console.log('file' + matiere.labelle + '+++++++++++++');
    const myObj: Matiere = {
      'id': null,
      'labelle': matiere.labelle,
      'enseignant': this.enseignantService.engseignant
    };


    console.log('file' + myObj);
    return this.http.post<Matiere>('http://localhost:8080/rest/rest/impService/saveMatier', myObj);
  }

}
