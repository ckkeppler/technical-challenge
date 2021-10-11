import { Component, OnInit } from '@angular/core';
import data from '../../../../../technical-challenge/data.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data = data;
  headers = [
    'Order ID',
    'Customer ID',
    'First Name',
    'Last Name',
    'Address',
    'Order Amount',
    'Order Date',
    'Items Ordered',
  ];
  p: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
