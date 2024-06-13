import { LightningElement, wire } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccounts';

export default class SearchAccount extends LightningElement {
    searchKey;

    @wire(findAccount, {
        searchString: '$searchKey'
    })accounts;

    handleChange(event){
        this.searchKey = event.target.value;
    }
}