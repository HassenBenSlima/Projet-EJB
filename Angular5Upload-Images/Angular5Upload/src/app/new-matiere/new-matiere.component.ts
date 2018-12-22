import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Matiere} from '../../models/matiere.model';
import {MatiereService} from '../../services/matiere.service';
import {EnseignantService} from '../../services/enseignant.service';

@Component({
  selector: 'app-new-matiere',
  templateUrl: './new-matiere.component.html',
  styleUrls: ['./new-matiere.component.css']
})
export class NewMatiereComponent implements OnInit {
  form: FormGroup;
  matiere: Matiere = new Matiere();
  mode = 1;
  name: string;

  constructor(
    public matiereService: MatiereService,
    private formBuilder: FormBuilder,
    public enseignantService: EnseignantService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      labelle: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  saveMatiere() {
    this.matiere = this.form.value;
    this.matiereService.OnSaveMatiere(this.matiere)
      .subscribe(data => {
          this.mode = 2;
          // console.log('labelle : ' + data.labelle);
          // const eng: Enseignant = new Enseignant(this.enseignantService.engseignant.login, this.enseignantService.engseignant.password);
          // this.matiere = data;
          this.name = this.enseignantService.engseignant.login;
          console.log('matiere : ' + this.name);

        }, err => {
          console.log(err);
        }
      );
  }
}
