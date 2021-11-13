import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {

  public timer: Subject<any> = new Subject();

  public isPauseTimer: boolean = false;

  public pausedArray:any=[];

  public isResetTime:Boolean=false;

  constructor() { }

}
