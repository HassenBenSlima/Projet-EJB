import {Component, OnInit} from '@angular/core';
import {EnseignantService} from '../services/enseignant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode;
  interval;

  constructor(private enseignantService: EnseignantService) {

  }

  ngOnInit() {

    this.mode = this.enseignantService.mode;
    this.startTimer();

  }

  startTimer() {

    this.interval = setInterval(() => {
      this.mode = this.enseignantService.mode;
    }, 1000);
  }

}
