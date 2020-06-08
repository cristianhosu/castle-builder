import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stables-app';
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('Stables-App');
    console.log(this.activateRoute);
  }
}
