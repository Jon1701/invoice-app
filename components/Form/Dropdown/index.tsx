import React from 'react';

import { BaseDropdown, BaseDropdownProps } from '../common';

/**
 * Dropdown control.
 *
 * @param props Component props.
 * @param ref Reference to this element.
 */
const Dropdown = React.forwardRef<HTMLSelectElement, BaseDropdownProps>(
  ({ children, ...rest }, ref) => {
    return (
      <BaseDropdown ref={ref} {...rest}>
        {children}
      </BaseDropdown>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
