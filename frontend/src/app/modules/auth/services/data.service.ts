import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  showFilter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedYear: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  // selectedYear:any='';
  url: any = `${environment.api_url}/delete-bids`;
  apiUrl: any = `${environment.api_url}/bids`;
  sharebid: any = `${environment.api_url}/sharebid`;
  stats: any = `${environment.api_url}/stats`;

  addForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  filter: BehaviorSubject<any> = new BehaviorSubject<any>({});

  ngOnInit() {
    console.log('Selected Year in service:', this.selectedYear);
  }
  getBids(user: any, queryParams: any) {
    const perPage = queryParams.perPage || 10;
    if (user?.user?.is_admin == 0) {
      let url = `${this.apiUrl}/${user.user.id}?page=${
        queryParams.page
      }&perPage=${queryParams.perPage || perPage}`;
      if (queryParams.order) {
        url += `&order=${queryParams.order}&orderBy=${queryParams.orderBy}`;
      }
      return this.http.get(url);
    } else {
      let url = `${this.apiUrl}?page=${queryParams.page}&perPage=${
        queryParams.perPage || perPage
      }`;
      if (queryParams.order) {
        url += `&order=${queryParams.order}&orderBy=${queryParams.orderBy}`;
      }
      return this.http.get(url);
    }
  }

  getBidById(id: any) {
    return this.http.get(`${this.sharebid}/${id}`);
  }

  getstats(id: any = undefined, year: any) {
    const params = new HttpParams().set('year', year.toString()); // Add the year as a query parameter
    console.log('params', params);
    if (id) {
      return this.http.get(`${this.stats}/${id}`, { params: params });
    }
    return this.http.get(`${this.stats}`, { params: params });
  }

  addBid(payload: any) {
    return this.http.post(`${this.apiUrl}`, payload);
  }

  updateBid(payload: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, payload);
  }

  deleteBid(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  deleteBids(ids: number[]) {
    return this.http
      .delete(`${this.url}`, {
        body: { ids },
      })
     
  }


}
