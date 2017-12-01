import { Injectable } from '@angular/core';
import {ToastOptions, ToastyConfig, ToastyService} from 'ng2-toasty';

@Injectable()
export class ToastyServiceInt {

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.limit = 3;
    this.toastyConfig.position = 'center-center';
  }

  setToastyError(title: string, msg: string) {
    this.toastyService.error(this.getToastOptions(title, msg));
  }

  setToastySuccess(title: string, msg: string) {
    this.toastyService.success(this.getToastOptions(title, msg));
  }

  setToastyWarning(title: string, msg: string) {
    this.toastyService.warning(this.getToastOptions(title, msg));
  }

  private getToastOptions(title: string, msg: string): ToastOptions {
    const toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: 5000
    };
    console.log(toastOptions);
    return toastOptions;
  }
}
