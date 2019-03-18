import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSnataizer:DomSanitizer ){

  }
  transform(value: string, uri: string): any {
    return this.domSnataizer.bypassSecurityTrustResourceUrl(uri + value)
  }

}
