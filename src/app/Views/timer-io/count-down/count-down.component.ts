import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TimerServiceService } from 'src/app/Servieces/timer-service.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent {

  public timer:number=0;

  constructor(private timerService: TimerServiceService){
    
    this.timerService.timer.subscribe(value=>{

      this.timer = value;

      var timeInterval = setInterval( ()=>{ 
        this.timer = this.timer - 1;
        if(this.timerService.isPauseTimer){
          this.timerService.isPauseTimer=false;
          this.timerService.pausedArray.push(this.timer)
          clearInterval(timeInterval);
        }
      }, 1000);

    })



  }


}
