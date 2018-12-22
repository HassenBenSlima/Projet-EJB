import {Component, OnInit} from '@angular/core';
import {Enseignant} from '../../models/enseignant.model';
import {ActivatedRoute} from '@angular/router';
import {EnseignantService} from '../../services/enseignant.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  enseignant: Enseignant = new Enseignant();
  idEnseignant: number;

  constructor(public activatedRoute: ActivatedRoute,
              public enseignantService: EnseignantService) {
    this.idEnseignant = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    console.log('id :' + this.idEnseignant);
    this.eng();
  }

  eng() {
    this.enseignantService.getEnseignantById(this.idEnseignant).subscribe(data => {
      console.log('Eng Data' + data);

      this.enseignant = data;

      console.log('Eng Data id home' + this.enseignant.id);

    }, err => {
      console.log(err);
    });
  }

}
