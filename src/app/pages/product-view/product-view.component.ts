import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../../interfaces/iproducto';
import { BotonComponent } from "../../components/boton/boton.component";

@Component({
  selector: 'app-product-view',
  imports: [BotonComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  ProductoService = inject(ProductoService);
  activatedRoute = inject(ActivatedRoute);

  miProducto!: IProducto;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async(params: any) =>{
      let _id: string = params._id as string;
      
       try {
        this.miProducto = await this.ProductoService.getById(_id);
      } catch (err) {
        console.log("Error al llamar a la API: "+ err);
      }
    });
 }
}
