import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UploadFileService} from '../upload-file.service';
import {Tache} from '../../../models/tache.model';
import {TacheService} from '../../../services/tache.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;
  taches: Tache[];
  private todate = new Date();

  constructor(private uploadService: UploadFileService,
              private tacheService: TacheService) {
  }


  ngOnInit() {
    this.alltaches();
  }

  serach(date: string) {
    console.log('date hassen' + date);
    this.tacheService.getTachesByDate(date).subscribe(data => {
      this.taches = data;
    }, err => {
      console.log(err);
    });

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
    return this.tacheService.getAllTacheNotImp().subscribe(
      data => {
        this.taches = data;
        console.log('hassen' + data);
      }, err => {

      }
    );
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}
