import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
@Component({
  selector: 'app-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css']
})
export class FakeapiComponent implements OnInit{
  pessoas!: Observable<Pessoa[]>

  constructor(private service: PessoaService){

  }
  ngOnInit(): void {}
  
  salvar(pessoa: Pessoa){
    this.service.salvar(pessoa)
  }
  
  listar(){
    this.pessoas = this.service.listar()
  }
}
