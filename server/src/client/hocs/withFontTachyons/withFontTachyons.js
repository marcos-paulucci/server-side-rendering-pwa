import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * withFontTachyons is a higher order function that return a component with tachyon-like props related to fonts
 * It provides a color theme for text components.
 *
 * - .myssr-n-neutral-81
 * - .myssr-n-neutral-100
 * - .myssr-n-neutral-63
 * - .myssr-n-neutral-30
 * - .myssr-n-neutral-20
 * - .myssr-n-neutral-0
 * - .myssr-n-inherit
 * - .myssr-n-primary-75
 * - .myssr-n-primary-40
 * - .myssr-n-warning-75
 * - .myssr-n-danger-75
 * - .myssr-n-success-75
 * - .myssr-n-success-40
 * - .myssr-n-success-90
 * - .myssr-n-success-100
 * - .myssr-n-secondary-30
 * - .myssr-n-secondary-95
 * - .myssr-n-secondary-100
 * - .myssr-n-bad-40
 * - .myssr-n-bad-75
 * - .myssr-n-bad-90
 * - .myssr-n-good-40
 * - .myssr-n-good-75
 * - .myssr-n-good-90
 *
 * It also provides a fw(font-weight) and caps props
 */
function withFontTachyons(FontTachyonsComponent) {
  class FontTachyonsWrapper extends PureComponent {
    static propTypes = {
      /**
       * color property
       */
      color: PropTypes.oneOf([
        'neutral-81',
        'neutral-100',
        'neutral-63',
        'neutral-30',
        'neutral-20',
        'neutral-0',
        'inherit',
        'primary-40',
        'primary-75',
        'primary-90',
        'warning-75',
        'danger-75',
        'success-75',
        'success-40',
        'success-90',
        'success-100',
        'secondary-30',
        'secondary-95',
        'secondary-100',
        'bad-40',
        'bad-75',
        'bad-90',
        'good-40',
        'good-75',
        'good-90',
        'information-90',
        'warning-90',
        'danger-90'
      ]),
      /**
       * font-weight property
       */
      fw: PropTypes.oneOf(['thin', 'normal', 'bold']),
      /**
       * font-style property
       */
      fs: PropTypes.oneOf(['italic', 'normal', 'oblique']),
      /**
       * Determines whether letters are capitalized
       */
      caps: PropTypes.bool,
      /**
       * Custom class name
       */
      className: PropTypes.string
    };

    render() {
      const { className, color, fw, fs, caps, ...rest } = this.props;
      const fontClasses = classNames({
        [`${className}`]: className,
        [`myssr-n-${color}`]: color,
        [`myssr-n-fw-${fw}`]: fw,
        [`myssr-n-fs-${fs}`]: fs,
        'myssr-n-caps': caps
      });

      return <FontTachyonsComponent {...rest} className={fontClasses} />;
    }
  }

  return FontTachyonsWrapper;
}

export default withFontTachyons;
