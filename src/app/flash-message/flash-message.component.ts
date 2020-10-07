import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit, OnChanges {
@Input() message : string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   
  }

  ngOnInit() {
  }

}
