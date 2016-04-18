"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_component_1 = require('./app/components/app.component');
var index_1 = require('./app/shared/index');
if ('prod' === 'prod') {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    index_1.ProductService,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
