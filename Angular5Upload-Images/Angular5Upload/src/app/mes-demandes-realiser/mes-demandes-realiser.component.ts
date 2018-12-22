import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EnseignantService} from '../../services/enseignant.service';
import {Tache} from '../../models/tache.model';
import {TacheService} from '../../services/tache.service';

@Component({
  selector: 'app-mes-demandes-realiser',
  templateUrl: './mes-demandes-realiser.component.html',
  styleUrls: ['./mes-demandes-realiser.component.css']
})
export class MesDemandesRealiserComponent implements OnInit {

  pageContacts: Tache[];
  motCle = '';


  constructor(public tacheService: TacheService, public router: Router,
              public enseignantService: EnseignantService) {
  }

  ngOnInit() {
    this.tacheService.getTachesBySattusAndEng(true, this.enseignantService.engseignant.id)
      .subscribe(data => {

        this.pageContacts = data;


      }, err => {
        console.log(err);
      });
  }

  doSearch() {
    this.tacheService.getTachesBySattusAndEng(true, this.enseignantService.engseignant.id)
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
