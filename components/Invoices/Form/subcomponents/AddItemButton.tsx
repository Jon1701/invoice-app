import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

/**
 * Styled button.
 */
const StyledButton = styled.button`
  all: unset;

  display: block;
  width: 100%;

  border-width: 1.5px;
  border-style: solid;
  border-color: #25273c;
  padding: 10px;

  background-color: #fff;
  color: #25273c;

  text-align: center;
  user-select: none;

  box-sizing: border-box;
  border-radius: 3px;

  cursor: pointer;

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

/**
 * Component props.
 */
interface Props {
  /**
   * Click handler function.
   */
  handleClick(): void;
}

/**
 * Button to add an Invoice Item.
 */
const AddItemButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <StyledButton type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={faCirclePlus} /> Add Item
    </StyledButton>
  );
};

export default AddItemButton;
