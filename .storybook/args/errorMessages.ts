export enum ErrorMessageOptions {
  withErrors = 'with errors',
  withoutErrors = 'without errors',
}

export const errorMessagesMapping = {
  [ErrorMessageOptions.withErrors]: ['this is an error'],
  [ErrorMessageOptions.withoutErrors]: undefined,
};

export const errorMessagesArgType = {
  options: Object.keys(errorMessagesMapping),
  mapping: errorMessagesMapping,
  control: {
    type: 'radio',
  },
};
