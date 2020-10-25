import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; 

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
        this.education = response;
      }
    )
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
