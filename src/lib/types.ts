export enum AlertType {
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
	INFO = 'info'
}

export type AlertMessage = {
	alertType: AlertType;
	alertText: string;
};

export type EnterKeyHint =
	| 'search'
	| 'enter'
	| 'done'
	| 'go'
	| 'next'
	| 'previous'
	| 'send'
	| null
	| undefined;

// Type for prettifying an object type
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & Record<string, never>;
