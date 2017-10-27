import { Component, Input, OnInit, Output } from '@angular/core';

import { HackernewApiService } from '../hackernew-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;
  constructor(private _hackerService: HackernewApiService) { }

  ngOnInit() {
  
  }

}
