import { Component, OnInit } from '@angular/core';
import { WydatkiService } from '../wydatki.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit {

constructor(private wydatkiService: WydatkiService) { }

  ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
  }
}
<<<<<<< HEAD
usunWydatek(id: number) {
    this.wydatkiService.usunWydatek(id);
  }
=======
>>>>>>> 5b21067205b5fc22ff195b724fbb5ae4f20a4bd1