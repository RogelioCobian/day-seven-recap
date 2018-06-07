import { Component, OnInit } from '@angular/core';

class CarBrand {
  constructor(protected make: string ) {}
}

class Car extends CarBrand {
  // constructor() {}
  constructor(public make: string, public model: string, public year: number ) {
    super(make);
  }
  getDetails() {
    return(this.make = `${this.make}` , this.model = `${this.model}`, this.year = this.year);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ford: CarBrand = new CarBrand('Ford');
  honda: Car = new Car('Honda', 'Civic', 1996 );

  ngOnInit() {
    console.log(this.ford);
    console.log(this.honda.make);
  }

}
