import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from './logger.service'; // da's de service die ik zonet heb aangemaakt

let nextId = 1;

// Spy on any element to which it is applied
// Usage: <div appSpy>...</div>
@Directive({ // dat is nu dus de decorator hier
  selector: '[appSpy]'
})

export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) { }

  ngOnInit(){
    this.logger.log(`Spy #${this.id} onInit`);
  }
  ngOnDestroy(){
    this.logger.log(`Spy #${this.id} onDestroy`);
  }

}
