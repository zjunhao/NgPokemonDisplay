import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('chgFontSize', [
      state('large', style({
        fontSize: '2.0em',
      })),
      state('small', style({
        fontSize: '1.3em',
      })),
      transition('small <=> large', [
        animate('1.5s ease-in-out'),
      ])
    ]),
  ]
})
export class AboutComponent implements OnInit {
  isSmallFont = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isSmallFont = !this.isSmallFont;
  }
}
