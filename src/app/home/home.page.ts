import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  displayMoths = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  componentes:Compnente[] = [
    {
      icon:'american-football',
      name: 'Action-sheet',
      redirect: '/action-sheet'
    },
    {
      icon:'alert',
      name: 'Alert',
      redirect: '/alert'
    },
    {
      icon:'menu',
      name: 'Menu',
      redirect: '/menu'
    }
    ,
    {
      icon:'cash',
      name: 'algoritmo',
      redirect: '/tienda'
    }
  ]
  constructor(public menu:MenuController) {}

  toggle(){
    this.menu.toggle()
  }
}

interface Compnente {
  icon:string,
  name:string,
  redirect:string
}