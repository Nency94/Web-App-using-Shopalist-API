import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: Text;
  constructor() { }

  ngOnInit() {
  }

  onEnter(value) {
    console.log(value);
  }
}