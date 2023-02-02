import React from 'react';
import styled from 'styled-components';

import { Action, ActionCreator } from '@components/Invoices/Form/actions';
import { breakpoints } from '@utils/breakpoints';
import { ContactInfo } from '@appTypes/index';
import Dropdown from '@components/Form/Dropdown';
import Input from '@components/Form/Input';
import Label from '@components/Form/Label';

import { Legend } from './styles';

/**
 * Component container.
 */
const Container = styled.fieldset`
  all: unset;

  display: grid;

  @media screen and (min-width: ${breakpoints.mobile
      .min}px) and (max-width: ${breakpoints.mobile.max}px) {
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }

  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);

  gap: 15px;
`;

/**
 * Component props.
 */
interface Props<ActionCreatorType> {
  /**
   * Fieldset legend.
   */
  title: string;

  /**
   * Contact Info form values.
   */
  contactInfo: ContactInfo;

  /**
   * Dispatches actions.
   */
  dispatch: React.Dispatch<ActionCreatorType>;

  /**
   * Sets the name.
   */
  setName(payload: string): ActionCreator<string>;

  /**
   * Sets the email address.
   */
  setEmail(payload: string): ActionCreator<string>;

  /**
   * Sets address line 1.
   */
  setAddressLine1(payload: string): ActionCreator<string>;

  /**
   * Sets address line 2.
   */
  setAddressLine2(payload: string): ActionCreator<string>;

  /**
   * Sets address city.
   */
  setAddressCity(payload: string): ActionCreator<string>;

  /**
   * Sets address state.
   */
  setAddressState(payload: string): ActionCreator<string>;

  /**
   * Sets address postal code.
   */
  setAddressPostalCode(payload: string): ActionCreator<string>;

  /**
   * Sets address country.
   */
  setAddressCountry(payload: string): ActionCreator<string>;

  /**
   * Indicates if the form is read-only.
   */
  readOnly?: boolean;

  /**
   * Indicates if the form is disabled.
   */
  disabled?: boolean;
}

const ContactFieldset: React.FC<Props<Action>> = ({
  title,
  contactInfo,
  dispatch,
  setName,
  setEmail,
  setAddressLine1,
  setAddressLine2,
  setAddressCity,
  setAddressState,
  setAddressPostalCode,
  setAddressCountry,
  readOnly = false,
  disabled = false,
}) => {
  // Determines the correct prefix for labels.
  const idPrefix = title.toLowerCase();

  return (
    <Container>
      <Legend>{title}</Legend>
      <div>
        <Label htmlFor={`${idPrefix}-address-name`} isRequired>
          Name
        </Label>
        <Input
          id={`${idPrefix}-address-name`}
          type="text"
          value={contactInfo.name}
          onChange={e => {
            dispatch(setName(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setName(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-email`} isRequired>
          Email Address
        </Label>
        <Input
          id={`${idPrefix}-address-email`}
          type="email"
          value={contactInfo.email}
          onChange={e => {
            dispatch(setEmail(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setEmail(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-line1`} isRequired>
          Line 1
        </Label>
        <Input
          id={`${idPrefix}-address-line1`}
          type="text"
          value={contactInfo.address.line1}
          onChange={e => {
            dispatch(setAddressLine1(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressLine1(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-line2`}>Line 2</Label>
        <Input
          id={`${idPrefix}-address-line2`}
          type="text"
          value={contactInfo.address?.line2}
          onChange={e => {
            dispatch(setAddressLine2(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressLine2(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-city`} isRequired>
          City
        </Label>
        <Input
          id={`${idPrefix}-address-city`}
          type="text"
          value={contactInfo.address.city}
          onChange={e => {
            dispatch(setAddressCity(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressCity(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-state`} isRequired>
          State
        </Label>
        <Input
          id={`${idPrefix}-address-state`}
          type="text"
          value={contactInfo.address.state}
          onChange={e => {
            dispatch(setAddressState(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressState(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-postal-code`} isRequired>
          ZIP/Postal Code
        </Label>
        <Input
          id={`${idPrefix}-address-postal-code`}
          type="text"
          value={contactInfo.address.postalCode}
          onChange={e => {
            dispatch(setAddressPostalCode(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressPostalCode(''));
          }}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-address-country`} isRequired>
          Country
        </Label>
        <Dropdown
          id={`${idPrefix}-address-country`}
          value={contactInfo.address.country}
          onChange={e => {
            dispatch(setAddressCountry(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressCountry(''));
          }}
          disabled={disabled || readOnly}>
          <option disabled hidden>
            (Select One)
          </option>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
        </Dropdown>
      </div>
    </Container>
  );
};

export default ContactFieldset;
