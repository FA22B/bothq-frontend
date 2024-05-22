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

  pluginDataList: PluginData[] = [{
    statusCode: 200,
    message: 'Success',
    pluginId: 1,
    type: 'group',
    uniqueId: 'chuckNorrisJokes',
    enabled: false,
    displayName: 'Chuck Norris Jokes',
    description: 'Have the Bot tell a random Chuck Norris Joke from: https://api.chucknorris.io',
    value: [
      {
        type: 'checkbox',
        uniqueId: 'enableJokes',
        enabled: true,
        displayName: 'Enable Jokes',
        value: false
      },
      {
        type: 'slider',
        uniqueId: 'jokeFrequency',
        enabled: true,
        displayName: 'Joke Frequency',
        value: 50,
        minValue: 0,
        maxValue: 100,
        step: 1
      }
    ]
  },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 2,
      type: 'group',
      uniqueId: 'autoRole',
      enabled: false,
      displayName: 'Auto Role',
      description: 'Automatically assigns roles to users based on their activity.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoRole',
          enabled: true,
          displayName: 'Enable Auto Role',
          value: false
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 3,
      type: 'group',
      uniqueId: 'autoVoice',
      enabled: false,
      displayName: 'Auto Voice',
      description: 'Automatically creates voice channels on demand and deletes them again, when that demand fades.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoVoice',
          enabled: true,
          displayName: 'Enable Auto Voice',
          value: false
        },
        {
          type: 'slider',
          uniqueId: 'voiceChannelLimit',
          enabled: true,
          displayName: 'Voice Channel Limit',
          value: 5,
          minValue: 0,
          maxValue: 100,
          step: 1
        },
        {
          type: 'slider',
          uniqueId: 'voiceChannelTimeout',
          enabled: true,
          displayName: 'Voice Channel Timeout',
          value: 5,
          minValue: 0,
          maxValue: 100,
          step: 1
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 4,
      type: 'group',
      uniqueId: 'autoMod',
      enabled: false,
      displayName: 'Auto Mod',
      description: 'Automatically moderates your server.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoMod',
          enabled: true,
          displayName: 'Enable Auto Mod',
          value: false
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 5,
      type: 'group',
      uniqueId: 'autoWelcome',
      enabled: false,
      displayName: 'Auto Welcome',
      description: 'Automatically welcomes new members.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoWelcome',
          enabled: true,
          displayName: 'Enable Auto Welcome',
          value: false
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 6,
      type: 'group',
      uniqueId: 'autoLeave',
      enabled: false,
      displayName: 'Auto Leave',
      description: 'Automatically says goodbye to members who leave.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoLeave',
          enabled: true,
          displayName: 'Enable Auto Leave',
          value: false
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 7,
      type: 'group',
      uniqueId: 'autoNickname',
      enabled: false,
      displayName: 'Auto Nickname',
      description: 'Automatically changes nicknames.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoNickname',
          enabled: true,
          displayName: 'Enable Auto Nickname',
          value: false
        }
      ]
    },
    {
      statusCode: 200,
      message: 'Success',
      pluginId: 8,
      type: 'group',
      uniqueId: 'autoMessage',
      enabled: false,
      displayName: 'Auto Message',
      description: 'Automatically sends messages.',
      value: [
        {
          type: 'checkbox',
          uniqueId: 'enableAutoMessage',
          enabled: true,
          displayName: 'Enable Auto Message',
          value: false
        }
      ]
    }]

  private apiUrl = 'https://api.example.com/plugin-data'; // Replace with our API URL

  constructor(private http: HttpClient) {
    let plugin = sessionStorage.getItem('selectedPlugin')
    if (plugin) this.selectedPlugin = this.pluginList.find(p => p.name === plugin)
  }

  selectPlugin(plugin: BHQPlugin) {
    this.selectedPlugin = plugin
    sessionStorage.setItem('selectedPlugin', plugin.name)
  }

  getSelectedPluginData(): Observable<PluginData> {
    return new Observable<PluginData>(subscriber => {
      let data = this.pluginDataList.find(p => p.displayName === this.selectedPlugin?.name)
      if (data) {
        subscriber.next(data)
        subscriber.complete()
      } else {
        subscriber.error('Plugin data not found')
      }
    })

    // Note: This is a placeholder for the actual API call
    // return this.http.get<PluginData>(`${this.apiUrl}/${this.selectedPlugin?.name}`)
  }
}
