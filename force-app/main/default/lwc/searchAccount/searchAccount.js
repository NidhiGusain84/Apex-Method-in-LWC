import { LightningElement, wire } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccounts';

export default class SearchAccount extends LightningElement {
    searchKey;
    accounts;
    error;

    @wire(findAccount, {
        searchString: '$searchKey'
    })wiredAccounts({data, error}){
        if(data){
            this.accounts = data;
            this.error = undefined;
        }else{
            this.accounts = undefined;
            this.error = error;
        }
       
    };

    handleChange(event){
        this.searchKey = event.target.value;
    }
}