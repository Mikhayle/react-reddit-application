import * as React from 'react';
import any = jasmine.any;



// task 1
const concat = (str1: string, str2: string): string => {
	return str1 + str2;
}

const str3 = concat('follow', 'me')

// task 2

interface IMyHomeTask {
	howIDoIt: string;
	simeArray: [string, string, number];
	withData: [{
		howIDoIt: string;
		simeArray: [string, number]
	}]
}

const MyHomeTask: IMyHomeTask = {
	howIDoIt: 'i Do It Well',
	simeArray: ['string one', 'string two', 42],
	withData: [{
		howIDoIt: 'I Do It well',
		simeArray: ['string one', 23]
	}]
}

// task 3
const myArray: Array<number> = [1,2,3];

interface MyArray<T> {
	[N: number]: T
	map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): U[]
	reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, arr: MyArray<T>) => U, initialValue: U): U;
}

// task4
interface IHomeTask {
	data: string;
	numbericData: number;
	date: Date;
	externalData: {
		basis: number;
		value: string;
	}
}

const homeTask: MyPartial<IHomeTask> = {
	externalData: {
		value: 'win'
	}
}

type MyPartial<T> = {
	[N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

// task 5
function HomeComponent(props: IProps) {
	return (
		<div>
			{ props.firstProp }
		</div>
	)
}


interface IProps {
	firstProp: string
}


type TMyType<T> = T extends React.ComponentType<((...args: infer E) => any)> ? E : any;

type t = TMyType<typeof HomeComponent>





