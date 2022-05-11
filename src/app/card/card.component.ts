import { RestApiService } from './../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  advNo?: number;
  advice?: string;

  constructor(public restApi: RestApiService) {}

  onClick() {
    this.restApi.getAdvice().subscribe((data) => {
      this.processData(data);
    });
  }

  processData(data: any): void {
    this.advNo = data.slip.id;
    this.advice = data.slip.advice;
  }

  ngOnInit(): void {
    this.onClick();
  }
}
