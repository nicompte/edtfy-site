import { Component, OnInit, Input } from '@angular/core';

import * as edtfy from 'edtfy';

@Component({
  selector: 'app-demo-row',
  templateUrl: './demo-row.component.html',
  styleUrls: ['./demo-row.component.css']
})
export class DemoRowComponent implements OnInit {

  output: string;
  _input: string;
  _locale: string;

  @Input('input')
  set input(_input: string) {
    this._input = _input || '';
    this.parse(_input);
  }
  @Input('locale')
  set locale(_locale: string) {
    this._locale = _locale;
    this.parse(this._input);
  }

  constructor() { }

  ngOnInit() {
  }

  parse(input) {
    try {
      this.output = edtfy(input, { locale: this._locale });
    } catch (e) {
      this.output = input ? 'The date could not be parsed.' : '';
    }
  }

}
