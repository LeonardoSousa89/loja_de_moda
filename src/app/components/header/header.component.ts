import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  private window_document: Window=window
  private URLs={
    whatsapp: 'https://wa.me/message/N767K3D4E7TAG1'
  }

  ngOnInit(): void {}

  public targetLink(link: string): void{
    this.window_document.open(link)
  }

  public targetWhatsapp(): void{
    const { whatsapp }=this.URLs
    
    this.targetLink(whatsapp)
  }
}
