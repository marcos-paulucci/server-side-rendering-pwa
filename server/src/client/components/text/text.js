import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Text component returning either `<p>` or `<span>` tag by default. Its sizing theme can be customized by
 * overwriting the following class names:
 *
 * - .myssr-n-txt--f1
 * - .myssr-n-txt--f2
 * - .myssr-n-txt--f3
 * - .myssr-n-txt--f4
 * - .myssr-n-txt--f5
 * - .myssr-n-txt--f6
 *
 * It is wrapped with withFontTachyons that give us a color, fw(font-weight), and caps props.
 * Also, it is decorated with withSpacingTachyons so it has all the padding and margin tachyons-like props.
 */
class Text extends PureComponent {
  static propTypes = {
    /**
     * Html tag
     */
    tagName: PropTypes.oneOf(['span', 'p']),
    /**
     * Text sizing
     */
    sizing: PropTypes.oneOf(['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7']),
    /**
     * Custom class name
     */
    className: PropTypes.string,
    /**
     * Children
     */
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'span',
    sizing: 'f2'
  };

  render() {
    const SpecificElement = this.props.tagName;
    const textClasses = classNames({
      [`${this.props.className}`]: this.props.className,
      'myssr-n-txt': true,
      [`myssr-n-txt--${this.props.sizing}`]: true
    });

    return <SpecificElement className={textClasses}>{this.props.children}</SpecificElement>;
  }
}

export default Text;
