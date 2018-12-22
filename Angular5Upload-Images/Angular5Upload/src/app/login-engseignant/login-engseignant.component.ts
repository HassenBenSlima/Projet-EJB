import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Enseignant} from '../../models/enseignant.model';
import {EnseignantService} from '../../services/enseignant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-engseignant',
  templateUrl: './login-engseignant.component.html',
  styleUrls: ['./login-engseignant.component.css']
})
export class LoginEngseignantComponent implements OnInit {


  form: FormGroup;
  mode = 1;
  enseignant: Enseignant = new Enseignant();


  constructor(private formBuilder: FormBuilder,
              private enseignantService: EnseignantService,
              public router: Router) {
  }


  ngOnInit() {

    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });


  }


  welcomePage() {
    this.router.navigate(['welcome', this.enseignant.id]);

  }

  auth() {
    // this.save();
    console.log('-----------------1--------------');
    this.enseignant = this.form.value;

    console.log(this.enseignant);
    console.log('-----------------eeeeoooo--------------');
    this.enseignantService.getEnseignant(this.enseignant.login, this.enseignant.password).subscribe(data => {
      console.log('Eng Data' + data);


      this.enseignant = data;
      console.log('-----------------id--------------');
      console.log('Eng Data id' + this.enseignant.id);
      console.log('-----------------id--------------');

      this.mode = 2;
      this.enseignantService.engseignant = data;
      //  console.log('Eng Service' + this.enseignantService.engseignant.password);
      if (this.enseignant.login === 'admin') {
        this.enseignantService.mode = 2;
      } else {
        this.enseignantService.mode = 1;
      }


      this.welcomePage();
    }, err => {
      console.log(err);
    });

  }
}
