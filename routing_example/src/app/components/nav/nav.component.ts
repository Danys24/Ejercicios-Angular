import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PreloadingService } from '../../services/preloading.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  cerrarCesion:string|null=null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router, private _preloadingService: PreloadingService) {}

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  preloadModule(route:string){
    this._preloadingService.comenzarPrecarga(route);
  }

}
