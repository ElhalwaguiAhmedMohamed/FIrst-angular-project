import { Component, Input ,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating = 3;
  cropWidth = 75;

  constructor() { }
  //ngOnChange called each time the @Input is changed
  ngOnChanges(changes: SimpleChanges): void {

    this.cropWidth=this.rating*75/5;
    console.log(changes['rating'].currentValue);
    console.log(changes['rating'].previousValue);
  }

  ngOnInit(): void {
  }

}
