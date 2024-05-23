'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
    grid-template-areas: "header" "content";
`;

export const Content = styled.main`
    grid-area: content;
`;

export const Header = styled.header`
    grid-area: header;
`;
