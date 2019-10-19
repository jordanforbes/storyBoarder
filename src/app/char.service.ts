imoprt { Component, OnInit } from '@angular/core';

import { Char } from './char';
import { CHARS } from './fakechars';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

getChars(): void {
	this.charService.getChars()
		.subscribe(chars => this.chars = chars);
}

export class CharService {

  constructor() { }
}
