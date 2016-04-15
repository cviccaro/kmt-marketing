export class Submission {
	constructor(
		public name: string = '',
		public jobTitle: string = '',
		public department: string = '',
		public email: string = '',
		public phone: string = '',
		public address: string = '',
		public city: string = '',
		public state: string = '',
		public zip: string = '',
		public costCenterNumber: string = '',
		public employeeID: string = '',
		public timestamp: any = null,
		public cart: any = {}
	) {}
}
