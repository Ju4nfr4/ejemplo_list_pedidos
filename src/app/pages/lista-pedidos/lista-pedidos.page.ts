import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.page.html',
  styleUrls: ['./lista-pedidos.page.scss'],
})
export class ListaPedidosPage implements OnInit {

  usuarios: Observable<any>;

  constructor(private modalCtr: ModalController,
              private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();
  }

  salirSinArgumentos(){
    console.log('dismiss');
    this.modalCtr.dismiss({
    });
  }


}
