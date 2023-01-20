import React from 'react';
import styled, { StyledComponent } from 'styled-components';

/**
 * Base button style.
 */
const BaseButton = styled.button`
  display: block;
  all: unset;

  background-color: #000;
  border-width: 1.5px;
  border-color: #fff;
  border-style: solid;
  border-radius: 3px;
  padding: 10px;

  transition: ease-in-out 0.3s;
  box-sizing: border-box;
  user-select: none;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    border-style: dashed;
  }
`;

/**
 * Solid variant style.
 */
export const SolidButton = styled(BaseButton)`
  background-color: #7743db;
  border-color: #7743db;
  color: #fff;
`;

/**
 * Hollow variant style.
 */
export const HollowButton = styled(BaseButton)`
  background-color: #25273c;
  border-color: #7743db;
  color: #fff;
`;
