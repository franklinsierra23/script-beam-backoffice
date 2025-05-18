import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs0Izo0JWhAbugBrDJ85qttMMz1B7LN2w",
  authDomain: "scriptbeam.firebaseapp.com",
  projectId: "scriptbeam",
  storageBucket: "scriptbeam.firebasestorage.app",
  messagingSenderId: "165609478230",
  appId: "1:165609478230:web:4cecbfd505d5bdd8f603f7",
  measurementId: "G-VHZ3BYPB7Q"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);

  constructor() {}

    async addItem(collectionName: string, data: any) {
    return await addDoc(collection(this.db, collectionName), data);
  }

  // READ
  async getItems(collectionName: string) {
    const querySnapshot = await getDocs(collection(this.db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // UPDATE
  async updateItem(collectionName: string, id: string, data: any) {
    const docRef = doc(this.db, collectionName, id);
    return await updateDoc(docRef, data);
  }

  // DELETE
  async deleteItem(collectionName: string, id: string) {
    const docRef = doc(this.db, collectionName, id);
    return await deleteDoc(docRef);
  }
}
