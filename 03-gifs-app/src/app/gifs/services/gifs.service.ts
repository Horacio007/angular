import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[] = [];

  private _tagsHistory:string[] = [];
  private _apiKey:string = '8cnhBdMzYcTqS504AV0ioTRV3KoYcrZJ';
  private _serviceURL:string = 'https://api.giphy.com/v1/gifs'

  constructor(private http:HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string) {
    tag = tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
      // const index:number = this._tagsHistory.indexOf(tag);
      // const newTag:string = this._tagsHistory.splice(index,1)[0];
      // this._tagsHistory.splice(index,1)
      // this._tagsHistory.unshift(newTag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  // async searchTag(tag:string):Promise<void> {
  searchTag(tag:string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', 10);

    this.http.get<SearchResponse>(`${this._serviceURL}/search?`, {params}).subscribe(response => {
      // console.log(response.data);
      this.gifList = response.data;
      console.log(this.gifList);
      // console.log(response.jotdog);
    })
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=8cnhBdMzYcTqS504AV0ioTRV3KoYcrZJ&q=toreto&limit=10')
    // .then(response => response.json())
    // .then(data => console.log(data));
    //this._tagsHistory.unshift(tag);
  }
}
