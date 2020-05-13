import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-social-btn',
  templateUrl: './social-btn.component.html',
  styleUrls: ['./social-btn.component.css']
})
export class SocialBtnComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
