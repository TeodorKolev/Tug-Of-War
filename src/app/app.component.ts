import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {
  DEFAULT_PLAYER_PENALTY, PLAYER_ONE, PLAYER_ONE_KEY_CODE, PLAYER_TWO, PLAYER_TWO_KEY_CODE,
  VICTORY_PENALTY
} from '../globals/globals';
import {Subscription} from 'rxjs/Subscription';
import {EndingService} from './services/ending/ending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public playerOnePenalty = DEFAULT_PLAYER_PENALTY;
  public playerTwoPenalty = DEFAULT_PLAYER_PENALTY;
  public playerOneName: string = PLAYER_ONE;
  public playerTwoName: string = PLAYER_TWO;
  public gameEnded = false;
  public playerOneWins: boolean;
  private gameEndedSubscription: Subscription;

  constructor(private endingService: EndingService) {
  }

  public ngOnInit(): void {
    this.gameEndedSubscribe();
  }

  public ngOnDestroy(): void {
    this.gameEndedSubscription.unsubscribe();
  }

  /**
   * Subscribe to game end events. Restart game if it is ended
   */
  public gameEndedSubscribe(): void {
    this.gameEndedSubscription = this.endingService.endedEmitter.subscribe((gameEnded: boolean) => {
      if (gameEnded !== null && gameEnded !== undefined) {
        this.gameEnded = gameEnded;
        if (!gameEnded) {
          this.restartGame();
        }
      }
    });
  }

  /**
   * Listens for keyboard press. Detects pressed keys
   * @param event
   */
  @HostListener('document: keypress', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.gameEnded) {
      if (event.keyCode === PLAYER_ONE_KEY_CODE) {
        this.playerScore(true);
      } else if (event.keyCode === PLAYER_TWO_KEY_CODE) {
        this.playerScore(false);
      }
    }
  }

  /**
   * Set player score and checks for victory
   * @param playerOneScore
   */
  private playerScore(playerOneScore: boolean): void {
    if (playerOneScore) {
      this.playerTwoPenalty++;
      if (this.playerOnePenalty > 0) {
        this.playerOnePenalty--;
      }
      this.checkForVictory(this.playerTwoPenalty, true);
    } else {
      this.playerOnePenalty++;
      if (this.playerTwoPenalty > 0) {
        this.playerTwoPenalty--;
      }
      this.checkForVictory(this.playerOnePenalty, false);
    }
  }

  /**
   * Check for victory and fire game end if so. Define winner
   * @param playerPenalty
   * @param playerOneWins
   */
  private checkForVictory(playerPenalty: number, playerOneWins: boolean): void {
    if (playerPenalty >= VICTORY_PENALTY) {
      this.endingService.gameEnded();
      this.playerOneWins = playerOneWins;
    }
  }

  /**
   * Reset player penalties
   */
  public restartGame(): void {
    this.playerOnePenalty = DEFAULT_PLAYER_PENALTY;
    this.playerTwoPenalty = DEFAULT_PLAYER_PENALTY;
  }

}
