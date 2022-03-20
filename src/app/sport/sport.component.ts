import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor( private _service:NewsapiservicesService) { }
  sportsNewsDisplay:any = [];
  ngOnInit(): void {
    this._service.sportsNews().subscribe((result)=>{
      this.sportsNewsDisplay = result.articles;
    })

  }

}
