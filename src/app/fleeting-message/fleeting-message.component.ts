import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleeting-message',
  templateUrl: './fleeting-message.component.html',
  styleUrls: ['./fleeting-message.component.scss']
})
export class FleetingMessageComponent implements OnInit {
  @Input() message : String;
  isVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 2000);
  }

}
