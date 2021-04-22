import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;
  
  constructor() { 
    console.log(this.name + " - constructor");
  }

  ngOnInit(): void {
    console.log(this.name + " - ngoninit");
  }

  ngOnChanges(){
    console.log(this.name + " - onchanges");
  }

  ngOnDestroy(){
    console.log(this.name + " - ondestroy");
  }

  ngAfterContentInit(){
    console.log(this.name + " - ngAfterContent");
  }
}
