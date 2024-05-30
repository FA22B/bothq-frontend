import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PluginData} from "../../models/plugin-data.model";

@Injectable({
  providedIn: 'root'
})
export class PluginDataService {

  public selectedPlugin?: number

  pluginList: PluginData[] = []

  private API_PLUGIN = '/api/v1/plugins'; // Replace with our API URL
  private API_SERVER = '/api/v1/servers';

  constructor(private httpClient: HttpClient) {
    this.fetchPluginList()
    let plugin = sessionStorage.getItem('selectedPlugin')
    if (plugin) {
      this.selectedPlugin = +plugin
    }
  }

  selectPlugin(pluginid: number) {
    this.selectedPlugin = pluginid
    sessionStorage.setItem('selectedPlugin', pluginid.toString())
  }

  fetchPluginList() {
    this.getAllPlugins().subscribe(data => {
      localStorage.setItem('pluginDataList', JSON.stringify(data))
    })
    this.pluginList = JSON.parse(localStorage.getItem('pluginDataList') || '[]')
  }

  getPluginList() {
    return this.pluginList
  }

  getAllPlugins(): Observable<PluginData[]> {
    return this.httpClient.get<PluginData[]>(this.API_PLUGIN);
  }

  getSelectedPluginData(serverId: number): Observable<PluginData> {
    return this.httpClient.get<PluginData>(`${this.API_SERVER}/${serverId}/plugins${this.selectedPlugin}`);
  }
}
