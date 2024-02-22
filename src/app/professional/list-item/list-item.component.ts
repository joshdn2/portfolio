import { Component, Input } from '@angular/core';
import { bullet } from 'src/app/Classes/bullet';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() bulletList: bullet[] = [];
}
