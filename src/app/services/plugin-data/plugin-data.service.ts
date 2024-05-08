import {Injectable} from '@angular/core';
import {BHQPlugin} from "../../bhqplugin";

@Injectable({
  providedIn: 'root'
})
export class PluginDataService {
  pluginList = [new BHQPlugin('Chuck Norris Jokes', 'Have the Bot tell a random Chuck Norris Joke from: https://api.chucknorris.io', true),
    new BHQPlugin('Auto Role', 'Automatically assigns roles to users based on their activity.', false),
    new BHQPlugin('Auto Voice', 'Automatically creates voice channels on demand and deletes them again, when that demand fades.', false),
    new BHQPlugin('Auto Mod', 'Automatically moderates your server.', true),
    new BHQPlugin('Auto Welcome', 'Automatically welcomes new members.', false),
    new BHQPlugin('Auto Leave', 'Automatically says goodbye to members who leave.', true),
    new BHQPlugin('Auto Nickname', 'Automatically changes nicknames.', false),
    new BHQPlugin('Auto Message', 'Automatically sends messages.', true),]

  public selectedPlugin?: BHQPlugin

  constructor() {
    let plugin = sessionStorage.getItem('selectedPlugin')
    if (plugin) this.selectedPlugin = this.pluginList.find(p => p.name === plugin)
  }

  selectPlugin(plugin: BHQPlugin) {
    this.selectedPlugin = plugin
    sessionStorage.setItem('selectedPlugin', plugin.name)
  }
}
