import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public words: [string, string][] = [
    ['génial', 'color: red; fontWeight: bold;'],
    ['super', 'color: orange; fontStyle: italic;'],
    ['extraordinaire', 'color: teal; textTransform: uppercase;'],
    ['passionnant', 'padding: 4px; backgroundColor: lavender;'],
    ['fascinant', 'color: black; backgroundColor: lightgrey; padding: 2px'],
  ];

  public currentIndex = 0;

  public changeWord(): void {
    const newIndex = this.currentIndex + 1;
    this.currentIndex = newIndex === this.words.length ? 0 : newIndex;
  }
}
