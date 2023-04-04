import { Component } from '@angular/core';
import { faWhatsapp, faLinkedin, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'layout-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  contactIcons: Array<{ icon: IconDefinition, link: string, text:string }> = [
    { icon: faPhone, link: 'tel:+573043676037', text:"+57 304 367 6037" },
    { icon: faEnvelope, link: 'mailto:cdmottah@gmail.com', text:" cdmottah@gmail.com" },
    { icon: faWhatsapp, link: 'https://wa.me/573043676037', text:"+57 304 367 6037" },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/cristian-danilo-motta-herrera/', text:"cristian-danilo-motta-herrera" },
    { icon: faGithub, link: 'https://github.com/cdmottah', text:"cdmottah" },
  ];
}
