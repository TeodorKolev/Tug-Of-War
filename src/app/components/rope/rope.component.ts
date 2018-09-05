import {Component, HostListener, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {DEFAULT_PLAYER_PENALTY, MINIMUM_WINDOW_WIDTH, PLAYER_WIDTH, STEP} from '../../../globals/globals';
import {Subscription} from 'rxjs/Subscription';
import {EndingService} from '../../services/ending/ending.service';

@Component({
  selector: 'app-rope',
  templateUrl: './rope.component.html',
  styleUrls: ['./rope.component.scss']
})
export class RopeComponent implements OnInit, OnDestroy, OnChanges {

  @Input() public playerOnePenalty: number;
  @Input() public playerTwoPenalty: number;
  private gameEndedSubscription: Subscription;
  public ropePosition: SafeStyle;
  public ropeWidth: SafeStyle;
  private innerWidth: number;

  constructor(private sanitizer: DomSanitizer,
              private endingService: EndingService) {
  }

  public ngOnInit(): void {
    this.gameEndedSubscribe();
    this.innerWidth = window.innerWidth;
  }

  public ngOnChanges() {
    this.setRopePosition(this.playerOnePenalty);
    this.setRopeWidth(this.playerOnePenalty, this.playerTwoPenalty);
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
   * Subscribe to game end events. Reset rope position and width if so
   */
  public gameEndedSubscribe(): void {
    this.gameEndedSubscription = this.endingService.endedEmitter.subscribe((gameEnded: boolean) => {
      if (gameEnded !== null && gameEnded !== undefined) {
        if (gameEnded) {
          this.setRopePosition(DEFAULT_PLAYER_PENALTY);
          this.setRopeWidth(DEFAULT_PLAYER_PENALTY, DEFAULT_PLAYER_PENALTY);
        }
      }
    });
  }

  /**
   * Set rope position based on player penalties
   * @param playerOnePenalty
   */
  private setRopePosition(playerOnePenalty: number): void {
    this.ropePosition = this.innerWidth <= MINIMUM_WINDOW_WIDTH ?
      this.sanitizer.bypassSecurityTrustStyle('calc(' + playerOnePenalty * STEP + '% / 2' + ' + ' + PLAYER_WIDTH + 'px)') :
      this.sanitizer.bypassSecurityTrustStyle('calc(' + playerOnePenalty * STEP + '%' + ' + ' + PLAYER_WIDTH + 'px)');
  }

  /**
   * Set rope width based on both players penalties. Rope is shorter for small screens
   * @param playerOnePenalty
   * @param playerTwoPenalty
   */
  private setRopeWidth(playerOnePenalty: number, playerTwoPenalty: number): void {
    this.ropeWidth = this.innerWidth <= MINIMUM_WINDOW_WIDTH ?
      this.sanitizer.bypassSecurityTrustStyle(
        'calc(' + (100 - ((playerOnePenalty * STEP / 2) + (playerTwoPenalty * STEP / 2))) + '% - ' + 2 * PLAYER_WIDTH + 'px') :
      this.sanitizer.bypassSecurityTrustStyle(
        'calc(' + (100 - ((playerOnePenalty * STEP) + (playerTwoPenalty * STEP))) + '% - ' + 2 * PLAYER_WIDTH + 'px');
  }

}
