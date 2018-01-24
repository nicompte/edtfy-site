import { Component, OnInit } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { LocaleSwitcherComponent } from '../locale-switcher/locale-switcher.component';
import { ActivatedRoute } from '@angular/router';

const dates = {
  en: {
    date: ['2003', 'March 2003', 'January the 30th, 2003', '02/10/1984'],
    interval: [
      'july 2003 - March 2005', 'from 10/3/2005 to 10/4/2005', 'between 2003 and 2005',
      'between around 2003 and april 2004', '1988 - unknown'
    ],
    uncertainApproximate: ['1984?', 'June 2004?', 'around March the 3rd, 2003', 'around 2003?'],
    unspecified: ['199u', 'April 19uu', 'uu/1999', '01/uu/1999', 'uu/uu/1999', '1*/10/19**'],
    season: ['Spring 2016', 'Fall 1973'],
    set: ['1967 or 1968 or 1969', 'Dec 4 2003, or Dec 5 2003', 'before march 2003'],
    multiple: ['1967 and 1968 and 1969', 'April 4 2003, and April 5 2003'],
    various: ['XIXth century', '3rd century', '21000', '-12000']
  },
  fr: {
    date: ['2003', 'mars 2003', '30 janvier 2003', '10/02/1984'],
    interval: [
      'juillet 2003 - mars 2005', 'du 3/10/2005 au 4/10/2005', 'entre 2003 et 2005',
      'entre environ 2003 et avril 2004', '1988 - inconnu'
    ],
    uncertainApproximate: ['1984 ?', 'Juin 2004 ?', 'environ le 3 mars 2003', 'environ 2003 ?'],
    unspecified: ['199u', 'avril 19uu', 'uu/1999', 'uu/01/1999', 'uu/uu/1999', '10/1*/19**'],
    season: ['printemps 2016', 'automne 1973'],
    set: ['1967 ou 1968 ou 1969', 'le 4 déc 2003 ou le 5 déc 2003', 'avant mars 2003'],
    multiple: ['1967 et 1968 et 1969', 'le 4 avril 2003 et le 5 avril 2003'],
    various: ['XIXè siècle', '3ème siècle', '21000', '-12000']
  }
};

@Component({
  selector: 'app-edtfy',
  templateUrl: './edtfy.component.html',
  styleUrls: ['./edtfy.component.css'],
  entryComponents: [DemoComponent, LocaleSwitcherComponent]
})
export class EdtfyComponent implements OnInit {
  dates;
  locale: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // his.locale = this.route.snapshot.paramMap.get('locale');
    this.route.params.subscribe(params => {
      this.locale = params['locale'] || 'en';
      this.dates = dates[this.locale];
    });
  }

}
