import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';
import { ApibdService } from 'src/app/services/bd/apibd.service';
import { forkJoin } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/firabase/auth.service';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  
  loginForm: FormGroup;
  emailValue?: string;
  user: any;
  passValue?: string;
  userRole?: string;

  profesorButtonHidden: boolean = false; // Inicialmente oculto

  constructor(
    private router: Router,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private apiService: ApibdService,
    private mensajeUtil: MensajeService,
    private translateService: TranslateService,
    private fireAuthService: AuthService,
    private usuarioService: UsuarioService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.langs = this.translateService.getLangs();
  }

  ngOnInit() {
    if(this.translateService.currentLang=='English'){
      this.mensajeUtil.mensajeToast('info', 'Enter your data', 2000, 'bottom');
    }if(this.translateService.currentLang=='Español'){
      this.mensajeUtil.mensajeToast('info', 'Ingrese Sus Datos', 2000, 'bottom');
    }if(this.translateService.currentLang=='Japanese'){
      this.mensajeUtil.mensajeToast('info', 'あなたのデータを入れてください', 2000, 'bottom');
    }this.menu.enable(true);

    // Rellenado automatico
    //this.setAlumnoData(); // Llena los campos con datos de alumno por defecto
  }

  // Establece los datos de un alumno
  setAlumnoData() {
    this.apiService.listAlumnos().subscribe((alumnos) => {
      if (alumnos.length > 0) {
        const firstAlumno = alumnos[0];
        this.emailValue = firstAlumno.correo;
        this.passValue = firstAlumno.contrasena;
        this.userRole = 'alumno';
      }
    });
  }

  // Establece los datos de un profesor
  setProfesorData() {
    this.apiService.listProfes().subscribe((profesores) => {
      if (profesores.length > 0) {
        const firstProfesor = profesores[0];
        this.emailValue = firstProfesor.correo;
        this.passValue = firstProfesor.contrasena;
        this.userRole = 'profesor';

        // Después de cargar los datos, muestra el botón
        this.profesorButtonHidden = false;
      }
    });
  }
  async showInvalidCredentialsAlert() {
    if(this.translateService.currentLang=='English'){
      this.mensajeUtil.mensajeToast('error', 'The email or the password is incorrect. Please, try again.', 3000, 'bottom');
    }if(this.translateService.currentLang=='Español'){
      this.mensajeUtil.mensajeToast('error', 'El correo o la contraseña son incorrectos. Por favor, inténtelo de nuevo.', 3000, 'bottom');
    }if(this.translateService.currentLang=='Japanese'){
      this.mensajeUtil.mensajeToast('error', 'メールアドレスまたはパスワードが間違っています。もう一度試してください。', 3000, 'bottom');
    }
  }

  // Iniciar sesión

  login() {
    //this.usuarioService.getUser(user.value, pass.value);
    if (this.emailValue && this.passValue) {
      if (this.emailValue.includes('@profesor.duocuc.cl')){
        this.usuarioService.isAlumno = false;
      }if (this.emailValue.includes('@duocuc.cl')){
        this.usuarioService.isAlumno = true;
      }
      console.log(this.emailValue.includes('@duocuc.cl'))
      console.log(this.usuarioService.isAlumno)
      this.fireAuthService.login(this.emailValue, this.passValue);
      this.mensajeUtil.mensajeToast('success',"Bienvenido al Sistema!",2000,'bottom');
      //this.router.navigate(['home']);
    }   
  }

  /*login() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;

      // Combina las subscripciones a listAlumnos y listProfes usando forkJoin
      forkJoin([
        this.apiService.listAlumnos(),
        this.apiService.listProfes()
      ]).subscribe(([alumnos, profesores]) => {
        // Verifica si el usuario es un alumno
        const alumno = alumnos.find(alumno => alumno.correo === email && alumno.contrasena === password);

        if (alumno) {
          this.userRole = 'alumno';

          this.router.navigate(['home', { email: this.emailValue, password: this.passValue }]);
          if(this.translateService.currentLang=='English'){
            this.mensajeUtil.mensajeToast('success', 'Welcome Student!'+ " " + this.emailValue, 2000, 'bottom')
          }if(this.translateService.currentLang=='Español'){
            this.mensajeUtil.mensajeToast('success', 'Bienvenido Alumno!'+ " " + this.emailValue, 2000, 'bottom')
          }if(this.translateService.currentLang=='Japanese'){
            this.mensajeUtil.mensajeToast('success', 'ようこそ学生さん！'+ " " + this.emailValue, 2000, 'bottom')
          }
        } else {
          // Verifica si el usuario es un profesor
          const profesor = profesores.find(profesor => profesor.correo === email && profesor.contrasena === password);
          if (profesor) {
            this.userRole = 'profesor';
            // En LoginPage
            this.router.navigate(['home', { email: this.emailValue, password: this.passValue }]);
            if(this.translateService.currentLang=='English'){
              this.mensajeUtil.mensajeToast('success', 'Welcome Teacher!'+ " " + this.emailValue, 2000, 'bottom')
            }if(this.translateService.currentLang=='Español'){
              this.mensajeUtil.mensajeToast('success', 'Bienvenido Profesor'+ " " + this.emailValue, 2000, 'bottom')
            }if(this.translateService.currentLang=='Japanese'){
              this.mensajeUtil.mensajeToast('success', '先生、ようこそ！'+ " " + this.emailValue, 2000, 'bottom')
            }
          } else {
            // Si el usuario no coincide con ningún rol, muestra un mensaje de error
            this.showInvalidCredentialsAlert();
          }
        }
      });
    }
  }*/
  


}
