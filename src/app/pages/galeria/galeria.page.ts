import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(
        // 2) Injeta dependências
        public auth: AngularFireAuth,
        private router: Router,
        public alert: AlertController,
        public menuCtrl: MenuController
  ) { }

  ngOnInit() {  }

  // 4) Método de login
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

      // Se o login funcionar
      .then(
        (data: any) => {
          this.feedback(data.user.displayName);
        }
      )

      // Se o login falhar
      .catch(
        (error) => {
          console.log(error)
        }
      );
  }

    // 5) Feeback e saida da página
    async feedback(userName: string) {
      const alert = await this.alert.create({
        header: `Olá ${userName}!`,
        message: 'Você já pode usar nosso aplicativo.',
        buttons: [
          {
            text: 'Sou confeiteira(o)!',
            handler: () => {
              this.router.navigate(['/portifolio']);
            }
          },         
          
          {
          text: 'Sou cliente!',
          handler: () => {
            this.router.navigate(['/homepage']);
          }
        }]
      });
  
      await alert.present();
    }

}
