import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SharedService } from './common/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title: string = 'ng-pokedex';
  theme: string = 'pokemon-app-theme';

  constructor(overlayContainer: OverlayContainer, private sharedService: SharedService) {
    overlayContainer.getContainerElement().classList.add(this.theme);
    this.sharedService.changeTheme(this.theme);
  }

  ngOnInit() {
    this.sharedService.theme$.subscribe(theme => {
      this.theme=theme;
    });
  }
}
