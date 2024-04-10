import {Component} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {BHQPlugin} from "../../bhqplugin";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  pluginList = [new BHQPlugin('Chuck Norris Jokes', 'Have the Bot tell a random Chuck Norris Joke from: https://api.chucknorris.io', true),
    new BHQPlugin('Auto Role', 'Automatically assigns roles to users based on their activity.', false),
    new BHQPlugin('Auto Voice', 'Automatically creates voice channels on demand and deletes them again, when that demand fades.', false),
    new BHQPlugin('Auto Mod', 'Automatically moderates your server.', true),
    new BHQPlugin('Auto Welcome', 'Automatically welcomes new members.', false),
    new BHQPlugin('Auto Leave', 'Automatically says goodbye to members who leave.', true),
    new BHQPlugin('Auto Nickname', 'Automatically changes nicknames.', false),]
}
