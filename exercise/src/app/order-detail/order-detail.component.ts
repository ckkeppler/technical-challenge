import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[order-detail]',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  @Input() order: any;
  openedAddress: boolean = false;
  openedItems: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public keepOriginalOrder = (a: any, b: any) => a.key;

  public toggleAddress() {
    this.openedAddress = !this.openedAddress;
  }

  public toggleItems() {
    this.openedItems = !this.openedItems;
  }
}
