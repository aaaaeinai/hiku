import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
} from '../../../../../node_modules/@angular/forms';

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
    login: FormGroup;
    apikey = '';

    constructor() {}

    ngOnInit() {
        this.login = new FormGroup({
            apikey: new FormControl(),
        });
    }

    onSubmit() {
        this.apikey = JSON.stringify(this.login.value);
        console.log(this.apikey);
    }
}
