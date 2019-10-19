import { Component, OnInit } from '@angular/core';
import { Char } from '../char';
import { CHARACTERS } from '../fakechars';
import { CharService } from '../char.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {


	chars: Char[];

  constructor() { }

  ngOnInit() {
  }

  onSelect(char: Char): void {
  	this.selectedChar = char;
  }

}
