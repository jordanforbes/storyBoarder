import { Component, OnInit } from '@angular/core';

// import { Observable, of } from 'rxjs';

import { Char } from './char';
import { CHARACTERS } from './fakechars';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

getChars(): Char[]{
	return CHARACTERS;
}

export class CharService {

  constructor() { }
}
