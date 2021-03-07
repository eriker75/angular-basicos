import {Component} from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron man';
    edad: number = 45;

    obtenerInformacion(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 25;
    }
}