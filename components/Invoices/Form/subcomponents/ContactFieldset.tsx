import React from 'react';
import styled from 'styled-components';

import { Action, ActionCreator } from '@components/Invoices/Form/actions';
import { ContactInfo } from '@appTypes/index';
import Dropdown from '@components/Form/Dropdown';
import InputText from '@components/Form/InputText';
import Label from '@components/Form/Label';
import { breakpoints } from '@utils/breakpoints';

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
        <InputText
          id={`${idPrefix}-address-name`}
          value={contactInfo.name}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-email`}
          value={contactInfo.email}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-line1`}
          value={contactInfo.address.line1}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-line2`}
          value={contactInfo.address?.line2}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-city`}
          value={contactInfo.address.city}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-state`}
          value={contactInfo.address.state}
          handleChange={e => {
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
        <InputText
          id={`${idPrefix}-address-postal-code`}
          value={contactInfo.address.postalCode}
          handleChange={e => {
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
          handleChange={e => {
            dispatch(setAddressCountry(e.target.value));
          }}
          handleClearButtonClick={() => {
            dispatch(setAddressCountry(''));
          }}
          disabled={disabled || readOnly}>
          <option>(Select One)</option>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
        </Dropdown>
      </div>
    </Container>
  );
};

export default ContactFieldset;
