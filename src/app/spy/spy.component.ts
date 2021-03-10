import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css'],
  //providers: [loggerService]  // het pad hier naar toe klopt niet helemaal boven heb ik een puntje moeten bijvoegen hier moet waarschijnlijk ook zoiets gebeuren?
})
export class SpyComponent{
  newName = 'Herbie';
  heroes: string[] = ['WindStorm', 'Magneta'];

  constructor(public logger: LoggerService) { }

  addHero(){

  }

reset(){

}
// hier moet ik nog code toevoegen in de functies etc. + moet ik hier nu nog koppelen naar die spy.directive ? nog uitzoeken
}
