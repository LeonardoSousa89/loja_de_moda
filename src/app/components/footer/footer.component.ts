import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  
  private social={
    facebook:'https://www.facebook.com/profile.php?id=100087040453902',
    github: 'https://github.com/LeonardoSousa89',
    linkedin: 'https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173'
  }

  private window_document: Window=window

  public mensagem_titulo: string='Receba ofertas exclusivas'
  public mensagem_contexto: string='Assine nossa newsletter e seja V.I.P.'

  ngOnInit(): void {}

  public targetLink(link: string): void{ this.window_document.open(link) }

  public facebookTarget(): void{ this.targetLink(this.social.facebook) }
  public githubTarget():   void{ this.targetLink(this.social.github)   }
  public linkedinTarget(): void{ this.targetLink(this.social.linkedin) }

}
