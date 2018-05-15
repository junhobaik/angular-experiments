import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private static CHK_KEYUP_WATE_SEC = 5000;
  private valid = false;
  userName = '';

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) { return; }
      alert('이름을 입력해주세요.');
    };

    setTimeout(checkTouchedFn, AppComponent.CHK_KEYUP_WATE_SEC);
  }

  onKeyUp = name => {
    this.valid = name.length > 0;
  }

  setName = nameInput => {
    this.userName = nameInput + '님 환영합니다.';
  }
}
