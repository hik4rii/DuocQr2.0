export interface Ialumnos {
  id?: string;
  nombre: string;
  correo: string;
  contrasena: string;
  carrera: string;
  imagen: string;
  asistencia: number;
  idAsignatura?: number[];
  rol: string; // Agrega el campo "rol" para indicar si es "alumno" o "profesor"
}
