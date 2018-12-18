import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  @Output() searchItemChange:EventEmitter<string> = new EventEmitter<string>();

  _searchStr: string;
  get searchStr(): string {
    return this._searchStr;
  }
  set searchStr(value: string) {
    this._searchStr = value;
    this.searchItemChange.emit(this.searchStr);
  }

  constructor() { }

  ngOnInit() {
  }


}
