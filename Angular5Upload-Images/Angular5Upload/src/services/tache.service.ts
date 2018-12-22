import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Tache} from '../models/tache.model';
import {EnseignantService} from './enseignant.service';


@Injectable()
export class TacheService {

  mode: number;

  constructor(private http: HttpClient, public enseignantService: EnseignantService) {
  }

  OnSaveTache(tache: Tache) {
    console.log('file' + tache.pathDoc + '+++++++++++++');

    const myObj: Tache = {
      'id': null,
      'dateRecuperation': tache.dateRecuperation,
      'heureRecuperation': tache.heureRecuperation,
      'nombreCopies': tache.nombreCopies,
      'pathDoc': tache.pathDoc,
      'description': tache.description,
      'enseignant': this.enseignantService.engseignant
    };

    console.log('file' + myObj);

    return this.http.post<Tache>('http://localhost:8080/rest/rest/impService/saveTache', myObj);
  }

  getTache(): Observable<any> {
    return this.http.get('/getalltaches');
  }

  getTachesByDate(date: string): Observable<any> {
    return this.http.get('http://localhost:8080/rest/rest/impService/getTacheByDate/' + date + '/' + false);
  }

  getTachesBySattusAndEng(status: boolean, id: number): Observable<any> {
    return this.http.get('http://localhost:8080/rest/rest/impService/getTacheByStatusAndEng/' + status + '/' + id);
  }

  getAllTacheNotImp(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/rest/impService/getTacheByStatus/false');
  }


  getAllTacheImpressioned(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/rest/impService/getTacheByStatus/true');
  }


  changeStateOfTache(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/rest/rest/impService/changeStatusOfTache/' + id);
  }

}
