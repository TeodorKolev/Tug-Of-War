import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {EndingService} from '../../services/ending/ending.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public playerOneWins: boolean;
  private gameEndedSubscription: Subscription;
  public gameEnded: boolean;

  constructor(private endingService: EndingService) {
  }


  public ngOnInit(): void {
    this.gameEndedSubscribe();
  }

  public ngOnChanges(): void {
  }

  public ngOnDestroy(): void {
    this.gameEndedSubscription.unsubscribe();
  }

  /**
   * Subscribe to game end events
   */
  public gameEndedSubscribe(): void {
    this.gameEndedSubscription = this.endingService.endedEmitter.subscribe((gameEnded: boolean) => {
      if (gameEnded !== null && gameEnded !== undefined) {
        this.gameEnded = gameEnded;
      }
    });
  }

  /**
   * Fire game restart event
   */
  public restartGame(): void {
    this.endingService.gameStarted();
  }

}
