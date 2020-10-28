import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; 
import * as _ from 'lodash';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.sass']
})
export class MainComponent implements OnInit {

  constructor(
    private dataService : DataService
  ) {}

  info : Array<any>;
  about : Array<any>;
  education : Array<any>;
  ngOnInit(): void {
    this.dataService.getInfo.subscribe(
      response => {
        this.info = response;
      }
    )

    this.dataService.getAbout.subscribe(
      response => {
        this.about = response;
      }
    )

    this.dataService.getEducation.subscribe(
      response => {
        this.education = this.sortBy(response, 'year');
      }
    )
  }

  sortBy(array, field) {
    var newArray;

    newArray = _.orderBy(array, [field], ['desc'])
    return newArray;
  }

  scrolling = false; 
  onScroll($event) {
    var scrollTop = $event.srcElement.scrollTop;

    if (scrollTop == 0) {
      this.scrolling = false;
    } else {
      this.scrolling = true;
    }
  }

}