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
  public total_page: number = 0;
  public loadingBody: Boolean = true;
  @Input() data_table: any = null;
  @Input('count_hives') count_hives: number = 0;
  @Input('elements_per_page') elements_per_page: number = 0;
  @Output() newNumberPage = new EventEmitter<any>();

  async ngOnInit() {
    this.total_page = Math.ceil(this.count_hives / this.elements_per_page);
    Object.keys(this.data_table[0]).forEach(key => {
      this.data_header.push(key)
    })
    this.data_display = this.data_table;
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
