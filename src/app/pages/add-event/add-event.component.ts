import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  value1: any;

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Maya Protect';
}
