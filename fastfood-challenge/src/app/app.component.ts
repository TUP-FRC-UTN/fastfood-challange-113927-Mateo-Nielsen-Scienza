import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocinaComponent } from "./cocina/cocina.component";
import { PointSellComponent } from "./point-sell/point-sell.component";
import { Pedido } from './models/pedido';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocinaComponent, PointSellComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood-challenge';

  pedidos: Pedido[] = [];
  pedidosCocinados: Pedido[] = [];
  pedidosParaEntregar: Pedido[] = [];
  pedidoEnCoccion: boolean = false;


  agregarPedido(pedido: Pedido){
    this.pedidos.push(pedido);
  }

  marcarCocinado(numeroPedido: number){

    const index = this.pedidos.findIndex(pedido => pedido.number === numeroPedido);
    if(index > -1){
      this.pedidosCocinados.push(this.pedidos[index]);
      this.pedidos.splice(index, 1);
      this.pedidoEnCoccion = true
    }
  }

  finalizarCoccion(pedido : Pedido){
    const index = this.pedidosCocinados.findIndex(p => p.number === pedido.number);
    if(index > -1){
      this.pedidosParaEntregar.push(this.pedidosCocinados[index]);
      this.pedidosCocinados.splice(index, 1);
      this.pedidoEnCoccion = false;
    }
  }
  
  entregarPedido(pedido: Pedido){
    const index = this.pedidosParaEntregar.findIndex(p => p.number === pedido.number);
    if (index  > -1){
      this.pedidosParaEntregar.splice(index, 1);
    }
  }

  
}
