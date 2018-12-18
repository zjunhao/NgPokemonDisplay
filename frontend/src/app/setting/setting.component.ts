import { Component, OnInit } from '@angular/core';
import { SharedService } from './../common/services/shared.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  theme: string;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.theme$.subscribe(theme => {
      this.theme=theme;
    });
  }

  changeTheme(){
    this.sharedService.changeTheme(this.theme);
  }
}
