import { 
    Injectable
} from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable()
export class LoginService {

    constructor(
        private db : AngularFirestore
    ) {
        
    }

    get getLogin() {
        return this.db.collection('admin').valueChanges();
    }
}