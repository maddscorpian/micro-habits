import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {

  constructor(private http:HttpClient) { }

  habits:any[] = [];

  name?:string;
  logo?:string

  ngOnInit(): void {
    this.refreshList();
  }

  addHabit(): void {
    
  }

  getHabits(): void{
    
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'habit')
    .subscribe(data=>{
      this.habits=data;
      
    });
  }

  createHabit(){
    var val={
      name:this.name,
      logo:this.logo
    };

    this.http.post(environment.API_URL+'habit',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });

  }

}
