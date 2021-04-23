import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  update(key, value) {
    return db.child(key).update(value);
  }
}

export default new TutorialDataService();