import {Component, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../upload-file.service';
import {MatiereService} from '../../../services/matiere.service';
import {Matiere} from '../../../models/matiere.model';
import {Tache} from '../../../models/tache.model';
import {TacheService} from '../../../services/tache.service';
import {Enseignant} from '../../../models/enseignant.model';
import {EnseignantService} from '../../../services/enseignant.service';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
// https://www.concretepage.com/angular/angular-httpclient-post


  pathdoc = '';
  pathFile: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  // tache: Tache = new Tache();
  progress: { percentage: number } = {percentage: 0};
  matieres: Matiere[];

  taches: Tache[];

  enseignant: Enseignant;
  // fileUploads: Observable<Matiere[]>;
  //
  // nombreCopy: number;
  copies: number;

  constructor(private uploadService: UploadFileService,
              private matiereService: MatiereService,
              private tacheService: TacheService,
              private enseignantService: EnseignantService) {
  }

  ngOnInit() {
    this.onsearch();

    console.log('-------------------------------');

    this.getTachesFalse();
    // this.save();
    console.log('-----------------eeeeoooo--------------');
    this.enseignantService.getEnseignant('hassen', 'hassen').subscribe(data => {
      console.log('Eng Data' + data);

      this.enseignant = data;

      console.log('Eng Data id' + this.enseignant.id);

    }, err => {
      console.log(err);
    });


  }


  addTache(date, time, nombreCopy, desc) {
    const timestr: number = nombreCopy;

    this.enseignantService.getEnseignant('hassen', 'hassen').subscribe(data => {
      if (data instanceof Enseignant) {
        this.enseignant = data;
        console.log(this.enseignant);
      }
    }, err => {
      console.log(err);
    });

    // const aa = JSON.parse(this.enseignant);
    // console.log('hassen ben slima' + aa);
    const userStr = JSON.stringify(this.enseignant);
    console.log('eng :' + userStr);
    this.copies = parseInt(nombreCopy, 10);

    console.log('times :' + time);
    console.log('date :' + date);
    const tache = new Tache(date, time, this.copies, this.pathdoc, desc, this.enseignant);
    console.log('hassen ben slima :' + tache.dateRecuperation);
    console.log('hassen ben slima :' + tache.heureRecuperation);
    console.log('hassen ben slima :' + tache.pathDoc);
    console.log('hassen ben slima :' + tache.nombreCopies);

    this.tacheService.OnSaveTache(tache).subscribe();
  }


  onsearch() {
    return this.matiereService.getMatiere(this.enseignantService.engseignant.id).subscribe(
      data => {
        this.matieres = data;
        console.log('hassen' + data);
      }, err => {

      }
    );
  }


  getTachesFalse() {
    return this.tacheService.getAllTacheNotImp().subscribe(
      data => {
        this.taches = data;
        console.log('hassen' + data);
      }, err => {

      }
    );
  }


  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('text.*|image.*|application.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);


    console.log(this.currentFileUpload.name);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log('Object File' + event.body.toString());
        this.pathFile = event.body.toString();

        const aa = JSON.parse(this.pathFile);
        console.log('hassen ben slima' + aa);
        const userStr = JSON.stringify(aa);
        console.log('hassen ben slima' + userStr);


        JSON.parse(userStr, (key, value) => {
          if (key === 'fileName') {

            console.log('hassen ben slima file name ' + value);
            this.pathFile = value;
            return value;
          }
        });

        console.log('hassen ben slima file name ' + this.pathFile);
        this.pathdoc = this.pathFile;
        console.log('hassen ben slima file doc ' + this.pathdoc);
      }
    });


    this.selectedFiles = undefined;


  }


}



