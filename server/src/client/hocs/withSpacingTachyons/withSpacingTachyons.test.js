import React from "react";
import { mount } from "enzyme";
import * as helpers from "test-helpers";
import withSpacingTachyons from "./withSpacingTachyons";

const mockedProps = {
	pa: 1,
	ma: 3,
	mr: 5,
	mh: -3,
	className: "testing-with-spacing-tachyons"
};
const MockedComponent = () => (<div />);
const WithSpacingTachyons = withSpacingTachyons((props={}) => <MockedComponent {...props} />);
let mountedComponent;
const classes = [
	mockedProps.className,
	`myssr-n-pa${mockedProps.pa}`,
	`myssr-n-ma${mockedProps.ma}`,
	`myssr-n-mr${mockedProps.mr}`,
	`myssr-n-mh${mockedProps.mh}`
];

describe("WithSpacingTachyons Hoc", () => {
	it("should be defined", () => {
		const withHocComponent = mount(<WithSpacingTachyons {...mockedProps} />);
		mountedComponent = withHocComponent.find(MockedComponent);
		expect(mountedComponent).toBeDefined();
		expect(mountedComponent.type()).toEqual(MockedComponent);
	});

	it("should properly render accepted props", () => {
		Object.keys(mockedProps).map((propName) => (
			propName === "className"
				? expect(mountedComponent.prop(propName)).toEqual(classes.join(" "))
				: expect(mountedComponent.prop(propName)).toEqual(mockedProps[propName])
		));
	});

	it("should the class set in the component", () => {
		helpers.testSentClasses(mountedComponent, classes);
	});
});