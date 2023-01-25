import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faCircleInfo,
  faCircleExclamation,
  faCircleCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface BaseStyledAlertProps {
  /**
   * Indicates if there should be space below the Alert.
   */
  showSpaceBelow?: boolean;
}

/**
 * Default alert style.
 */
const BaseStyledAlert = styled.div<BaseStyledAlertProps>`
  position: relative;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  border-style: solid;
  border-width: 1px;
  border-color: #084298;

  background-color: #031633;
  color: #6ea8fe;

  padding: 15px;

  margin-bottom: ${props => (props.showSpaceBelow ? '15px' : '0')};
`;

/**
 * Success Alert style.
 */
const StyledSuccessAlert = styled(BaseStyledAlert)`
  border-color: #0f5132;
  background-color: #051b11;
  color: #75b798;
`;

/**
 * Danger Alert style.
 */
const StyledDangerAlert = styled(BaseStyledAlert)`
  border-color: #84291f;
  background-color: #2c0b0e;
  color: #ea868f;
`;

/**
 * Warning Alert style.
 */
const StyledWarningAlert = styled(BaseStyledAlert)`
  border-color: #664d03;
  background-color: #332701;
  color: #ffda6a;
`;

/**
 * Info Alert style.
 */
const StyledInfoAlert = styled(BaseStyledAlert)`
  border-color: #055160;
  background-color: #032830;
  color: #6edff6;
`;

/**
 * Button without any styles.
 */
const StyledButton = styled.button`
  all: unset;
`;

/**
 * Allowed alert types.
 */
export enum AlertTypes {
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Default = 'default',
}

export interface AlertProps {
  /**
   * Indicates if the alert type symbol should be visible.
   */
  showSymbol?: boolean;

  /**
   * Type of alert.
   */
  alertType: AlertTypes;

  /**
   * Click handler for the close button.
   */
  handleCloseButtonClick?: () => void;

  /**
   * Indicates if there should be space below the alert.
   */
  showSpaceBelow?: boolean;

  /**
   * Alert contents.
   */
  children: React.ReactNode;
}

/**
 * Displays an Alert.
 */
export const Alert: React.FC<AlertProps> = ({
  showSymbol = true,
  alertType,
  handleCloseButtonClick,
  showSpaceBelow = true,
  children,
}) => {
  let Container = BaseStyledAlert;
  let Icon = faCircleInfo;

  switch (alertType) {
    case AlertTypes.Danger:
      Container = StyledDangerAlert;
      Icon = faTriangleExclamation;
      break;

    case AlertTypes.Success:
      Container = StyledSuccessAlert;
      Icon = faCircleCheck;
      break;

    case AlertTypes.Warning:
      Container = StyledWarningAlert;
      Icon = faCircleExclamation;
      break;

    case AlertTypes.Info:
      Container = StyledInfoAlert;
      Icon = faCircleInfo;
      break;

    default:
      Container = BaseStyledAlert;
      Icon = faCircleInfo;
      break;
  }

  return (
    <Container showSpaceBelow={showSpaceBelow}>
      {showSymbol && alertType !== AlertTypes.Default ? (
        <span>
          <FontAwesomeIcon icon={Icon} />
        </span>
      ) : undefined}

      <div>{children}</div>

      {handleCloseButtonClick !== undefined ? (
        <span>
          <StyledButton type="button" onClick={handleCloseButtonClick}>
            <FontAwesomeIcon icon={faXmark} />
          </StyledButton>
        </span>
      ) : undefined}
    </Container>
  );
};
