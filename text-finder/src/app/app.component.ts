import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'text-finder';
  searchTerms : string = "";
  isCaseSensitive : boolean = false;
}
