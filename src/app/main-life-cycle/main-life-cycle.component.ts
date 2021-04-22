import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Client } from './client.model';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.css']
})
export class MainLifeCycleComponent implements OnInit {

  clients: Client[] = [];
  foods: string[] = ["Rice","Beans","Pizza"];
  name: string;
  age: number;
  food: string;
  editClient: Client = null;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    if(this.editClient != null)
        this.clients.push({
            name: this.name,
            age: this.age,
            food: this.food,
        });
  }

}
