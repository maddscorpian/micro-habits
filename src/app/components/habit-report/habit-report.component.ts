import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habit-report',
  templateUrl: './habit-report.component.html',
  styleUrls: ['./habit-report.component.css']
})
export class HabitReportComponent implements OnInit {

  constructor(private http:HttpClient) { }

  habitLog : any[] = []; 
  resultData : any[] = []; 

  ngOnInit(): void {
    this.refreshList();
    
  }



  refreshList(){
    this.http.get<any>(environment.API_URL+'habit-log')
    .subscribe(data=>{
      this.habitLog=data;
      //console.log(this.habitLog);
      let gdata = new Set(this.habitLog.map(item => item.ts.split('T')[0]));
      
      gdata.forEach((date)=>{
        this.resultData.push({
           date: date, 
           habits : this.habitLog.filter(item=>item.ts.split('T')[0] == date)
         })
   })
   console.log(this.resultData);

   

    });
  }
 
}
