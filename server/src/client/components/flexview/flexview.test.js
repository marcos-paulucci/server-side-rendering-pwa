import React from 'react';
import { mount } from 'enzyme';
import { Flexview } from './flexview';
let children = <span className="testing-flexview-children">this is a child</span>;
const mountComponent = (props = {}) => {
  return mount(<Flexview {...props}>{children}</Flexview>);
};
let mountedComponent;
const mockedProps = {
  tagName: 'div',
  xsCol: 12,
  smCol: 'auto',
  mdCol: 'auto',
  lgCol: 'auto',
  xlCol: 'auto',
  alignSelf: 'baseline',
  justifyContent: 'between',
  alignItems: 'end',
  flex: 'column',
  ba: true,
  br: true,
  bl: true,
  bb: false,
  bt: true,
  bc: 'neutral-20',
  brad: 2,
  bg: 'neutral-3',
  textAlign: 'center',
  className: 'testing-flexview'
};
const classes = [
  `${mockedProps.className}`,
  `myssr-n-col-${mockedProps.xsCol}`,
  `myssr-n-col-sm-${mockedProps.smCol}`,
  `myssr-n-col-md-${mockedProps.mdCol}`,
  `myssr-n-col-lg-${mockedProps.lgCol}`,
  `myssr-n-col-xl-${mockedProps.xlCol}`,
  `myssr-n-align-self-${mockedProps.alignSelf}`,
  `myssr-n-justify-content-${mockedProps.justifyContent}`,
  `myssr-n-align-items-${mockedProps.alignItems}`,
  `myssr-n-flex-${mockedProps.flex}`,
  ...(mockedProps.ba ? ['myssr-n-ba'] : []),
  ...(mockedProps.br ? ['myssr-n-br'] : []),
  ...(mockedProps.bl ? ['myssr-n-bl'] : []),
  ...(mockedProps.bb ? ['myssr-n-bb'] : []),
  ...(mockedProps.bt ? ['myssr-n-bt'] : []),
  `myssr-n-bc-${mockedProps.bc}`,
  `myssr-n-br${mockedProps.brad}`,
  `myssr-n-bg-${mockedProps.bg}`,
  `myssr-n-ta-${mockedProps.textAlign}`
];

describe('<Flexview />', () => {
  it('should be defined', () => {
    mountedComponent = mountComponent(mockedProps);
    expect(mountedComponent).toBeDefined();
  });

  it('should properly render accepted props', () => {
    Object.keys(mockedProps).map(propName =>
      expect(mountedComponent.prop(propName)).toEqual(mockedProps[propName])
    );
  });

  it('should properly render children', () => {
    expect(mountedComponent.contains(children)).toBeTruthy();
  });

  it('should contain all classes regarding the sent props', () => {
    classes.forEach(className => {
      expect(mountedComponent.find(`.${className}`).exists()).toBeTruthy();
    });
  });

  it('should render with default div value if required prop tagName is not sent', () => {
    const _mockedProps = Object.assign({}, mockedProps);
    const spyConsole = spyOn(console, 'error');

    delete _mockedProps.tagName;
    mountedComponent = mountComponent(_mockedProps);
    expect(mountedComponent).toBeDefined();
    expect(spyConsole).toHaveBeenCalledTimes(0);
  });

  it('should trigger error if tagName is not one of the required values', () => {
    const _mockedProps = Object.assign({}, mockedProps);
    const spyConsole = spyOn(console, 'error');

    _mockedProps.tagName = 'p';
    mountedComponent = mountComponent(_mockedProps);
    expect(spyConsole).toHaveBeenCalled();
  });
});
