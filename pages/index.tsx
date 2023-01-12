import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

/**
 * Styled main component.
 */
const Main = styled.main`
  display: grid;
  align-content: center;

  background-color: #181818;
  color: #eaeaea;

  min-height: 100vh;

  text-align: center;
`;

/**
 * Styled H1 component.
 */
const H1 = styled.h1``;

/**
 * Index page.
 */
const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next.js Application Template</title>
        <meta
          name="description"
          content="Template repository to quickly start developing Next.js and TypeScript applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <H1>Next.js Application Template</H1>
        <p>
          This is a template repository to quickly start developing Next.js and
          TypeScript applications.
        </p>
      </Main>
    </React.Fragment>
  );
};

export default IndexPage;
