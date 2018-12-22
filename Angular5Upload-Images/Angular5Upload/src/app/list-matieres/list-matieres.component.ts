import {Component, OnInit} from '@angular/core';
import {Matiere} from '../../models/matiere.model';
import {MatiereService} from '../../services/matiere.service';
import {Router} from '@angular/router';
import {EnseignantService} from '../../services/enseignant.service';

@Component({
  selector: 'app-list-matieres',
  templateUrl: './list-matieres.component.html',
  styleUrls: ['./list-matieres.component.css']
})
export class ListMatieresComponent implements OnInit {
  pageContacts: Matiere[];
  motCle = '';


  constructor(public matiereService: MatiereService, public router: Router,
              public enseignantService: EnseignantService) {
  }

  ngOnInit() {
    this.matiereService.getMatiere(this.enseignantService.engseignant.id)
      .subscribe(data => {
        this.pageContacts = data;


      }, err => {
        console.log(err);
      });
  }

  doSearch() {
    this.matiereService.getMatiere(this.enseignantService.engseignant.id)
      .subscribe(data => {
        this.pageContacts = data;


      }, err => {
        console.log(err);
      });
  }

  chercher() {
    this.doSearch();
  }

  onEditMatiere(id: number) {
    this.router.navigate(['editMatiere', id]);

  }

  onDeleteMatiere(c: Matiere) {
    const confirm = window.confirm('etes vous sure?');
    if (confirm === true) {
      this.matiereService.deleteMatiere(c.id)
        .subscribe(data => {
          this.pageContacts.splice(this.pageContacts.indexOf(c), 1);
        }, err => {
          console.log(err);
        });

    }

  }

}
