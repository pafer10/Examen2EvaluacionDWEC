import { Component, Input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-producto-card',
  imports: [BotonComponent],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {

  @Input() miProducto!: IProducto;
}
