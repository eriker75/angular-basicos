import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

//Componentes a importar en nuestro modulo
import {ContadorComponent} from './contador/contador.component'; 

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule{
    
}