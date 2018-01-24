import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
  styleUrls: ['./locale-switcher.component.css']
})
export class LocaleSwitcherComponent implements OnInit {

  @Input() locale;

  constructor() { }

  ngOnInit() {
  }

}
