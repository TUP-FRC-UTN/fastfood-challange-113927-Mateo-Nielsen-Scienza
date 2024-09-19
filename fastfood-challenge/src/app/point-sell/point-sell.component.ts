import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-point-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-sell.component.html',
  styleUrl: './point-sell.component.css'
})
export class PointSellComponent {

  nombreCliente!: string;
  descripcionPedido!: string;
  

  @Output() nuevoPedido = new EventEmitter<Pedido>();

  ordenar(){
    const pedido = new Pedido(
      Math.floor(Math.random() * 1000),
      this.nombreCliente,
      this.descripcionPedido,
      new Date()
    );
    this.nuevoPedido.emit(pedido);
    this.nombreCliente = '';
    this.descripcionPedido = '';
    
  }



}
