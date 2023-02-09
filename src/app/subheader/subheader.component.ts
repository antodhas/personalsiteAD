import { Component, OnInit } from '@angular/core';
import *as AOS from 'aos'

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit{
  constructor() {}

ngOnInit(): void {
  AOS.init();

}

}
