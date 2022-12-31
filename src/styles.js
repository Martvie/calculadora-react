import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f3dbdb;

display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
width: 80%;
max-width: 300px;
min-height: 350px;
background-color: #FAFAFA;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-itens: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
`