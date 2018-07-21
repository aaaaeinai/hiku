import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountsService } from '../../../container/service/account.service';

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
    login: FormGroup;
    private logged = false;

    constructor(private accountService: AccountsService) {}

    ngOnInit() {
        this.login = new FormGroup({
            apikey: new FormControl(),
        });
    }

    onSubmit() {
        this.accountService.setAccount(this.login.value);
        this.logged = this.accountService.Logged;
    }
}
