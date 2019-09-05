import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Flexview is a main Layout component used to create row and column components.
 * You can easily create a 12-column grid with the Flexview components and also add
 * any combination of background-color, border and border radius. Thanks to being
 * decorated with [withSpacingTachyons](#withSpacingTachyons), it has spacing props
 * to manage padding and margin consistently
 */
export class Flexview extends PureComponent {
  static propTypes = {
    /**
     * Number of columns on all screen widths
     */
    xsCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill']),
    /**
     * Number of columns on screen widths larger than 576px
     */
    smCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill']),
    /**
     * Number of columns on screen widths larger than 768px
     */
    mdCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill']),
    /**
     * Number of columns on screen widths larger than 992px
     */
    lgCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill']),
    /**
     * Number of columns on screen widths larger than 1200px
     */
    xlCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill']),
    /**
     * Alpha/Opacity for the content
     */
    alpha: PropTypes.bool,
    /**
     * align-self property, cross axis alignment set on a child element
     */
    alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
    /**
     * justify-content property, main axis alignment set on a parent element
     */
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
    /**
     * align-items property, cross axis alignment set on a parent element
     */
    alignItems: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
    /**
     * flex-direction
     */
    flex: PropTypes.oneOf(['row', 'column']),

    /**
     * Determines if all borders present
     */
    ba: PropTypes.bool,
    /**
     * Determines if border-right present
     */
    br: PropTypes.bool,
    /**
     * Determines if border-left present
     */
    bl: PropTypes.bool,
    /**
     * Determines if border-bottom present
     */
    bb: PropTypes.bool,
    /**
     * Determines if border-top present
     */
    bt: PropTypes.bool,
    /**
     * border-color property
     */
    bc: PropTypes.oneOf(['neutral-0', 'neutral-30', 'neutral-20', 'white']),
    /**
     * border-radius property with the following scale: 2px, 4px, 8px, 16px, 100%
     */
    brad: PropTypes.oneOf([0, 1, 2, 3, 4, 100]),
    /**
     * background-color property
     */
    bg: PropTypes.oneOf([
      'transparent',
      'neutral-63',
      'neutral-30',
      'neutral-81',
      'neutral-20',
      'neutral-8',
      'neutral-3',
      'neutral-0',
      'primary-40',
      'primary-75',
      'primary-90',
      'primary-100',
      'secondary-90',
      'secondary-95',
      'secondary-100',
      'danger-90',
      'warning-90',
      'success-40',
      'success-90',
      'success-100',
      'bad-75',
      'bad-100',
      'good-40',
      'good-75',
      'good-100'
    ]),
    /**
     * text-align property
     */
    textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit']),
    /**
     * Custom class
     */
    className: PropTypes.string,
    /**
     * Disable all content
     */
    disabled: PropTypes.bool,
    /**
     * Tag name
     */
    tagName: PropTypes.oneOf(['div', 'span', 'ul', 'li']).isRequired,
    /**
     * Children
     */
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'div'
  };

  render() {
    const {
      xsCol,
      smCol,
      mdCol,
      lgCol,
      xlCol,
      alignSelf,
      justifyContent,
      alignItems,
      flex,
      ba,
      br,
      bl,
      bb,
      bt,
      bc,
      brad,
      bg,
      textAlign,
      className,
      tagName,
      alpha,
      disabled,
      ...rest
    } = this.props;
    const flexviewClasses = classNames({
      [`${this.props.className}`]: className,

      [`myssr-n-col-${xsCol}`]: xsCol,
      [`myssr-n-col-sm-${smCol}`]: smCol,
      [`myssr-n-col-md-${mdCol}`]: mdCol,
      [`myssr-n-col-lg-${lgCol}`]: lgCol,
      [`myssr-n-col-xl-${xlCol}`]: xlCol,

      [`myssr-n-align-self-${alignSelf}`]: alignSelf,
      [`myssr-n-justify-content-${justifyContent}`]: justifyContent,
      [`myssr-n-align-items-${alignItems}`]: alignItems,
      [`myssr-n-flex-${flex}`]: flex,

      'myssr-n-ba': ba,
      'myssr-n-br': br,
      'myssr-n-bl': bl,
      'myssr-n-bb': bb,
      'myssr-n-bt': bt,

      [`myssr-n-bc-${bc}`]: bc,
      [`myssr-n-br${brad}`]: brad,
      [`myssr-n-bg-${bg}`]: bg,

      [`myssr-n-ta-${textAlign}`]: textAlign,
      'myssr-n-alpha': alpha,
      'myssr-n-disabled': disabled
    });
    const SpecificElement = tagName;

    return (
      <SpecificElement className={flexviewClasses} {...rest}>
        {this.props.children}
      </SpecificElement>
    );
  }
}

export default Flexview;
