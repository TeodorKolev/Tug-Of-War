import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EndingService {

  public endedState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public endedEmitter: Observable<boolean> = this.endedState.asObservable();

  constructor() {
  }

  public gameEnded(): void {
    this.endedState.next(true);
  }

  public gameStarted(): void {
    this.endedState.next(false);
  }

}
