import {Component, OnInit} from '@angular/core';
import {Tache} from '../../models/tache.model';
import {TacheService} from '../../services/tache.service';
import {UploadFileService} from '../upload/upload-file.service';

@Component({
  selector: 'app-list-history-taches',
  templateUrl: './list-history-taches.component.html',
  styleUrls: ['./list-history-taches.component.css']
})
export class ListHistoryTachesComponent implements OnInit {


  taches: Tache[];

  constructor(private uploadService: UploadFileService,
              private tacheService: TacheService) {
  }

  ngOnInit() {
    this.alltaches();
  }

  deleteLigne(id: number) {
    console.log(id);

    this.tacheService.changeStateOfTache(id).subscribe();

    // this.taches = this.taches.filter(item => item.id == id);

    const index = this.taches.findIndex(user => user.id === id);
    this.taches.splice(index, 1);
    console.log(this.taches);

  }


  alltaches() {
    return this.tacheService.getAllTacheImpressioned().subscribe(
      data => {
        this.taches = data;
        console.log('hassen' + data);
      }, err => {

      }
    );
  }


}
