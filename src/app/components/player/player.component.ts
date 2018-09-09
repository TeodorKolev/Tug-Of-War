import {Component, HostListener, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {DEFAULT_PLAYER_PENALTY, MINIMUM_WINDOW_WIDTH, PLAYER_ONE, STEP} from '../../../globals/globals';
import {Subscription} from 'rxjs/Subscription';
import {EndingService} from '../../services/ending/ending.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public playerPenalty: number;
  @Input() public playerName: string;
  private gameEndedSubscription: Subscription;
  public playerPosition: SafeStyle;
  public gameEnded = false;
  private innerWidth: number;

  constructor(private sanitizer: DomSanitizer,
              private endingService: EndingService) {
  }

  public ngOnInit(): void {
    this.gameEndedSubscribe();
    this.innerWidth = window.innerWidth;
  }

  public ngOnChanges(): void {
    this.setPlayerPosition(this.calculatePlayerPosition(this.playerPenalty));
  }

  public ngOnDestroy(): void {
    this.gameEndedSubscription.unsubscribe();
  }

  /**
   * Listens for window resize
   */
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * Subscribe to game end events. Reset player position if so
   */
  public gameEndedSubscribe(): void {
    this.gameEndedSubscription = this.endingService.endedEmitter.subscribe((gameEnded: boolean) => {
      if (gameEnded !== null && gameEnded !== undefined) {
        this.gameEnded = gameEnded;
        if (gameEnded) {
          this.setPlayerPosition(this.calculatePlayerPosition(DEFAULT_PLAYER_PENALTY));
        }
      }
    });
  }

  /**
   * Calculate player position. Stronger hands for small screens
   * @param playerPenalty
   */
  private calculatePlayerPosition(playerPenalty: number): string {
    return this.playerPosition = this.innerWidth <= MINIMUM_WINDOW_WIDTH ?
      ('calc(' + playerPenalty * STEP + '% / 2)').toString() :
      ('calc(' + playerPenalty * STEP + '%)').toString();
  }

  /**
   * Set player position base on calculated position
   * @param position
   */
  private setPlayerPosition(position: string): void {
    this.playerPosition = this.sanitizer.bypassSecurityTrustStyle(position);
  }

  /**
   * Define is current player player one or not
   */
  public isPlayerOne(): boolean {
    return this.playerName === PLAYER_ONE;
  }

}
