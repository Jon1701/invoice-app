export enum ModalTitleEnums {
  ShortLengthTitle = 'Short-length title',
  MediumLengthTitle = 'Medium-length title',
  LongTitle = 'Long-length title',
}

export const modalTitleMapping = {
  [ModalTitleEnums.ShortLengthTitle]: 'Short title',
  [ModalTitleEnums.MediumLengthTitle]: 'This is a medium-length title',
  [ModalTitleEnums.LongTitle]:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod culpa eaque repudiandae eveniet quibusdam numquam error quasi cumque quam omnis dicta, veritatis reprehenderit porro possimus quis ex asperiores in.',
};

export const modalTitleArgType = {
  options: Object.keys(modalTitleMapping),
  mapping: modalTitleMapping,
  control: {
    type: 'radio',
  },
};
