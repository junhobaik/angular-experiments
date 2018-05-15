import { Injectable } from '@angular/core';

@Injectable()
export class I18nSupportService {
  private welcomeMsg;
  langCode = 'ko';

  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'jp': '初めまして',
      'fr': 'Bonjour'
    };
  }

  getWelcomeMsg(userName: string) {
    const helloMsg = this.welcomeMsg[this.langCode];
    return `${helloMsg}, ${userName}!`;
  }
}
