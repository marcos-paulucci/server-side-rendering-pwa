import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * withFontTachyons is a higher order function that returns a component with tachyon-like props related
 * to only margin and padding. Basically, it provides the component with a preset spacing scale
 */
function withSpacingTachyons(SpacingTachyonsComponent) {
	class SpacingTachyonsWrapper extends PureComponent {
		static propTypes = {
			/**
			 * padding property
			 */
			pa: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * padding-right property
			 */
			pr: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * padding-left property
			 */
			pl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * padding-top property
			 */
			pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * padding-bottom property
			 */
			pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * vertical padding - padding-bottom and padding-top property
			 */
			pv: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * horizontal padding - padding-left and padding-right property
			 */
			ph: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * margin property
			 */
			ma: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * margin-right property
			 */
			mr: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * margin-left property
			 */
			ml: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * margin-top property
			 */
			mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * margin-bottom property
			 */
			mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * vertical margin - margin-top and margin-bottom property
			 */
			mv: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
			/**
			 * horizontal margin - margin-right and margin-left property;
			 * negative margins are provided to account for row creation
			 */
			mh: PropTypes.oneOf([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]),
			/**
			 * Custom class naem
			 */
			className: PropTypes.string,
			/**
			 * children
			 */
			children: PropTypes.node
		}

		render() {
			const {
				children,
				className,
				pa,
				pb,
				pt,
				pr,
				pl,
				pv,
				ph,
				ma,
				mb,
				mt,
				mr,
				ml,
				mv,
				mh,
				...rest
			} = this.props;
			const spacingClasses = classNames({
				[`${className}`]: className,
				// check if undefined because 0 is also falsy
				[`myssr-n-pa${pa}`]: pa !== undefined,
				[`myssr-n-pb${pb}`]: pb !== undefined,
				[`myssr-n-pt${pt}`]: pt !== undefined,
				[`myssr-n-pr${pr}`]: pr !== undefined,
				[`myssr-n-pl${pl}`]: pl !== undefined,
				[`myssr-n-pv${pv}`]: pv !== undefined,
				[`myssr-n-ph${ph}`]: ph !== undefined,

				[`myssr-n-ma${ma}`]: ma !== undefined,
				[`myssr-n-mb${mb}`]: mb !== undefined,
				[`myssr-n-mt${mt}`]: mt !== undefined,
				[`myssr-n-mr${mr}`]: mr !== undefined,
				[`myssr-n-ml${ml}`]: ml !== undefined,
				[`myssr-n-mv${mv}`]: mv !== undefined,
				[`myssr-n-mh${mh}`]: mh !== undefined
			});
			return (
				<SpacingTachyonsComponent {...rest} className={spacingClasses}>
					{children}
				</SpacingTachyonsComponent>
			);
		}
	}

	return SpacingTachyonsWrapper;
}

export default withSpacingTachyons;