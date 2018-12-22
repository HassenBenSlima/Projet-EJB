import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Enseignant} from '../models/enseignant.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EnseignantService {


  mode: number;
  engseignant: Enseignant;

  constructor(private http: HttpClient) {
  }

  getEnseignant(login: string, password: string): Observable<Enseignant> {
    return this.http.get<Enseignant>('http://localhost:8080/rest/rest/impService/getEnseigant/' + login + '/' + password)
      ;
  }

  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>('http://localhost:8080/rest/rest/impService/getEnseigantById/' + id);
  }


}
