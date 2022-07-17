import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue:string = '';

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
