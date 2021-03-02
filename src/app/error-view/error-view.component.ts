import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss']
})
export class ErrorViewComponent implements OnInit {

  @Input() errorMessage: string = "Page not Found";
  @Input() errorCode: number = 404;

  constructor() { }

  ngOnInit(): void {
  }

}
