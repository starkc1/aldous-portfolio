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

    deleteInfo(info : any) {

        this.db.collection('info').doc(info[0].name + info[0].title).delete().then(
            function() {
                console.log("success");
            }
        ).catch(
            function(error) {
                console.log(error);
            }
        );

    }

    addInfo(info : any) {
        this.db.collection('info').doc(info.name + info.title).set({
            name: info.name,
            title: info.title
        }, { merge: true }).then(
            function() {
                console.log("success")
            }
        ).catch(
            function(error) {
                console.log(error);
            }
        )
    }

    get getAbout() {
        return this.db.collection('about').valueChanges();
    }

    get getEducation() {
        return this.db.collection('education').valueChanges();
    }

    get getSkills() {
        return this.db.collection('skills').valueChanges();
    }

    get getProjects() {
        return this.db.collection('projects').valueChanges();
    }

    get getProffessionalExperience() {
        return this.db.collection('professional').valueChanges();
    }

    get getVolunteerExperience() {
        return this.db.collection('volunteer').valueChanges();
    }
}