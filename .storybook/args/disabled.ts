import { booleanMapping } from './booleanMapping';

export const disabledArgType = {
  options: Object.keys(booleanMapping),
  mapping: booleanMapping,
  control: {
    type: 'radio',
  },
};
