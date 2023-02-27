import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{

  public banners: Array<string>=[
    'https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fbanner%2Fbanner1.jpg?alt=media&token=dadbbe8d-caa1-4772-ac1d-52c253011c83',
    'https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fbanner%2Fbanner2.jpg?alt=media&token=b0ab0ee5-7fa8-48c8-b376-9ce85f728b52',
    'https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fbanner%2Fbanner3.jpg?alt=media&token=7a018233-4907-464e-9c88-f6078732c25a',
    'https://firebasestorage.googleapis.com/v0/b/loja-de-moda-4fa2b.appspot.com/o/moda%2Fbanner%2Fbanner4.jpg?alt=media&token=ad2f8a26-418e-4443-892e-8a90bc906e2c'
  ]

  public posicaoImagem: Array<string>=[]

  public contador: number=0

  ngOnInit(): void {}

  public muveImage(posicao: number){
    
    if(this.posicaoImagem.length > 0) this.posicaoImagem.pop()
    
    this.posicaoImagem.push(this.banners[posicao])
  } 

  public addposition(){
    this.contador+=1

    if(this.contador > this.banners.length) this.contador=this.banners.length -1

    this.muveImage(this.contador)
    console.log(this.contador, this.posicaoImagem)
  }

  public decPosition(){
    
    this.contador-=1
    if(this.contador < 0) this.contador=0

    this.muveImage(this.contador)
    console.log(this.contador, this.posicaoImagem)
  }

}
