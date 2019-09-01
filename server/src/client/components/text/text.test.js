import React from 'react';
import { mount } from 'enzyme';
import * as helpers from 'test-helpers';
import Text from './text';

const mountComponent = (props = {}) => mount(<Text {...props}>{helpers.getChildren('text')}</Text>);
let mountedComponent;
const mockedProps = {
  tagName: 'p',
  sizing: 'f2',
  truncated: true,
  className: 'testing-text'
};
const classes = [
  `${mockedProps.className}`,
  'myssr-n-txt',
  `myssr-n-txt--${mockedProps.sizing}`,
  ...(mockedProps.truncated ? ['myssr-n-txt--truncated'] : [])
];

describe('<Text />', () => {
  it('should be defined', () => {
    mountedComponent = mountComponent(mockedProps);
    expect(mountedComponent).toBeDefined();
    expect(mountedComponent.type()).toEqual(Text);
  });

  it('should properly render accepted props', () => {
    helpers.testAcceptedProps(mountedComponent, mockedProps);
  });

  it('should the class set in the component', () => {
    helpers.testSentClasses(mountedComponent, classes);
  });

  it('should properly render children', () => {
    expect(mountedComponent.contains(helpers.getChildren('text'))).toEqual(true);
  });

  it('should contain an element sent in tagName', () => {
    expect(mountedComponent.find(mockedProps.tagName)).toHaveLength(1);
  });

  it('should trigger an error if tagName is not a p or span', () => {
    const _mockedProps = Object.assign({}, mockedProps);
    const spyConsole = spyOn(console, 'error');

    _mockedProps.tagName = 'div';
    mountedComponent = mountComponent(_mockedProps);
    expect(spyConsole).toHaveBeenCalled();
  });

  it('should trigger an error if sizing is not a value from f1 to f7', () => {
    const _mockedProps = Object.assign({}, mockedProps);
    const spyConsole = spyOn(console, 'error');

    _mockedProps.sizing = 'f10';
    mountedComponent = mountComponent(_mockedProps);
    expect(spyConsole).toHaveBeenCalled();
  });

  it('should trigger error if children required prop not sent', () => {
    const spyConsole = spyOn(console, 'error');
    const _mountComponentWithNoChildren = (props = {}) => mount(<Text {...props} />);

    mountedComponent = _mountComponentWithNoChildren(mockedProps);
    expect(spyConsole).toHaveBeenCalled();
  });
});
