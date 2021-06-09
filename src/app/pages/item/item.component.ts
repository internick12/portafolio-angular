import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-completo.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id: string = '';

  constructor( private route: ActivatedRoute, public productoService: ProductosService ) { 
    
  }

  ngOnInit(): void {

    this.route.params.subscribe( parametros => {

      console.log( this.id );
      
      this.productoService.getProducto( parametros['id'] )
      .subscribe( (producto: any ) => {
        this.id = parametros['id'];
        this.producto = producto;
        console.log( this.id );
      }); 
    });

  }

}
