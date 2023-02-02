export enum ClickHandlerOptions {
  withClickHandlerFunction = 'with click handler function',
  withoutClickHandlerFunction = 'without click handler function',
}

export const onClickButtonMapping = {
  [ClickHandlerOptions.withClickHandlerFunction]: () => {
    alert('Button clicked');
  },
  [ClickHandlerOptions.withoutClickHandlerFunction]: undefined,
};

export const onClickButtonArgType = {
  options: Object.keys(onClickButtonMapping),
  mapping: onClickButtonMapping,
  control: {
    type: 'radio',
  },
};
