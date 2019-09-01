import { withSpacingTachyons, withFontTachyons } from '../hocs';
import { compose } from 'redux';

import BoxCmpt from './box/box';
const _Box = compose(withSpacingTachyons)(BoxCmpt);
export { _Box as Box };

import TextCmpt from './text/text';
import PeopleList from './people-list/PeopleList';
const _Text = compose(
  withFontTachyons,
  withSpacingTachyons
)(TextCmpt);
export { _Text as Text };

import _PeopleList from './people-list/PeopleList';
export { _PeopleList as PeopleList };
