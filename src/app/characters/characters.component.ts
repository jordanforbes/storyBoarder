import { Component, OnInit } from '@angular/core';
import { Char } from '../char';
import { CHARACTERS } from '../fakechars';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

	characters = CHARACTERS;
	selectedChar: Char;

  constructor() { }

  ngOnInit() {
  }

  onSelect(char: CHAR): void {
  	this.selectedChar = char;
  }

}
