import { Component, OnInit } from '@angular/core';
import { SuppoterService } from './suppoter.service';

@Component({
  selector: 'app-service-ex',
  templateUrl: './service-ex.component.html',
  styleUrls: ['./service-ex.component.css']
})
export class ServiceExComponent implements OnInit {
  result: number;
  // private calculator: SuppoterService;

  constructor(public calculator: SuppoterService) {
    // this.calculator = new SuppoterService();
  }

  ngOnInit() {
    this.add(1, 2);
  }

  add(a, b) {
    this.result = this.calculator.add(a, b);
  }
}
