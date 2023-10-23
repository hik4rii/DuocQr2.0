import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iusuario } from 'src/app/interfaces/iusuario';
//import { Usuario } from 'src/app/pages/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  alumnos: Iusuario[] = []; // Almacena a los alumnos
  profesores: Iusuario[] = []; // Almacena a los profesores

  usuarios: any[] = []

  apiURL = 'https://apiappmovil-3elw.onrender.com'

  constructor(private http: HttpClient) { 
    
  }

  getAllAlumnos(): Observable<Iusuario[]> {
    const url = `${this.apiURL}/alumnos`; 
    return this.http.get<Iusuario[]>(url);
  }

  getAllProfesores(): Observable<Iusuario[]> {
    const url = `${this.apiURL}/profe`; 
    return this.http.get<Iusuario[]>(url);
  }


  addUsuario(usuario: Iusuario) {
    if (usuario.tipo === 'Alumno') {
      this.alumnos.push(usuario);
    } else if (usuario.tipo === 'Profesor') {
      this.profesores.push(usuario);
    }
  }

  addAlumnos(alumnos: Iusuario[]) {
    this.alumnos = alumnos;
  }

 
  addProfesores(profesores: Iusuario[]) {
    this.profesores = profesores;
  }


getAll() {
  return [...this.usuarios]
}

getUser(user: string, pass: string): Observable<Iusuario | null> {
  const userMatch = this.usuarios.find((aux) => aux.usuario === user && aux.contrasenia === pass);
  if (userMatch) {
    return of(userMatch);
  } else {
    return of(null); // Devolver un observable con null si no se encuentra el usuario
  }
}

getUsers(): Observable<Iusuario[]> {
  // Supongamos que tienes una variable 'usuarios' con la lista de usuarios
  return of(this.usuarios);
}

// Método para obtener el tipo de usuario basado en el correo y la contraseña
getUserTypeByEmailAndPassword(email: string, pass: string): Observable<any | null> {
  const usuario = this.usuarios.find((user) => user.correo === email && user.contrasenia === pass);

  if (usuario) {
    return of(usuario.tipo); // Devuelve el tipo de usuario (Alumno o Profesor)
  } else {
    return of(null); // Usuario no encontrado
  }
}
}