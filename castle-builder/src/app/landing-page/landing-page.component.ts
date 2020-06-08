import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { apps } from '../shell/shell.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  showPopup = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(appName) {
    const targetApp = apps.find((f) => f.appName === appName);
    if (targetApp.flags.disabled) {
      this.showPopup = true;
    } else {
      this.router.navigateByUrl(`/${appName}`);
    }
  }

  closeModal() {
    this.showPopup = false;
  }
}
