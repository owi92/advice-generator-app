import { RestApiService } from './../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isVisible: string = 'true';
  advNo?: number;
  advice?: string;

  constructor(public restApi: RestApiService) {}

  onClick() {
    this.isVisible = this.isVisible === 'true' ? 'false' : 'true';
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
