import { Component, OnInit } from '@angular/core';

interface Sections {
  logo        : string,
  sectionName : string,
  sectionCode : string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  home    :     boolean = true
  albums  :     boolean = false
  contact :     boolean = false
  other   :     boolean = false
  

  sections: Sections[] = [
    { logo: '../../assets/icons/home.svg', sectionName: 'Home',     sectionCode: 'home'   },
    { logo: '../../assets/icons/logo.svg', sectionName: 'Albumes',  sectionCode: 'albums'  },
    { logo: '../../assets/icons/call.svg', sectionName: 'Contacto', sectionCode: 'contact'},
    { logo: '../../assets/icons/help.svg', sectionName: 'Otros',    sectionCode: 'other'  }
  ]

  constructor() {
    
  }

  ngOnInit(): void {
  }

  switchComponent(component: string){
    switch (component) {
      case 'home':
        this.home     = true
        this.albums   = false
        this.contact  = false
        this.other    = false
        break;
      case 'albums':
        this.home     = false
        this.albums   = true
        this.contact  = false
        this.other    = false
        break;
      case 'contact':
        this.home     = false
        this.albums   = false
        this.contact  = true
        this.other    = false
        break;
      case 'other':
        this.home     = false
        this.albums   = false
        this.contact  = false
        this.other    = true
        break;

      default:
        break;
    }
  }

}
