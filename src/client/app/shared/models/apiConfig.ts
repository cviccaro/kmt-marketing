import {OpaqueToken} from 'angular2/core';

export interface IApiConfig {
	url: string;
}

export const apiConfig: IApiConfig = {
	url: "http://kmt.localhost"
};

export var API_CONFIG = new OpaqueToken('API_CONFIG');
