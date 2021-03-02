import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  @Input() errorMessage: string = "Page not Found";
  @Input() errorCode: number = 404;

  constructor() { }

  ngOnInit(): void {
  }

}
