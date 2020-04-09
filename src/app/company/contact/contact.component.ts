import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingDialogService } from 'angular-firebase-template';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

enum SubjectTypes {
  SPO_RYU,
  SECOND_CAREER,
  SALES,
  OTHERS,
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
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

    let type: 'sales' | 'info';
    switch (subjectType) {
      case SubjectTypes.SPO_RYU:
      case SubjectTypes.SECOND_CAREER:
      case SubjectTypes.SALES:
        type = 'sales';
        break;
      case SubjectTypes.OTHERS:
        type = 'info';
        break;
    }

    try {
      await this.api.sendMail('ja', name, email, subject, body, type);
    } catch {
      message$.error('エラーが発生しました');
      return;
    }

    message$.next('送信しました');
    message$.complete();
    await this.router.navigate(['']);
  }
}