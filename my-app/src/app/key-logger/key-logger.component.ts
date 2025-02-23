
import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent {
  input = viewChild<ElementRef>('keyContainer');
  keys = '';
  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    logger$.subscribe(evt => this.keys += evt.key);
  }
}
