import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  

  count : number=0;
  data="";

  constructor() { }

  ngOnInit() {
  }

  onButtonClick()
  {
    console.log(`Button was clicked`);
    
  }

  afterButtonClick()
  {
    let counts=this.count +=1;
    console.log(counts);
    
  }

  
  onKeyUp(value)
  {
  
    // console.log(`$event`,value);
    this.data=value.target.value;
    console.log(this.data);
    
  }

}
