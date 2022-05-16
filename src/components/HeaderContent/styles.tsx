import styled from 'styled-components'

export const Container = styled.header`
    background-color: #2D0C5E;
`

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #fff;
        font-size: 48px;
        text-align: center;
    }

    p {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        letter-spacing: 0.1rem;
        margin-top: 2rem;
    }
`