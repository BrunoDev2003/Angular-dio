import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = "https://www.bing.com/th?id=OIP.JDYZJCUIZ5wAYnjS9VkK3QHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"

  @Input()
  cardTitle:string = "NOVA SÉRIE"

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }
}
