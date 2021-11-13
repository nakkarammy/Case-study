import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/Servieces/timer-service.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.css']
})
export class TimerLimitComponent implements OnInit {

  public timer: number=0;

  constructor(public timerService: TimerServiceService) { }

  ngOnInit(): void {
  }

  timerChange(){
    this.timerService.timer.next(this.timer);
  } 

  pauseTimer(){
    this.timerService.isPauseTimer = true;
  }

  resetTimer(){
    this.timerService.isResetTime=true;
    this.timerService.timer.next(0);
    this.pauseTimer();
  }

}
