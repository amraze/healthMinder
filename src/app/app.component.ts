import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  showFooter: boolean = false;
  showNavbar: boolean = false;
  ngOnInit(): void { }

  changeOfRoutes() {
    const url = this.router.url;
    console.log(url);
    this.showFooter = !url.includes("login") && !url.includes("admin") && !url.includes("dashboard");
    this.showNavbar = !url.includes("admin") && !url.includes("dashboard");
  }

}
