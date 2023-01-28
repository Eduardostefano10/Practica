import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {


  

  longText = `Esta pagina te ayudara a mejorar tu vida en la programación así que vamos sigamos adelante
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis libero asperiores architecto
  blanditiis fuga? Nemo autem maiores deleniti eveniet officiis. Quo explicabo consequuntur
  placeat fugiat nam. Et a recusandae porro! Esta pagina te ayudara a mejorar tu vida en la programación así que vamos sigamos adelante
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis libero asperiores architecto
  blanditiis fuga? Nemo autem maiores deleniti eveniet officiis. Quo explicabo consequuntur
  placeat fugiat nam. Et a recusandae porro
`
  constructor() { }

  ngOnInit() {
  }

}
