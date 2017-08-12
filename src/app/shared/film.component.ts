import { Component, Input } from '@angular/core';

@Component({
    selector: 'film-component',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {
    remove() {
        alert("Eliminar");
    }
}