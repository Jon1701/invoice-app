import React from 'react';
import styled from 'styled-components';

interface ListProps {
  /**
   * Indicates if more than 1 error message is associated with the form field.
   */
  hasMultipleErrors: boolean;
}

/**
 * Styled list.
 */
const List = styled.ul<ListProps>`
  margin-top: 5px;
  padding-left: ${props => (props.hasMultipleErrors ? '15px' : '0')};

  font-size: 0.9em;
  color: #dc143c;

  // Hide bullets if only one error message is provided.
  list-style-type: ${props => (props.hasMultipleErrors ? 'disc' : 'none')};
`;

interface Props {
  /**
   * Array of error messages to be displayed.
   */
  errors?: Array<string>;
}

/**
 * Displays a list of form field error messages associated with one particular
 * form field.
 */
const FieldErrors: React.FC<Props> = ({ errors }: Props) => {
  // Check if there are errors.
  const hasErrors: boolean = errors !== undefined && errors.length > 0;

  // Don't display component if there are no errors to display.
  if (!hasErrors) {
    return <React.Fragment />;
  }

  // Check if there's more than one error to display.
  const hasMultipleErrors: boolean = (errors && errors.length > 1) || false;

  return (
    <List hasMultipleErrors={hasMultipleErrors}>
      {hasErrors
        ? errors?.map((item: string) => (
            <li key={item.replace(' ', '').toLowerCase()}>{item}</li>
          ))
        : undefined}
    </List>
  );
};

export default FieldErrors;
