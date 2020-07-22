import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-otp',
  templateUrl: './comp-otp.component.html',
  styleUrls: ['./comp-otp.component.css']
})
export class CompOtpComponent implements OnInit {

  @Output()
  backEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  moveBack() {
    const value = true;
    this.backEvent.emit(value);
  }

}
