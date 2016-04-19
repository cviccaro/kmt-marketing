import {Component, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {HomeComponent} from '../+home/index';
import {FinishComponent} from '../+finish/index';
import {ProductService, SubmissionService, apiConfig, API_CONFIG} from '../shared/index';

@Component({
  selector: 'kmt-app',
  templateUrl: './app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    provide(API_CONFIG, { useValue: apiConfig }),
    ProductService,
    SubmissionService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/finish',
    name: 'Finish',
    component: FinishComponent,
    data: {
      'title': 'Thanks!' 
    }
  }
])
export class AppComponent {
  pageTitle: string = 'Kennametal DVD & Poster Order Form';

  constructor(private _router: Router) {
    this._router.subscribe((val) => {
      var title = this._router.currentInstruction.component.routeData.get('title');
      if (title !== null) {
        this.pageTitle = title;
      }
    });
  }
}
