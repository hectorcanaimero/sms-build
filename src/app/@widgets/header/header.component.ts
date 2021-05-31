import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {}

  onLogout = () => this.auth.signOut();

}
