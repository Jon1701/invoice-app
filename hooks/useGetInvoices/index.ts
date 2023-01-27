import { useState } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Invoice } from '@appTypes/index';

/**
 * All possible status that the hook can be in.
 */
export enum HookStatus {
  /**
   * No action has been taken.
   */
  Initial = 'initial',

  /**
   * Data fetch in-progress.
   */
  InProgress = 'in-progress',

  /**
   * Data fetch successful.
   */
  Success = 'success',

  /**
   * Data fetch failed due to endpoint not found.
   */
  ErrorNotFound = 'error-not-found',

  /**
   * Data fetch failed due to a server error.
   */
  ErrorServerError = 'error-server-error',
}

/**
 * Return values of the hook.
 */
export interface ReturnPayload {
  /**
   * Current state of the hook.
   */
  status: HookStatus;

  /**
   * Invoice data.
   */
  invoices: Array<Invoice>;

  /**
   * Function to fetch Invoices.
   */
  getInvoices(): void;
}

/**
 * Hook to fetch Invoices.
 */
const useGetInvoices = (): ReturnPayload => {
  // Invoice data.
  const [invoices, setInvoices] = useState<Array<Invoice>>([]);

  // Status of the request.
  const [status, setStatus] = useState<HookStatus>(HookStatus.Initial);

  /**
   * Fetches Invoices.
   */
  const getInvoices = async () => {
    setStatus(HookStatus.InProgress);
    setInvoices([]);

    const config: AxiosRequestConfig<Array<Invoice>> = {
      url: '/api/invoices',
      method: 'get',
    };

    const response: AxiosResponse = await axios<Array<Invoice>>(config);
    switch (response.status) {
      case 200:
        setInvoices(response.data);
        setStatus(HookStatus.Success);
        break;

      case 404:
        setStatus(HookStatus.ErrorNotFound);
        break;

      default:
        setStatus(HookStatus.ErrorServerError);
        break;
    }
  };

  return {
    status,
    invoices,
    getInvoices,
  };
};

export default useGetInvoices;
