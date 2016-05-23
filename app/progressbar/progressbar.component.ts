import {Component, Input} from '@angular/core';
import {  ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'progress-bar',
    templateUrl: 'app/progressbar/progressbar.component.html',
    directives:[ROUTER_DIRECTIVES]

})
export class ProgessBarComponent {
    @Input() 
    progess:number;
    
}
