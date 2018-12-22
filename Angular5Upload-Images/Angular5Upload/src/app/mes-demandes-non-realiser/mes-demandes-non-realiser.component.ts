import {Component, OnInit} from '@angular/core';
import {Tache} from '../../models/tache.model';
import {TacheService} from '../../services/tache.service';
import {Router} from '@angular/router';
import {EnseignantService} from '../../services/enseignant.service';

@Component({
  selector: 'app-mes-demandes-non-realiser',
  templateUrl: './mes-demandes-non-realiser.component.html',
  styleUrls: ['./mes-demandes-non-realiser.component.css']
})
export class MesDemandesNonRealiserComponent implements OnInit {

  pageContacts: Tache[];
  motCle = '';


  constructor(public tacheService: TacheService, public router: Router,
              public enseignantService: EnseignantService) {
  }

  ngOnInit() {
    this.tacheService.getTachesBySattusAndEng(false, this.enseignantService.engseignant.id)
      .subscribe(data => {

        this.pageContacts = data;


      }, err => {
        console.log(err);
      });
  }

  doSearch() {
    this.tacheService.getTachesBySattusAndEng(false, this.enseignantService.engseignant.id)
      .subscribe(data => {

        this.pageContacts = data;


      }, err => {
        console.log(err);
      });
  }

  chercher() {
    this.doSearch();
  }
}
