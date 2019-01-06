import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  lat: number;
  lng: number;
  following: string = null;
  list: Subscription;

  users: Observable<User[]>;

  constructor(public db: AngularFirestore) {}

  ngOnInit() {
    this.users = this.getUserList();
  }

  getUserList(): Observable<any[]> {
    return this.db.collection<User>('users').valueChanges()
     .pipe(map((res: User[]) => {
       this.lat = res[0].lat;
       this.lng = res[0].lng;
       return res;
     }));
  }

  followUser(user: User): void {
    if (this.following === user.code) {
      this.following = null;
      this.list.unsubscribe();
      return;
    }

      this.following = user.code;
      this.lat = user.lat;
      this.lng = user.lng;

      this.list = this.getUserList().
      subscribe((res:User[]) => {
        res.forEach((x: User) => {
          if (x.code === user.code) {
            this.lat = x.lat;
            this.lng = x.lng;
          }
        });
      });
  }

}
