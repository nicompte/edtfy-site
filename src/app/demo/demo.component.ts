import { Component, OnInit, Input } from '@angular/core';
import { DemoRowComponent } from '../demo-row/demo-row.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  entryComponents: [DemoRowComponent]
})
export class DemoComponent implements OnInit {

  @Input() inputs: [string];
  @Input() locale: string;

  constructor() { }

  ngOnInit() {
  }

}
