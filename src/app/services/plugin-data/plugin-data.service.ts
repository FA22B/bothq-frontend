import {Injectable} from '@angular/core';
import {BHQPlugin} from "../../bhqplugin";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PluginData} from "../../models/plugin-data.model";

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

  private apiUrl = 'https://api.example.com/plugin-data'; // Replace with our API URL

  constructor(private http: HttpClient) {
    let plugin = sessionStorage.getItem('selectedPlugin')
    if (plugin) this.selectedPlugin = this.pluginList.find(p => p.name === plugin)
  }

  selectPlugin(plugin: BHQPlugin) {
    this.selectedPlugin = plugin
    sessionStorage.setItem('selectedPlugin', plugin.name)
  }

  getPluginData(): Observable<PluginData> {

    return new Observable<PluginData>(subscriber => {
      let data: PluginData = {
        statusCode: 200,
        message: 'Success',
        pluginId: 1,
        type: 'group',
        uniqueId: 'testPlugin',
        enabled: true,
        displayName: 'Test Plugin',
        value: [
          {
            type: 'checkbox',
            uniqueId: 'checkbox1',
            enabled: true,
            displayName: 'Enable Option 1',
            value: true
          },
          {
            type: 'slider',
            uniqueId: 'slider1',
            enabled: true,
            displayName: 'Test Slider',
            value: 50,
            minValue: 0,
            maxValue: 100,
            step: 1
          },
          {
            type: 'group',
            uniqueId: 'group2',
            enabled: true,
            displayName: 'Sub Settings',
            value: [
              {
                type: 'checkbox',
                uniqueId: 'checkbox2',
                enabled: true,
                displayName: 'Enable Sub Setting',
                value: false
              },
              {
                type: 'slider',
                uniqueId: 'slider2',
                enabled: true,
                displayName: 'Sub Slider',
                value: 25,
                minValue: 0,
                maxValue: 100,
                step: 1
              }
            ]
          }
        ]
      }
      subscriber.next(data)
      subscriber.complete()

    })

    // Note: This is a placeholder for the actual API call
    // return this.http.get<PluginData>(this.apiUrl)
  }

}
