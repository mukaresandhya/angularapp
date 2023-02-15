import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {

  @Output() fromChild:EventEmitter<string>=new EventEmitter<string>();

  lastname:string='Sandhya';

  constructor() { }

  ngOnInit() {
  }

  sendToparent()
  {
    this.fromChild.emit(this.lastname)
  }
}
