import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  menu = [
    { name: 'Home', icon: 'home', url: 'home' },
    { name: 'Devices', icon: 'phone-portrait', url: 'devices' },
    { name: 'Contactos', icon: 'people', url: 'agenda' },
    { name: 'Mensajes', icon: 'chatbubble', url: 'message' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
