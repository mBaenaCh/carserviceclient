import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNERS_API = this.API + '/owners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    
    return this.http.get(this.OWNERS_API);
    
  }

  get(dni: string){
    return this.http.get(this.OWNERS_API + '/search/findByDni?dni='+ dni);
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner['href']){
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNERS_API, owner);
    }
    return result;
  }

  delete(href: string){
    return this.http.delete(href);
  }

  
}
