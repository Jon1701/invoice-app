import styled from 'styled-components';

/**
 * White button.
 */
const WhiteButton = styled.button`
  all: unset;

  display: block;

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

export default WhiteButton;
