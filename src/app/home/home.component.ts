import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Layout } from '../models/layout.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  cardsLayout: Observable<Layout>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cardsLayout = merge(
      this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.XSmall, Breakpoints.Small]).pipe(
        map(({ matches }) => {
          if (matches) {
            console.debug('👉🏽 handset layout activated',);
            return this.getHandsetLayout();
          }
          return this.getDefaultLayout();
        })),
      this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
        map(({ matches }) => {
          if (matches) {
            console.debug('👉🏽  tablet layout activated', this.cardsLayout);
            return this.getTabletLayout();
          }
          return this.getDefaultLayout();
        })),
      this.breakpointObserver.observe(Breakpoints.Web).pipe(
        map(({ matches }) => {
          if (matches) {
            console.debug('👉🏽  web layout activated', this.cardsLayout);
            return this.getWebLayout();
          }
          return this.getDefaultLayout();
        }))
    );

  }

  getHandsetLayout(): Layout {
    return {
      name: 'Handset',
      gridColumns: 1,
      layoutItem: [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }

  getTabletLayout(): Layout {
    return {
      name: 'Tablet',
      gridColumns: 4,
      layoutItem: [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }

  getWebLayout(): Layout {
    return {
      name: 'Web',
      gridColumns: 12,
      layoutItem: [
        { title: 'Card 1', cols: 4, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 5', cols: 2, rows: 1 },
        { title: 'Card 6', cols: 2, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }

  getDefaultLayout() {
    return {
      name: 'default',
      gridColumns: 1,
      layoutItem: [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }
}
