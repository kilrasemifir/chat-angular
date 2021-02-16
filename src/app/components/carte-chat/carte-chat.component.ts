import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/Chat';

/**
 * Carte de chat
 * - {Chat} value chat pour laffichage des données sous forme de carte.
 */
@Component({
  selector: 'app-carte-chat',
  templateUrl: './carte-chat.component.html',
  styleUrls: ['./carte-chat.component.css']
})
export class CarteChatComponent implements OnInit {

  @Input() value:Chat = new Chat("","");

  ngOnInit(): void {
  }

  onAction(){
    alert (`${this.value.nom} miaule!`)
  }

}
