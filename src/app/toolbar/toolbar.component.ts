import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

//var csvdb = require('csvdb');
//const db =  csvdb("logs.csv", ["id","name","url"], ",");
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  private query = '';
  searchForm = new FormControl('');
filterForm=new FormControl('');
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  startSearch() {

    this.query = this.filterForm.value +":"+ this.searchForm.value;
    this.search.emit(this.query);
  }
}
