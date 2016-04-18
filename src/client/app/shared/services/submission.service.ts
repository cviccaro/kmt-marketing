import {Injectable} from 'angular2/core';
import {Submission} from '../index';

@Injectable()
export class SubmissionService {
	private _submission: Submission;

	setSubmission(submission: Submission) {
		this._submission = submission;
	}

	getSubmission() {
		return this._submission ? this._submission : false;
	}
}
