import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingDialogService } from 'angular-firebase-template';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

enum SubjectTypes {
  SALE,
  INFO
}

@Component({
  selector: 'app-recruiter-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class RecruitersContactComponent implements OnInit {
  readonly subjectTypes = SubjectTypes;

  constructor(
    private router: Router,
    private loadingDialog: LoadingDialogService,
    private api: ApiService,
  ) {}

  ngOnInit() {}

  async onSubmit(
    name: string,
    email: string,
    subject: string,
    body: string,
    subjectType: SubjectTypes,
  ) {
    const message$ = new BehaviorSubject('送信しています');

    this.loadingDialog.open(message$);

    let typeRec: 'sale' | 'info';
    switch (subjectType) {
      case SubjectTypes.SALE:
        typeRec = 'sale';
        break;
      case SubjectTypes.INFO:
        typeRec = 'info';
        break;
    }

    try {
      await this.api.sendMail('ja', name, email, subject, body, typeRec);
    } catch {
      message$.error('エラーが発生しました');
      return;
    }

    message$.next('送信しました');
    message$.complete();
    await this.router.navigate(['']);
  }
}