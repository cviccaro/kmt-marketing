import {Component} from 'angular2/core';
import {NgForm, Control, ControlGroup, Validators} from 'angular2/common';
import {Submission} from '../../shared/index';

@Component({
	selector: 'kmt-order-form',
	moduleId: module.id,
	templateUrl: 'app/+home/components/order-form.component.html',
	styleUrls: ['app/+home/components/order-form.component.css'],
})
export class OrderFormComponent {
	// public name: Control;
	// public jobTitle: Control;
	// public department: Control;
	// public email: Control;
	// public phone: Control;
	// public address: Control;
	// public city: Control;
	// public state: Control;
	// public zip: Control;
	// public costCenterNumber: Control;
	// public employeeID: Control;

	// public form: ControlGroup;

	public submission: Submission = new Submission();

	constructor() {
		// this.name = new Control('', Validators.required);
		// this.jobTitle = new Control('', Validators.required);
		// this.department = new Control('', Validators.required);
		// this.email = new Control('e.g. lastname.firstname@kennametasdasdsal.com', Validators.required);
		// this.phone = new Control('', Validators.required);
		// this.state = new Control('', Validators.required);
		// this.zip = new Control('', Validators.required);
		// this.costCenterNumber = new Control('', Validators.required);
		// this.employeeID = new Control('', Validators.required);

		// this.form = builder.group({
		// 	name: this.name,
		// 	jobTitle: this.jobTitle,
		// 	department: this.department,
		// 	email: this.email,
		// 	phone: this.phone,
		// 	address: this.address,
		// 	city: this.city,
		// 	state: this.state,
		// 	zip: this.zip,
		// 	costCenterNumber: this.costCenterNumber,
		// 	employeeID: this.employeeID
		// });
	}

	ngAfterViewInit() {
		console.log('OrderFormComponent view initialized.', this);
	}

	onSubmit() {
		console.log('on submit!', this);
	}
}
