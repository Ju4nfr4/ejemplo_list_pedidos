import { Component, Input, OnInit } from '@angular/core';

import {FormBuilder, NgForm} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ListaPedidosPage } from '../lista-pedidos/lista-pedidos.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  formulario: any;
  limpiar: boolean = false;


  usuario = {
    email:'',
    password:''
  }
  
  constructor(private _formBuilder: FormBuilder,
              private modalCtrl: ModalController ) { }

  ngOnInit() {
    // this.formLogin = this._formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.required
    //   ]))

    // });
  }

  async onSubmit(){
    console.log(this.usuario);

    if(this.usuario.email == 'a' && this.usuario.password == 'a'){
      const modal = await this.modalCtrl.create({
            component: ListaPedidosPage,
          });
          await modal.present();
    }else{
      alert('Email o contraseña erroneos');
    }

    this.resetear();
    // const modal = await this.modalCtrl.create({
    //   component: ModalInfoPage,
    //   componentProps: {
    //     this.usuario.
    //   }
    // })
  }

 

  resetear(){
    this.usuario.email= '';
    this.usuario.password = '';
    
    return false;
  }
  

}
