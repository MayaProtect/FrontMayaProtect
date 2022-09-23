import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class HivesService {

  constructor(private http: HttpClient) { }

  get_all_hives(): Observable<any> {
    return this.http.get<hiveResult>('http://localhost:3000/api/hives');
  }

  get_hives_pagination(limit: number, page: number) {
    return this.http.get<hiveResult>('http://localhost:3000/api/hives?limit=' + limit +  '&page=' + page);
  }
}

interface hiveResult {
  count_hives: number,
  actual_page: number,
  elements_per_page: number,
  hives: Array<Object>
}
