import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  advNo: number = 117;
  advice: string =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.";

  constructor() {}

  ngOnInit(): void {}
}
