import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firebase';
  email = '';
  senha = '';
  constructor(private autenticador: Auth) {}

  logar() {
    signInWithEmailAndPassword(
      this.autenticador,
      'usuario@iffarroupilha.edu.br',
      'senha'
    );
  }
}
