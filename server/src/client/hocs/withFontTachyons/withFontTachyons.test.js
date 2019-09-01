import React from 'react';
import { mount } from 'enzyme';
import * as helpers from 'test-helpers';
import withFontTachyons from './withFontTachyons';

const mockedProps = {
  color: 'neutral-0',
  fw: 'thin',
  caps: true,
  className: 'testing-with-font-tachyons'
};
const MockedComponent = () => <div />;
const WithFontTachyons = withFontTachyons((props = {}) => <MockedComponent {...props} />);
let mountedComponent;
const classes = [
  mockedProps.className,
  `myssr-n-${mockedProps.color}`,
  `myssr-n-fw-${mockedProps.fw}`,
  ...(mockedProps.caps ? ['myssr-n-caps'] : [])
];

describe('WithFontTachyons Hoc', () => {
  it('should be defined', () => {
    const withHocComponent = mount(<WithFontTachyons {...mockedProps} />);
    mountedComponent = withHocComponent.find(MockedComponent);
    expect(mountedComponent).toBeDefined();
    expect(mountedComponent.type()).toEqual(MockedComponent);
  });

  it('should properly render accepted props', () => {
    Object.keys(mockedProps).map(propName =>
      propName === 'className'
        ? expect(mountedComponent.prop(propName)).toEqual(classes.join(' '))
        : expect(mountedComponent.prop(propName)).toEqual(mockedProps[propName])
    );
  });

  it('should the class set in the component', () => {
    helpers.testSentClasses(mountedComponent, classes);
  });

  it("shouldn't have class myssr-n-caps if caps prop is false", () => {
    const _mockedProps = Object.assign({}, mockedProps);
    let _withHocComponent;

    _mockedProps.caps = false;
    _withHocComponent = mount(<WithFontTachyons {..._mockedProps} />);
    mountedComponent = _withHocComponent.find(MockedComponent);
    expect(mountedComponent.find('.myssr-n-caps')).toHaveLength(0);
  });
});
