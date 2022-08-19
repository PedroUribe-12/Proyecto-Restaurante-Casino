import { Injectable } from '@angular/core';
import { AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from '../shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private colleccionUsuarios !: AngularFirestoreCollection<Usuario>;

  constructor() {
    this.colleccionUsuarios.snapshotChanges();
  }

  getUsuarios(){

  }

}
