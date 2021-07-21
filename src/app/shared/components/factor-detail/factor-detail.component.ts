import { Component, Input, OnInit } from '@angular/core';
import { Factor } from '../../models/factor';

@Component({
  selector: 'ng-factor-detail',
  templateUrl: './factor-detail.component.html',
  styleUrls: ['./factor-detail.component.scss']
})
export class FactorDetailComponent implements OnInit {

  constructor() {
  }

  @Input() factor: Factor;

  ngOnInit(): void {
  }

}
