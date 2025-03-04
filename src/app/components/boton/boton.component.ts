import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-boton',
  imports: [RouterLink],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  productoService = inject(ProductoService);
  router = inject(Router);

  @Input() _id: string = '';
  @Input() parent: string = '';
}
