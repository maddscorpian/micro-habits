import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-habit-log',
  templateUrl: './habit-log.component.html',
  styleUrls: ['./habit-log.component.css']
})
export class HabitLogComponent implements OnInit {

  constructor(private http:HttpClient) { }


  name?:string;
  count?:number;

  habits?:any[]=[];



  habitLog : any[] = [];

  ngOnInit(): void {
    this.getHabits();
    this.refreshList();
  }

  getHabits(){

    
      this.http.get<any>(environment.API_URL+'habit')
      .subscribe((data: any[] | undefined)=>{
        this.habits=data;
      });
    

  }

  createHabitLog(){
    if (this.name === undefined){
      alert("Habit not selected.");
      return;
    }

    var val={
      name:this.name,
      count: this.count,
      ts:new Date()
    };

    this.http.post(environment.API_URL+'habit-log',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });

  }

  addHabitLog(): void {
    
  }


  refreshList(){
    this.http.get<any>(environment.API_URL+'habit-log')
    .subscribe(data=>{
      this.habitLog=data;
    });
  }

}
