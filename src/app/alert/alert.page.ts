import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alerta:AlertController) { }

  ngOnInit() {
  }

  async openAlert(){
    const alert = await this.alerta.create({
      header: 'Mensaje enviado',
      message: 'Mensaje enviado exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alerta.create({
      header: '¿Estas seguro?',
      message: 'Deseas borrar este <strong>mensaje</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Se ha cancelado correctamente');
          }
        }, {
          text: 'Borrar',
          handler: () => {
            console.log('Borrado correctamente');
          }
        }
      ]
    });

    await alert.present();
  }

}
