import {Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { HivesService } from "../../services/hives.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentChecked {
  dataIsReady: Boolean = false
  hives_data: Object = [];
  count_hives: number = 0;
  elements_per_page: number = 0;
  constructor(private api:HivesService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.api.get_all_hives().subscribe((data) => {
      this.hives_data = data.hives;
      this.count_hives = data.count_hives;
      this.dataIsReady = true;
    })
  }

  title = 'Maya Protect';

  update(selected: any) {
    let page_selected = (selected.first / selected.rows) + 1;
    this.hives_data = [];
    this.api.get_hives_pagination(selected.rows, page_selected).subscribe((data) => {
      this.hives_data = data.hives;
      this.count_hives = data.count_hives;
    })
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
