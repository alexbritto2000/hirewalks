import { Component, OnInit } from '@angular/core';
import { Appservice } from '../../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiData:any;
  api:any;
  officeName:any;
  jobName:any;
  logo:any;
  review_count:any;
  rate:any;
  company_profile:any;
  min_exp:any;
  max_exp:any;
  location:any;
  from:any;
  length:any;
  p: number = 1;

  constructor(private appservice:Appservice, private http:HttpClient) { }

  ngOnInit(): void {
    this.appservice.getSitedata().subscribe(data=>{
      this.apiData = data;
      const resultArray = Object.keys(this.apiData).map(index => {
        let person = this.apiData[index];
        return person;
      });
      this.api = resultArray[0];
      console.log(this.api,'ajs',this.api[0].categories[0].name,'api');
      this.jobName=this.apiData.data[0].categories[0].name;
      this.officeName=this.apiData.data[0].vendor.company_name;
      this.logo=this.apiData.data[0].vendor.logo;
      this.review_count=this.apiData.data[0].vendor.review_count;
      this.rate=this.apiData.data[0].vendor.rate;
      this.company_profile=this.apiData.data[1].vendor.company_profile;
      this.min_exp=this.apiData.data[1].min_exp;
      this.max_exp=this.apiData.data[1].max_exp;
      this.location=this.apiData.data[0].locations[1];
      this.from=this.apiData.data[0].salary_pay.yearly_from;

      console.log(this.api,'length');
      this.location=this.apiData.data;
      console.log(this.from,'From');
      console.log(this.location,'Location');
      console.log(this.max_exp,'max exp');
      console.log(this.min_exp,'min exp')
      console.log(this.company_profile,'Company Profile');
      console.log(this.rate,'Rate');
      console.log(this.review_count,'Review count');
      console.log(this.logo,'Logo');
      console.log(this.officeName,'officeName');
      console.log(this.jobName,'jobName');
      console.log(this.apiData);
    });
  }

}
