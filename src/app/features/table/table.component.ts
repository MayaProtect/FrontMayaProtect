import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  public data_display : any = [];
  public data_header: any = [];
  public loadingBody: boolean = true;
  @Input() data_table: any = null;
  @Input() count_hives: number = 0;
  @Input() route_link: string = '';
  @Input() isRouteOn: boolean = false;
  @Output() newNumberPage = new EventEmitter<any>();

  async ngOnInit() {
    Object.keys(this.data_table[0]).forEach(key => {
      let titleFormat = key.charAt(0).toUpperCase() + key.slice(1);;
      this.data_header.push({key: key, title: titleFormat.replace(/\_/g, ' ')})
    })
    this.data_display = this.data_table;
    this.loadingBody = false;
  }

  constructor() {

  }
  ngOnChanges() {
    this.data_display = this.data_table;
  }
  displayedColumns: string[] = this.data_header;

  loadHives (event: LazyLoadEvent) {
    this.newNumberPage.emit(event)
  }
}
