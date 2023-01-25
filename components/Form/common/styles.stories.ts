export const errorMappings = {
  'with errors': ['this is an error'],
  'without errors': undefined,
};

export const args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClearButtonClick: () => {},
  disabled: false,
  readOnly: false,
};

export const argTypes = {
  errorMessages: {
    options: Object.keys(errorMappings),
    mapping: errorMappings,
    control: {
      type: 'radio',
    },
  },
};
