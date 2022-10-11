import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class HivesService {
  private url: string = 'http://devel.api.mayaprotect.ovh/';

  constructor(private http: HttpClient) { }

  get_all_hives(): Observable<any> {
    return this.http.get<hiveResult>(this.url + 'hives');
  }

  get_hives_pagination(limit: number, page: number) {
    return this.http.get<hiveResult>(this.url + 'hives?limit=' + limit +  '&page=' + page);
  }

  get_event_of_hives(id: string) {
    let provisoire = {
      "count_events": 4,
      "elements_per_page": 4,
      "actual_page": 0,
      "events": [
        {
          "id": id,
          "description": "string",
          "createdAt": "2022-09-27T20:08:04.184Z",
          "creator": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string"
          }
        },
        {
          "id": id,
          "description": "string",
          "createdAt": "2022-09-27T20:08:04.184Z",
          "creator": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string"
          }
        },
        {
          "id": id,
          "description": "string",
          "createdAt": "2022-09-27T20:08:04.184Z",
          "creator": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string"
          }
        },{
          "id": id,
          "description": "string",
          "createdAt": "2022-09-27T20:08:04.184Z",
          "creator": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "string"
          }
        }

      ]
    };
    return provisoire;
  }
  putEvent(id: string, body: any) {
    let myHead = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
    let requestUrl = this.url + 'hives/' + id + '/events';
    this.http
      .put<any>(requestUrl, body, { headers: myHead })
      .subscribe(res => {
        console.log(res);
      });
  }

}

interface hiveResult {
  count_hives: number,
  actual_page: number,
  elements_per_page: number,
  hives: Array<Object>
}

interface eventsResult {
  count_events: number,
  elements_per_page: number,
  actual_page: number,
  events: Array<Object>
}
