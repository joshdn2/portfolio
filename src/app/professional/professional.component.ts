import { Component } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})

class bullet {
  place:string='';
  position:string='';
  time:string='';
  location:string='';
  bullets:string[]=[];
}
class skillCat {
  categoryName:string='';
  description?:string='';
  skills:skill[]=[];
}
class skill {
  name:string='';
  rating:number=0;
}

const experienceBullets:bullet[] = [
  {
    place:'Anglepoint',
    position:'Product Manager',
    time:'Oct 2022 - Feb 2024',
    location:'Lindon, UT',
    bullets:[
      "Created custom multi-criteria decision making framework for prioritizing feature requests and managing engineering resources (combination of RICE, MoSCoW, Value vs Effort)",
      "Managed multi-faceted delivery, automation, and project management platform across multiple product engineering teams; pivoted prioritization to a user role-centric focus",
      "Reworked company consultant deliverable process by combining multiple teams' siloed delivery processes and deliverables into one coherent delivery method",
      "Took all enhancements through full design processes, conducted user research, and worked with engineering to deliver delightful experiences",
      "Changed the product and product roadmap from a feature-focused prioritization and implementation to being based around user roles, journeys, and flows"
    ],
  },
  {
    place:'Anglepoint',
    position:'Full-Stack Software Engineer & Associate Product Manager',
    time:'May 2021 - Oct 2022',
    location:'Lindon, UT',
    bullets:[
      "Angular, C# full-stack application development, scrum team leader",
      "Led redesign and implementation for project management section and project permissions engine; upgraded outdated user experience and decreased loading times by up to 90%",
      "Led implementation for landing page dashboards, reporting, and consultant automation workstation"
    ],
  },
  {
    place:'BYU Department of Physics and Astronomy',
    position:'Full-Stack Engineer & UX Designer',
    time:'Apr 2020 - May 2021',
    location:'Provo, UT',
    bullets:[
      "Led team in designing, developing, and managing React/Node web application integrated with active directory, saves 48 professors 40+ hours of manual work each semester",
      "Acted as product manager, UX designer, and lead engineer"
    ],
  },
  {
    place:'Mozenda',
    position:'Special Projects Manager & Product Specialist',
    time:'Apr 2018 - July 2020',
    location:'Pleasant Grove, UT',
    bullets:[
      "Developed new prototype web crawler product line, brought in over $450k revenue in first year while only available as a prototype; worked with engineering to implement",
      "Created Google script spreadsheet automations that cut account health analysis time by 90%"
    ],
  },
]
const educationBullets:bullet[] = [
  {
    place:'Brigham Young University - Marriott School of Business',
    position:"Master's in Information Systems Management",
    time:'Graduated December 2021',
    location:'Provo, UT',
    bullets:[
      'GPA 3.67; Major GPA 3.83',
      'Member of the Association for Information Systems and the BYU Developers Club'
    ],
  },
]
const skillsContent:skillCat[]=[
  {
    categoryName:'Engineering',
    skills:[
      {
        name:'Angular',
        rating:5
      },
      {
        name:'React',
        rating:4
      },
      {
        name:'JavaScript',
        rating:5
      },
      {
        name:'Typescript',
        rating:5
      },
      {
        name:'HTML5',
        rating:5
      },
      {
        name:'CSS#/Less',
        rating:5
      },
      {
        name:'C#/ASP.NET',
        rating:3.5
      },
      {
        name:'SQL/MSSQL',
        rating:4
      },
      {
        name:'Git',
        rating:3
      },
      {
        name:'Database Design',
        rating:3
      },
      {
        name:'Frontend Architecture',
        rating:4
      },
      {
        name:'Node',
        rating:3
      },
      {
        name:'Python',
        rating:2
      },
      {
        name:'Bootstrap',
        rating:4
      },
      {
        name:'REST APIs',
        rating:3
      },
      {
        name:'OOP',
        rating:3
      }
    ]
  },
  /**
   * While developers see lines of code, product management contributions exist in countless meetings, strategic planning, and research.

It's invisible work, but invaluable.

Here's what Product Managers do:
1/ Navigate information overload: We attend meetings, read reports, and analyze data to make informed product decisions. It's not always glamorous, but crucial.

2/ See the bigger picture: We think beyond immediate gains, focusing on long-term value and strategic direction. Sometimes, the "gold" takes time to mine.

3/ Boost morale & communication: We keep teams inspired, address stakeholder concerns, and find innovative solutions.

4/ Champion continuous improvement: We conduct research, brainstorm ideas, and find the right people to get things done.

And yes, we're human too: We need breaks to recharge and stay creative.

Remember, Product Management is a marathon, not a sprint.

Our work builds the foundation for amazing products, even if it's not always visible.

Though challenging to quantify and lacking immediate results, It's work that holds value.
It brings exceptional products to life.
   * 
   * 
   */
  {
    categoryName:'Product',
    description:'',
    skills:[
      {
        name:'Product Roadmapping',
        rating:5
      },
      {
        name:'Prioritization',
        rating:4
      },
      {
        name:'Product Vision Definition & Alignment',
        rating:4
      },
      {
        name:'User Testing',
        rating:4
      },
      {
        name:'User Personas',
        rating:3
      },
      {
        name:'OKRs',
        rating:4
      },
      {
        name:'Google Analytics',
        rating:2
      },
      {
        name:'FullStory (Product Analytics)',
        rating:3
      },
    ]
  },
  {
    categoryName:'Design',
    skills:[
      {
        name:'User Story Mapping',
        rating:5
      },
      {
        name:'User Research',
        rating:4
      },
      {
        name:'Adobe XD',
        rating:4
      },
      {
        name:'Figma',
        rating:3
      },
      {
        name:'Design Sprints',
        rating:4
      },
      {
        name:'Usability Testing',
        rating:4
      },
      {
        name:'A/B Testing',
        rating:3
      },
      {
        name:'Journey Mapping',
        rating:3
      },
      {
        name:'Variable Fidelity Prototyping',
        rating:4
      },
    ]
  },
  {
    categoryName:'Languages',
    skills:[
      {
        name:'English (native)',
        rating:5
      },
      {
        name:'Portuguese (faz tempo)',
        rating:3
      },
      {
        name:'Spanish (un poquito)',
        rating:1
      },
    ]
  },
  {
    categoryName:'Other',
    skills:[
      {
        name:'Cross-functional Team Management',
        rating:5
      },
      {
        name:'Agile',
        rating:5
      },
      {
        name:'Scrumban (Scrum x Kanban)',
        rating:5
      },
      {
        name:'Azure DevOps',
        rating:5
      },
      {
        name:'Jira',
        rating:2
      },
      {
        name:'Visual Studio',
        rating:3
      },
      {
        name:'Team Building Activities',
        rating:5
      },
    ]
  },
]

export class ProfessionalComponent {

}
