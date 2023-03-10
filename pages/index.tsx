import React, { useEffect } from 'react';
import styled from 'styled-components';

import useGetInvoices, {
  ReturnPayload,
  HookStatus,
} from '@hooks/useGetInvoices';
import Layout from '@layouts/IndexPage';
import ListInvoicesTable from '@components/Invoices/Tables/ListInvoices';
import Loading from '@components/Loading';

import { NextPageWithLayout } from './_app';

/**
 * Component container.
 */
const Container = styled.main``;

/**
 * Content margins.
 */
const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 10px;
`;

/**
 * Styled H1.
 */
const H1 = styled.h1`
  margin-top: 0;
`;

/**
 * Container for the No Data message.
 */
const ContainerNoData = styled.div`
  text-align: center;
  border: solid 1.5px #fff;
  border-radius: 3px;
  padding: 15px;
`;

/**
 * Index page.
 */
const IndexPage: NextPageWithLayout = () => {
  // Invoice data.
  const { status, invoices, getInvoices }: ReturnPayload = useGetInvoices();

  useEffect(() => {
    // Fetch Invoices.
    getInvoices();
  }, []);

  /**
   * Displays a table of Invoices, or an error.
   */
  const renderDataTable = (): React.ReactNode => {
    switch (status) {
      case HookStatus.InProgress:
      case HookStatus.Initial:
        return <Loading />;

      case HookStatus.Success:
        {
          if (invoices.length === 0) {
            return <ContainerNoData>No Invoices found.</ContainerNoData>;
          }
          return <ListInvoicesTable invoices={invoices} />;
        }
        break;

      default:
        return (
          <div style={{ textAlign: 'center' }}>
            There was a problem loading Invoices.
          </div>
        );
        break;
    }
  };

  return (
    <Container>
      <Content>
        <H1>Invoices</H1>

        {renderDataTable()}
      </Content>
    </Container>
  );
};

IndexPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
