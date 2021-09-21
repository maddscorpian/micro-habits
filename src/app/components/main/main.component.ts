import { Component, OnInit } from '@angular/core';
import { Habit } from 'src/app/models/habit';
import { HABITS } from 'src/app/models/stubs/mock-habits';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  habits? : Habit[];

  constructor() { }

  getHabits(){
    return this.habits;
  }

  ngOnInit(): void {
    this.habits = HABITS;
  }

}
