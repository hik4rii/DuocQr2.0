import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { Iprofesores } from 'src/app/interfaces/iprofesores';

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private firestore: AngularFirestore) { }

///CRUD ALUMNO
  getCollection(name:string){
    return this.firestore.collection<Ialumnos>(name).valueChanges({idField: 'id'});
  }
  createAlumno(name:string,data:Ialumnos){
    return this.firestore.collection<Ialumnos>(name).add(data);
  }
  updateAlumno(name:string,documentId:string,data:Ialumnos){
    return this.firestore.collection<Ialumnos>(name).doc(documentId).update(data);
  }

  deleteAlumno(name:string,documentId:string){
    return this.firestore.collection<Ialumnos>(name).doc(documentId).delete();
  }

  geteAlumnoById(name:string,documentId:string){
    return this.firestore.collection<Ialumnos>(name).doc(documentId).valueChanges();
  }
///CRUD PROFE
  getCollectionp(name:string){
    return this.firestore.collection<Iprofesores>(name).valueChanges({idField: 'id'});
  }
  createProfesor(name:string,data:Iprofesores){
    return this.firestore.collection<Iprofesores>(name).add(data);
  }
  updateProfesor(name:string,documentId:string,data:Iprofesores){
    return this.firestore.collection<Iprofesores>(name).doc(documentId).update(data);
  }

  deleteProfesor(name:string,documentId:string){
    return this.firestore.collection<Iprofesores>(name).doc(documentId).delete();
  }

  geteProfesorById(name:string,documentId:string){
    return this.firestore.collection<Iprofesores>(name).doc(documentId).valueChanges();
  }


///CRUD ASIGNATURAS
  getCollectiona(name:string){
    return this.firestore.collection<Iasignaturas>(name).valueChanges({idField: 'id'});
  }
  createAsignatura(name:string,data:Iasignaturas){
    return this.firestore.collection<Iasignaturas>(name).add(data);
  }
  updateAsignatura(name:string,documentId:string,data:Iasignaturas){
    return this.firestore.collection<Iasignaturas>(name).doc(documentId).update(data);
  }

  deleteAsignatura(name:string,documentId:string){
    return this.firestore.collection<Iasignaturas>(name).doc(documentId).delete();
  }

  geteAsignaturaById(name:string,documentId:string){
    return this.firestore.collection<Iasignaturas>(name).doc(documentId).valueChanges();
  }
}