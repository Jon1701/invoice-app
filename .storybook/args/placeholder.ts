export enum PlaceholderOptions {
  withPlaceholder = 'with placeholder',
  withoutPlaceholder = 'without placeholder',
}

export const placeholderMapping = {
  [PlaceholderOptions.withPlaceholder]: 'This is some placeholder text',
  [PlaceholderOptions.withoutPlaceholder]: undefined,
};

export const placeholderArgType = {
  options: Object.keys(placeholderMapping),
  mapping: placeholderMapping,
  control: {
    type: 'radio',
  },
};
