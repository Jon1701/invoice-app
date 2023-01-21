import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  /**
   * CSS classnames.
   */
  className?: string;

  /**
   * Unique ID of the form to the control this label is associated.
   */
  htmlFor?: string;

  /**
   * Indicates if this field is required.
   */
  isRequired?: boolean;

  /**
   * Label contents.
   */
  children: React.ReactNode;
}

/**
 * Styled label.
 */
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 2px;
`;

/**
 * Container for the asterisk.
 */
const ContainerAsterisk = styled.span`
  color: #dc143c;
`;

/**
 * Label.
 */
const Label: React.FC<LabelProps> = ({
  className,
  htmlFor,
  isRequired,
  children,
}) => {
  return (
    <StyledLabel className={className} htmlFor={htmlFor}>
      <React.Fragment>{children}</React.Fragment>
      {isRequired ? <ContainerAsterisk>*</ContainerAsterisk> : undefined}
    </StyledLabel>
  );
};

export default Label;
