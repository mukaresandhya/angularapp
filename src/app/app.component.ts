import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]


  parentToChild : string='I am Coming From parent';
  title = 'angularapp';
  name= 'Sandhya';
  empCount;
  data={
    name :'Codemind',
    dept : 'IT'
  }

  imageurl='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  constructor(){
    this.getValueFromServer();
  }
  getValueFromServer()
{
  this.empCount=10000;
}
currentTime():any
{
  let date=new Date()
  date.getDate();
  return date;
}

onParent(val)
{
  console.log(`from child to parent`,val);
  
}

}
