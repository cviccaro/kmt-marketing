import {Component, AfterViewInit, Input} from 'angular2/core';
import {Submission} from '../../../shared/index';

@Component({
	selector: 'kmt-order-info',
	templateUrl: 'app/shared/components/order-info/order-info.component.html',
	styleUrls: ['app/shared/components/order-info/order-info.component.css']
})

export class OrderInfoComponent implements AfterViewInit {
	@Input() submission: Submission;

	ngAfterViewInit() {
		console.log('OrderInfoComponent view intialized.', this);
	}
}
