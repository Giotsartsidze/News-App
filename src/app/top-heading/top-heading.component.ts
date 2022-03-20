import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  topHeadingDisplay:any = [];
  ngOnInit(): void {
    
    this._services.topHeading().subscribe((result)=>{
      this.topHeadingDisplay = result.articles;
      
    })
  }

}
