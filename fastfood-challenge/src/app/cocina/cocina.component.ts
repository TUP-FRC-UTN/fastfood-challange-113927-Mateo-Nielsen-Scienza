import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {

  @Input() pedidos!: Pedido[];
  @Output() pedidoCocinado = new EventEmitter<number>();

  cocinar(numeroPedido: number){
    this.pedidoCocinado.emit(numeroPedido);
  }

  
}
