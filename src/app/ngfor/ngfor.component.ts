import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title : string= 'Top 3 bolywood Movies';
  
  movies : Movie[] =[
    {title:'3 iditos',director:'Rajkumar',cast:'Amir',releaseDate:'2009'},
    {title:'Tumbad',director:'Rahi',cast:'Rahi',releaseDate:'2020'},
    {title:'Kantra',director:'Rishab',cast:'Rishab',releaseDate:'2022'}
  ]


  countryList: Array<any> = [
    { name: 'India', cities: ['Maharashtra', ,'Goa','Uttar Pradesh','Madhya Pradesh','Gujarat','Andhra Pradesh','Rajasthan'] },
    { name: 'America', cities: ['California','Alaska','Florida','Texas'] },

  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }


  constructor() { }

  ngOnInit() {
  }

}
