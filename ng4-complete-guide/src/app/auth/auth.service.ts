import * as firebase from 'firebase';

export class AuthService {

  token: string;

  signupUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        )
      }
    ).catch(
      error => console.log(error)
    );
  }

  //Promise returns token or tries to get one from the backend
  getToken(){
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }
}
