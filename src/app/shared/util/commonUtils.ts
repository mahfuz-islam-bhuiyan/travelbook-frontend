import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CommonUtils {

  constructor(private router: Router) {
  }

  goToHome = () => this.router.navigate(['/']);


}
