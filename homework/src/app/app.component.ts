import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newtitle = 'ToDo List';

  list:any[]=[];

  addtask(item:string){
    this.list.push({id:this.list.length , name:item});
     console.log(this.list);
  }

  removetask(id:number){
     this.list=this.list.filter(item => item.id !==id);
  }
}