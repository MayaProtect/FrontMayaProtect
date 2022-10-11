import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dataForm: any;
  @Output() putData = new EventEmitter<any>();
  @Output() openStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  registerNewEvent() {
    this.putData.emit(this.dataForm)
  }

  closeEvent() {
    this.openStatus.emit();
  }
}
