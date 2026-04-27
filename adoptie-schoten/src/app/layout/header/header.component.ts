import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { label: 'HOME', path: '/home' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'ADOPTIEPROCEDURE', path: '/adoption-procedure' },
    { label: 'METER/PETERSCHAP', path: '/godparent' },
    { label: 'STEUN ONS', path: '/support' },
    { label: 'TROOPER', path: '/trooper' },
    { label: 'FOTO\'S ASIEL', path: '/photos' },
    { label: 'TIPS', path: '/tips' },
    { label: 'ZWERFKATTEN', path: '/stray-cats' },
    { label: 'STERIEL MAKEN', path: '/sterilization' },
    { label: 'LINKS', path: '/links' },
    { label: 'SPONSORS', path: '/sponsors' },
    { label: 'FISCAAL ATTEST', path: '/tax-certificate' }
  ];
}
