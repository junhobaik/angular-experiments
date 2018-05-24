import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppoterService {
  constructor() {}

  add(a, b) {
    console.log(`[service] ${a} + ${b}`);
    return a + b;
  }
}
