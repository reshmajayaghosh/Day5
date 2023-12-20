import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
delete(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private api:ApiService){}

  ngOnInit(){
    this.fetchData()
  }
  data:any

  fetchData(){
    this.api.getData().subscribe((response:any) =>{
      this.data=response;
    }
 ) }

}
