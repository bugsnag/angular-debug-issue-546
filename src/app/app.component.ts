import { Component } from '@angular/core';
import { WebService } from './web/web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private webService: WebService) { }
  title = 'Eight';
  ngOnInit () {
    this.webService.go()
  }
}
