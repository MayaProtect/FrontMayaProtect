import { Component, OnInit } from '@angular/core';
import { HivesService } from "../../services/hives.service";
import {ActivatedRoute} from "@angular/router";
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss'],
  providers: [MessageService]
})
export class DetailEventComponent implements OnInit {
  dataChart: any;
  dataWeight: any;
  dataWeightOption: any;
  dataSound: any;
  dataSoundOptions: any;
  chartOptions: any;
  dataIsReady: boolean = false;
  formNewEvent: any;
  addEvent: boolean = false;
  events_data: Object = [];
  count_events: number = 0;
  sub: any;
  data: any;
  constructor(private route: ActivatedRoute, private api: HivesService, private messageService: MessageService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    let provisoire;
    this.primengConfig.ripple = true;
    this.sub = this.route.params.subscribe(params => {
      this.data = params;
    })
    this.dataIsReady = true;
    provisoire = this.api.get_event_of_hives(this.data.id);
    console.log(provisoire);
    this.events_data = provisoire.events
    this.formNewEvent = [
      {key: 'id', value: this.data.id, title: 'Hive Id', type: 'inputText', ngModel: this.data.id, disabledBool: true},
      {key: 'eventType', value: 'event type', title: 'Event Type', type: 'inputText', ngModel: '', disabledBool: false},
      {key: 'description', value: 'description', title: 'Description', type: 'inputArea', ngModel: '', disabledBool: false}
    ]
    this.dataChart = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: 'degré',
          data: [34.5, 34.6, 34.7, 34.8, 34.9, 34.7, 34.7],
          fill: true,
          borderColor: '#F6F78A',
          tension: 0.5
        }
      ]
    };
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
    this.dataWeight = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
        {
          label: 'Kg',
          data: [35, 34.5, 34, 33.5, 33, 32, 31],
          fill: true,
          borderColor: '#F6F78A',
          tension: 0.5
        }
      ]
    };
    this.dataSound = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: 'dB',
          data: [60.2, 60.1, 60, 59.9, 59.8, 59.7, 59.6],
          fill: true,
          borderColor: '#F6F78A',
          tension: 0.5
        }
      ]
    };
  }

  addNewEvent(res: any) {
    let body = {
      'eventType': res[1].ngModel,
      'description': res[2].ngModel
    }

    try {
      this.api.putEvent(res[0].ngModel, body);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'The event is create'})
      this.formNewEvent = [
        {key: 'id', value: this.data.id, title: 'Hive Id', type: 'inputText', ngModel: this.data.id, disabledBool: true},
        {key: 'eventType', value: 'event type', title: 'Event Type', type: 'inputText', ngModel: '', disabledBool: false},
        {key: 'description', value: 'description', title: 'Description', type: 'inputArea', ngModel: '', disabledBool: false}
      ]
      this.addEvent = false;
      let test = this.api.get_event_of_hives(this.data.id)
      console.log(test);
    } catch (err) {
      console.log(err);
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'The event are not created'})
    }
  }

  addEventAction() {
    this.addEvent = !this.addEvent;
  }

  closeEvent() {
    this.addEvent = !this.addEvent;
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
