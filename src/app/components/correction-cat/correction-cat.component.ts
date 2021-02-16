import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/Chat';

@Component({
  selector: 'app-correction-cat',
  templateUrl: './correction-cat.component.html',
  styleUrls: ['./correction-cat.component.css']
})
export class CorrectionCatComponent implements OnInit {

  chats:Chat[]= [
    new Chat("Minou", "M"),
    new Chat("Caline", "F", "Gris", "10 ans")
  ]
  
  ngOnInit(): void {
  }

  onAction(chat:Chat){
    alert(`Le chat ${chat.nom} miaule!`)
  }

}
