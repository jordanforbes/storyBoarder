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


	CHARACTERS: Char[];

  constructor() { 
  	constructor(private charService: CharService){

  	}
  }

  ngOnInit() {
    this.getChars();
  }

  onSelect(char: Char): void {
  	this.selectedChar = char;
  }

  getChars(): void{
  	this.chars = this.CharService.getChars(); 
  }

}
