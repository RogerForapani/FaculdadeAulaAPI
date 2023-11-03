import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-trueapi',
  templateUrl: './trueapi.component.html',
  styleUrls: ['./trueapi.component.css']
})
export class TrueapiComponent implements OnInit{
  constructor(private service: UsersService){}
  users!: Observable<User[]>
  novoUserForm: User | null = null

  ngOnInit(): void {
    this.users = this.service.getUser()
  }
  editar(user:User){
    const editado = user;
    editado.name = "New name"
    this.service.putUser(user.id,editado)
  }
  novoUser(){
    const user: User = {
      id: 54555,
      name: "novo usuario",
      email:"xxxx@gmail.com"
    }
    this.service.postUser(user)
  }
  deletar(user:User){
    this.service.deleteUser(user.id)
  }
}
