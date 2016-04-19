import {Injectable, Injector} from 'angular2/core';
import {Http} from 'angular2/http';
import {Submission, API_CONFIG, IApiConfig} from '../index';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class SubmissionService {
	config: IApiConfig;

	private _submission: Submission;

	constructor(public http: Http, private _injector: Injector) {
		this.config = this._injector.get(API_CONFIG);
	}

	setSubmission(submission: Submission) {
		this._submission = submission;
	}

	getSubmission() {
		return this._submission ? this._submission : false;
	}

	submit(submission?: Submission) : Observable<any> {
		if (submission) {
			this.setSubmission(submission);
		}

		return Observable.create((observer:Observer<any>) => {
			this.http.post(this.config.url + '/submit', JSON.stringify(this._submission))
				.map((res) => res.json())
				.subscribe((res) => {
					console.info('response from submission handler: ', res);
					if (res.success) {
						observer.next(res);
					}
					else {
						observer.error(res.errors);
					}
				}, (error: any) => {
					console.error('error from submission handler: ', error);
					observer.error(error);
				});
		});
	}
}
