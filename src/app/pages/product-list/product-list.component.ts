import { Component, inject } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { ProductoService } from '../../services/producto.service';
import { ProductoCardComponent } from "../../components/producto-card/producto-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductoCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  arrProductos: IProducto[];
  productService = inject(ProductoService);

  constructor() {
    this.arrProductos = [];
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response => {
     if (response.results) {
      this.arrProductos = response.results;
     } else {
      this.arrProductos = [];
     }
    });
  }
}
