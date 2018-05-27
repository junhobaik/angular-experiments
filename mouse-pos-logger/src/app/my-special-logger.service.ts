import { Injectable } from '@angular/core';
import * as format from 'date-fns/format';
import { LogLevel } from './log-level.enum';

@Injectable({
  providedIn: 'root'
})
export class MySpecialLoggerService {
  logLevel: LogLevel;
  logs: string[] = [];
  private readonly MAX_HISTORY_CNT: number = 100;
  private readonly TIME_FORMATTER: string = 'YYYY-MM-DD HH:mm:ss.SSS';

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
}
