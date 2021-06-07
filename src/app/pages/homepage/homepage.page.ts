import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

    items: Observable<any>;

  constructor(private afs: AngularFirestore) {

        

   }

  ngOnInit() {  

    this.items = this.afs.collection<any>('produtos').valueChanges();

  }


  openWatsapp (whatsapp){
    window.open('https://api.whatsapp.com/send?phone=' + whatsapp);
  }

}
