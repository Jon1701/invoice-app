import { booleanMapping } from './booleanMapping';

export const readOnlyArgType = {
  options: Object.keys(booleanMapping),
  mapping: booleanMapping,
  control: {
    type: 'radio',
  },
};
