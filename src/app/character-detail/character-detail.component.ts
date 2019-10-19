import { Component, OnInit, Input } from '@angular/core';
import { Char } from '../char';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {
	@Input() char: Char;


	constructor() { }

	ngOnInit() {
	}

}
