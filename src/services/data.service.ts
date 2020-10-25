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
export class DataService {
    constructor(
        private db : AngularFirestore
    ) {

    }

    get getInfo() {
        return this.db.collection('info').valueChanges();
    }

    get getAbout() {
        return this.db.collection('about').valueChanges();
    }

    get getEducation() {
        return this.db.collection('education').valueChanges();
    }
}