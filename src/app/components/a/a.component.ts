import { Component, OnInit } from '@angular/core';
import { Servcomponent1Service } from 'src/app/servcomponent1.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {



  constructor(public _service: Servcomponent1Service) { }

  ngOnInit(): void {
  }

}
