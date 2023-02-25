import { Component, OnInit } from '@angular/core';
import { modelos } from 'src/app/models/type';
import { RestService } from 'src/app/service/rest.service';

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

  private tendencia: Array<modelos>=[{
    id: 0,
    preco: 0.0,
    peca: '',
    categoria: '',
    descricao: '',
    tamanho: '',
    cor: '',
    image_url: ''
  }]

  public peca: string=''

  constructor(private restResquest: RestService){}

  ngOnInit(): void {}

  public targetLink(link: string): void{
    this.window_document.open(link)
  }

  public targetWhatsapp(): void{
    const { whatsapp }=this.URLs
    
    this.targetLink(whatsapp)
  }

  public getItensBySearchPiece(){
    
    this.restResquest.getItensBySearchPiece(this.peca).subscribe(
      reponse=>{
        
        this.tendencia=reponse
        console.log(this.tendencia)
      }
    )
  }

}
