import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Iron Man','Hulk','Thor','Goku'];
  heroeBorrado: string | undefined  = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift();
  }
  /*
  hayMasPorBorrar() : boolean {
    if(this.heroes.length > 0){
      return true;
    } else {
      return false
    }
  }
  */

}
