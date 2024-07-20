import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MaterialModulesModule } from 'src/app/shared/material-module';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        {
          title: 'WORLD',
          cols: 1,
          rows: 1,
          content: 'This platform values ​​the value of your home',
          sub: 'Buying',
          tit: 'Eva, buyer from Cologne',
          subtit: ' Your Home | Starts with Scoperty',
          img: 'assets/img/pic1.jpg',
          con: 'Here Munich residents can see what their home is worth',
        },
        {
          title: 'Frankfurter Allgemeine',
          cols: 1,
          rows: 1,
          content: 'Bidding for a villa in the neighborhood',
          sub: 'selling',
          tit: 'Joe, seller from Berlin',
          subtit: ' Your Real Estate | Starts with Scoperty',
          img: 'assets/img/pic2.jpg',
          con: 'I found a option of contacting owners simply and ananomously via Scoperty',
        },
        {
          title: 'Southgerman newspaper',
          cols: 1,
          rows: 1,
          content:
            'Real estate costs more and more. But there are clear differences',
          sub: 'Rent',
          tit: 'Venisha, search for home from Hamburg',
          subtit: '  Your Broker Search | Starts with Scoperty',
          img: 'assets/img/pic3.jpg',
          con: ' Bidding for a villa in the neighborhood',
        },
        {
          title: 'Real Estate Newspaper',
          cols: 1,
          rows: 1,
          content: 'Scoperty now active nationwide',
          sub: 'your Property Valuation',
          tit: 'Shalu, land lord from Frankfurt',
          subtit: ' Your Property Purchase | Starts with Scoperty',
          img: 'assets/img/pic4.jpg',
          con: 'Real estate costs more and more. But there are clear differences',
        },
        {
          title: 'Evening newspaper Munich',
          cols: 1,
          rows: 1,
          content: 'Here Munich residents can see what their home is worth',
          sub: 'Property Valuation',
          tit: 'Lalli , from Erfurt',
          subtit: 'Your Property Purchase| Starts with Scoperty',
          img: 'assets/img/pic5.jpg',
          con: ' Scoperty now active nationwide',
        },
        {
          title: 'newspaper Munich',
          cols: 1,
          rows: 1,
          content: 'Here Munich  home is worth',
          sub: 'Property Selling',
          tit: 'Moully , from Paris',
          subtit: 'Your Property Selling| Starts with Scoperty',
          img: 'assets/img/pic6.jpg',
          con: 'Scoperty now everywhere',
        },
      ];
    })
  );

  pageName: any;

  constructor(
    public breakpointObserver: BreakpointObserver,

    public router: Router
  ) {}

  ngOnInit(): void {
    this.pageName = this.router.url.split('/').pop();
  }
}
