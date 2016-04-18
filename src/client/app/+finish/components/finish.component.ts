import {Component, AfterViewInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {SubmissionService, Submission, OrderInfoComponent, CartComponent} from '../../shared/index';

@Component({
	selector: 'kmt-finish',
	templateUrl: 'app/+finish/components/finish.component.html',
	directives: [OrderInfoComponent, CartComponent]
})

export class FinishComponent implements AfterViewInit {
	submission: any;

	constructor(private _router: Router, private _submissionService: SubmissionService) {
		this.submission = this._submissionService.getSubmission();
	}
	ngOnInit() {
		if (this.submission === false) {
			this._router.navigate(['Home']);
		}
	}
	ngAfterViewInit() {
		console.log('FinishComponent view initialized.', this);
	}
}
