import { Component, OnDestroy, OnInit } from '@angular/core';
import { InteropObservable, of, interval, Subscription, map,filter,tap } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  items: Array<number> = [];
  //observable = of("item 1"); esse vai pegar o item 1 e colocar na lista
  // a lista vai ser iniciada no on init, e quando ela finalizar de carregar ela aparece na tela
  observable = interval(1000); //cria um item a cada 1 segundo
  subscription!: Subscription
    ngOnInit(): void {
     
     this.subscription= this.observable.pipe(
        map((x:number)=> x*2),
        filter(x => x <10),
        tap((x) => console.log(x))
     ).subscribe((item) => {this.items.push(item)})

     // a função pipe serve para colocar outras funções como parametro dentro
    }
    desinscrever(){
      this.subscription.unsubscribe();
    }
    

}
