import styled from 'styled-components'

export const Container = styled.header`
    background-color: #2D0C5E;
`

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 1.5rem;
    min-height: 450px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #fff;
        font-size: 48px;
        text-align: center;
    }

    article {
        text-align: center;

        p {
            font-size: 14px;
            color: #fff;
            font-weight: bold;
            letter-spacing: 0.1rem;
            padding: 0.5rem;
        }

        button {
            border: 0;
            background-color: transparent;
            font-weight: bold;
            background-color: #fff;
            padding: 0.7rem 1rem;
            border-radius: 0.2rem;
            margin: 0.5rem;
            transition: 0.4s;

            &:hover {
                background-color: #5C16C5;
                color: #fff;
            }
        }
    }
`