import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const CommonStyles = css`
    text-align: center;
`;

const Styled = {
    Container: styled.div`
        padding: 0 2rem;
    `,
    Main: styled.main`
        min-height: 100vh;
        padding: 4rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    Code: styled.code`
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
    `,
    Title: styled.h1`
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        ${CommonStyles};
        & a {
            color: #0070f3;
            text-decoration: none;
            &:hover,
            &:active,
            &:focus {
                text-decoration: underline;
            }
        }
    `,
    Description: styled.p`
        ${CommonStyles};
        margin: 4rem 0;
        line-height: 1.5;
        font-size: 1.5rem;
    `,
    Grid: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px;
        @media (max-width: 600px) {
            width: 100%;
            flex-direction: column;
        }
    `,
    Card: styled.a`
        margin: 1rem;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        max-width: 300px;
        & p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
        }
        & h2 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
        }
        &:hover,
        &:focus,
        &:active {
            color: #0070f3;
            border-color: #0070f3;
        }
    `,
    Logo: styled.span`
        height: 1em;
        margin-left: 0.5rem;
    `,
    Footer: styled.footer`
        display: flex;
        flex: 1;
        padding: 2rem 0;
        border-top: 1px solid #eaeaea;
        justify-content: center;
        align-items: center;
        & a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }
    `,
};
const Home: NextPage = () => {
    return (
        <Styled.Container>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Styled.Main>
                <Styled.Title>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </Styled.Title>

                <Styled.Description>
                    Get started by editing <Styled.Code>pages/index.tsx</Styled.Code>
                </Styled.Description>

                <Styled.Grid>
                    <Styled.Card href="https://nextjs.org/docs">
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </Styled.Card>

                    <Styled.Card href="https://nextjs.org/learn">
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </Styled.Card>

                    <Styled.Card href="https://github.com/vercel/next.js/tree/canary/examples">
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </Styled.Card>

                    <Styled.Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                        <h2>Deploy &rarr;</h2>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </Styled.Card>
                </Styled.Grid>
            </Styled.Main>

            <Styled.Footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Styled.Logo>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </Styled.Logo>
                </a>
            </Styled.Footer>
        </Styled.Container>
    );
};

export default Home;