import { Component, OnInit } from '@angular/core';
import { Servcomponent2Service } from 'src/app/servcomponent2.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(public _service: Servcomponent2Service) { }

  ngOnInit(): void {
  }

}
