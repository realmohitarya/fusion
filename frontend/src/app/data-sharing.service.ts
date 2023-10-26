// data-sharing.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private sharedData: any;
  test: any;

  setSharedData(data: any) {
    this.sharedData = data;
  }

  setObject(data: any) {
    this.test = data;
  }
  getObject() {
    return this.test;
  }

  getSharedData() {
    return this.sharedData;
  }
}
