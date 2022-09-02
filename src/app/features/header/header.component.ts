import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: any;
  @Input('title') my_value: string = "";
  constructor() {

  }

  ngOnInit(): void {
    this.title = this.my_value
  }
}
