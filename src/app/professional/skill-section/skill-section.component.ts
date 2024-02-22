import { Component, Input } from '@angular/core';
import { skillCat } from 'src/app/Classes/skillCat';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})

export class SkillSectionComponent {
  @Input() skillCat: skillCat = {categoryName:'',skills:[]};

  getStarsArray(rating: number): boolean[] {
    let arr = [];
    for(let i = 0; i < 5; i++){
      i < rating ? arr.push(true) : arr.push(false);
    }
    return arr;
  }
}
