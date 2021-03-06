import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {
    name: null,
    email: null,
    phoneNumber: null,
    image: null
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    console.log("Add contact has been called");
    this.contacts.push(
     this.newContact
    );
    // add contact to contacts list
    // clear inputs
    this.newContact = {
      name: null,
      email: null,
      phoneNumber: null,
      image: null
    };
  }

}
