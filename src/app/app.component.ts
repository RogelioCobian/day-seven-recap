import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num: number = 4;
  str: string = 'hi';
  anything: any = 425;
  arr: any[] = [4, 7, 'Hello'];

}
