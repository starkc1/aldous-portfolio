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
  skills : Array<any>;
  projects : Array<any>;
  profExperience : Array<any>;
  volExperience : Array<any>;
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

    this.dataService.getSkills.subscribe(
      response => {
        this.skills = response;
      }
    )

    this.dataService.getProjects.subscribe(
      response => {
        console.log(response);
        this.projects = response;
      }
    )

    this.dataService.getProffessionalExperience.subscribe(
      response => {
        this.profExperience = response;
      }
    )

    this.dataService.getVolunteerExperience.subscribe(
      response => {
        this.volExperience = response;
      }
    )
  }

  sortBy(array, field) {
    var newArray;

    newArray = _.orderBy(array, [field], ['desc'])
    return newArray;
  }

  scrolling = false;
  showTitle = false;
  onScroll($event) {
    var scrollTop = $event.srcElement.scrollTop;

    if (scrollTop == 0) {
      this.scrolling = false;
    } else {
      if (scrollTop > 200)
        this.showTitle = true;
      else
        this.showTitle = false;
      this.scrolling = true;
    }
  }

}