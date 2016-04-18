"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_component_1 = require('./app/components/app.component');
var index_1 = require('./app/shared/index');
if ('dev' === 'prod') {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    index_1.ProductService,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx3QkFBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNwRCx1QkFBOEMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRSw4QkFBMkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM1RCxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUVsRCxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFDLHFCQUFjLEVBQUUsQ0FBQztBQUFDLENBQUM7QUFFbEQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFO0lBQ3RCLHlCQUFnQjtJQUNoQixzQkFBYztJQUNkLGNBQU8sQ0FBQyxzQkFBYSxFQUFFLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLENBQUM7Q0FDeEQsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3ZpZGUsIGVuYWJsZVByb2RNb2RlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgQVBQX0JBU0VfSFJFRn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9kdWN0U2VydmljZX0gZnJvbSAnLi9hcHAvc2hhcmVkL2luZGV4JztcblxuaWYgKCc8JT0gRU5WICU+JyA9PT0gJ3Byb2QnKSB7IGVuYWJsZVByb2RNb2RlKCk7IH1cblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICBST1VURVJfUFJPVklERVJTLFxuICBQcm9kdWN0U2VydmljZSxcbiAgcHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7IHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+JyB9KVxuXSk7XG5cbi8vIEluIG9yZGVyIHRvIHN0YXJ0IHRoZSBTZXJ2aWNlIFdvcmtlciBsb2NhdGVkIGF0IFwiLi9zdy5qc1wiXG4vLyB1bmNvbW1lbnQgdGhpcyBsaW5lLiBNb3JlIGFib3V0IFNlcnZpY2UgV29ya2VycyBoZXJlXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2Vyc1xuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3N3LmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbi8vICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCAgICByZWdpc3RyYXRpb24uc2NvcGUpO1xuLy8gICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbi8vICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuLy8gICB9KTtcbi8vIH1cbiJdfQ==
