import { Component, OnInit } from '@angular/core';
import { HivesService } from "../../services/hives.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
  dataIsReady: boolean = false
  events_data: Object = [];
  count_events: number = 0;
  sub: any;
  data: any;
  constructor(private route: ActivatedRoute, private api: HivesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.data = params;
    })
    this.dataIsReady = true;
    let test = this.api.get_event_of_hives(this.data.id);
    this.events_data = test.events;
    this.count_events = test.count_events;
  }
  update(selected: any) {
    /*
    let page_selected = (selected.first / selected.rows) + 1;
    this.events_data = [];
    this.api.get_hives_pagination(selected.rows, page_selected).subscribe((data) => {
      this.events_data = data.hives;
      this.count_events = data.count_hives;
    })
     */
  }
}
