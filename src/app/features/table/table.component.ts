import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public data_display : any;
  public data_header: any = [];
  @Input('data_table') my_data: Array<any> = [];

  constructor() {
  }
  ngOnInit(): void {
    // fonction pour extraire les key du tableau
    Object.keys(this.my_data[0]).forEach(key => {
      this.data_header.push(key)
    })
    this.data_display = this.my_data;
  }
  displayedColumns: string[] = this.data_header;
}
