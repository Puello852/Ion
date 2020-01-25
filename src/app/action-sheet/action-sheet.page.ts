import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public acion_sheet:ActionSheetController) { }

  ngOnInit() {
  }

   async presentActionSheet(){
    const actionSheet = await this.acion_sheet.create({
      header: 'Opciones',
      buttons: [
       {
        text: 'Camara',
        icon: 'camera',
        handler: () => {
          console.log('Di click en camara');
        }
      }, {
        text: 'Galeria',
        icon: 'photos',
        handler: () => {
          console.log('Di click en galeria');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar click');
        }
      }]
    });
    await actionSheet.present();
   }

}
