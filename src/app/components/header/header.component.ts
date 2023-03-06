import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() serchTermChanges = new EventEmitter()

  filteredCharacters: any
  searchTerm = new FormControl<string>('');

  ngOnInit(): void {
    this.searchTerm.valueChanges.subscribe((value) => {
      this.serchTermChanges.emit(value)
    })
  }

   
  verification: boolean = false
  chk(){
    const bodyElement = document.querySelector('body')
    bodyElement?.classList.toggle('theme-dark')
   }

}