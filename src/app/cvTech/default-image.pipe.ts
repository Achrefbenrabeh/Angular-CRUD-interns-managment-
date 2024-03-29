import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    if (!value) {
      return 'assets/images/uptoid.png'
    }
    else{
      return value ;
    }

  }

}
