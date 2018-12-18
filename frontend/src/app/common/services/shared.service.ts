import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private theme = new BehaviorSubject('pokemon-dark-theme'); // initial value of this argument doesn't matter, since app component will reset this value when it is constructed
  theme$ = this.theme.asObservable(); 

  constructor() { }

  changeTheme(newtheme: string) {
    this.theme.next(newtheme);
  }
}
