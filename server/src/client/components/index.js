import { withSpacingTachyons, withFontTachyons } from '../hocs';
import { compose } from 'redux';

import BoxCmpt from './flexview/flexview';
const _Flexview = compose(withSpacingTachyons)(BoxCmpt);
export { _Flexview as Flexview };

import TextCmpt from './text/text';
import PeopleList from './people-list/PeopleList';
const _Text = compose(
  withFontTachyons,
  withSpacingTachyons
)(TextCmpt);
export { _Text as Text };

import _PeopleList from './people-list/PeopleList';
export { _PeopleList as PeopleList };
