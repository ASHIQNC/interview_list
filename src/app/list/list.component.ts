import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  detail:any;
  selectedValue:any;
  Sel(e:any){
    this.selectedValue=e.target.value;
  }
  constructor(private api:ListService) { }

  ngOnInit(): void {
    this.api.getList().subscribe((data)=>{
      this.detail = data;
  })
}
}