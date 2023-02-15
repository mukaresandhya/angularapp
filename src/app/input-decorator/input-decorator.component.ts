import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  @Input() child: string;

  @Input() title:'';
  @Input() content :'';
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    
  }
 
}
