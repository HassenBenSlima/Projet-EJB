import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {UploadFileService} from './upload/upload-file.service';
import {MatiereService} from '../services/matiere.service';
import {TacheService} from '../services/tache.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewTacheComponent} from './new-tache/new-tache.component';
import {EnseignantService} from '../services/enseignant.service';
import {ListHistoryTachesComponent} from './list-history-taches/list-history-taches.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginEngseignantComponent} from './login-engseignant/login-engseignant.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {NewMatiereComponent} from './new-matiere/new-matiere.component';
import {ListMatieresComponent} from './list-matieres/list-matieres.component';
import {EditMatieresComponent} from './edit-matieres/edit-matieres.component';
import {MesDemandesNonRealiserComponent} from './mes-demandes-non-realiser/mes-demandes-non-realiser.component';
import {MesDemandesRealiserComponent} from './mes-demandes-realiser/mes-demandes-realiser.component';

const appRoutes: Routes = [
  {path: 'about', component: FormUploadComponent},
  {path: 'contacts', component: ListUploadComponent},
  {path: 'newContact', component: ListHistoryTachesComponent},
  {path: 'login', component: LoginEngseignantComponent},
  {path: 'welcome/:id', component: PageHomeComponent},
  {path: 'new-matiere', component: NewMatiereComponent},
  {path: 'listmatiere', component: ListMatieresComponent},
  {path: 'mesdemandesnonrealiser', component: MesDemandesNonRealiserComponent},
  {path: 'mesdemanderealiser', component: MesDemandesRealiserComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    NewTacheComponent,
    ListHistoryTachesComponent,
    LoginEngseignantComponent,
    PageHomeComponent,
    NewMatiereComponent,
    ListMatieresComponent,
    EditMatieresComponent,
    MesDemandesNonRealiserComponent,
    MesDemandesRealiserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UploadFileService, MatiereService, TacheService, EnseignantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
