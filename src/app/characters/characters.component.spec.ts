import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  constructor(){ }

    ngOnInit(){


  }

}



// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CharactersComponent } from './characters.component';

// describe('CharactersComponent', () => {
//   let component: CharactersComponent;
//   let fixture: ComponentFixture<CharactersComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CharactersComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CharactersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
