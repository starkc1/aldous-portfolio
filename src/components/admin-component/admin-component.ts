import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; 
import { LoginService } from '../../services/login.service';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import * as _ from 'lodash';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


export interface InfoShape {
  name: string;
  title: string;
}

@Component({
    selector: 'app-admin-component',
    templateUrl: './admin-component.component.html',
    styleUrls: ['./admin-component.component.sass']
})
export class AdminComponent implements OnInit {

    constructor(
      private dataService : DataService,
      private loginService : LoginService
    ) {}

    loggedIn = true;
    title = "Login"
    username = '';
    password = '';

    loginInfo : Array<any>;
    ngOnInit(): void {
        this.loginService.getLogin.subscribe(
            response => {
                this.loginInfo = response;
            }
        )

        if (this.loggedIn) {
            this.getData();
        } 

    }

    checkLogin() {
        var username = this.username;
        var password = this.password;

        this.loginInfo.forEach(
            (item) => {
                if ( item.username == username && item.password == password ) {
                    this.loggedIn = true;
                    this.getData();
                }
            }
        )
    }

    rawInfo : Array<any>;
    infoColumns = ['Select', 'Name', "Title"]
    infoData : MatTableDataSource<InfoShape>;
    infoSelection = new SelectionModel<InfoShape>(true, []);
    newInfo = {
      name: "",
      title: ""
    };
    infoMasterToggle() {
      this.infoIsAllSelected() ? this.infoSelection.clear() : this.infoData.data.forEach( row => this.infoSelection.select(row));
    }
    infoIsAllSelected() {
      const numSelected = this.infoSelection.selected.length;
      const numRows = this.infoData.data.length;
      return numSelected === numRows;
    }
    deleteSelectedInfo() {
      this.dataService.deleteInfo(this.infoSelection.selected);
      this.infoSelection.clear()
    }
    addInfo() {
      this.dataService.addInfo(this.newInfo);
      this.newInfo = {
        name: "",
        title: ""
      }
    }

    about : Array<any>;
    education : Array<any>;
    skills : Array<any>;
    profExperience : Array<any>;
    volExperience : Array<any>;
    getData() {
        this.dataService.getInfo.subscribe(
            response => {
              this.rawInfo = _.filter(response, function(field) {
                return field["name"] != "";
              })
              this.infoData = new MatTableDataSource<InfoShape>(this.rawInfo);
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
      
          this.dataService.getSkills.subscribe(
            response => {
              this.skills = response;
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


}