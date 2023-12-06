export interface Iusuario {
    id:Number;
    usuario: String;
    correo: string;
    contrasena: String;
    tipo: 'Alumno' | 'Profesor';
    
}

export interface Ialumnos extends Iusuario {
    // Puedes agregar propiedades específicas de alumnos aquí
  }

export interface Iprofesores extends Iusuario {
    // Puedes agregar propiedades específicas de profesores aquí
}  