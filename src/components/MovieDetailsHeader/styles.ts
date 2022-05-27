import styled from "styled-components";

export const Container = styled.div`
    background-color: #2D0C5E;
    color: #fff;
`

export const Content = styled.header`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    top: 3rem;
    padding: 1rem 2%;

    @media only screen and (max-width: 1180px) {
        background-color: #2D0C5E;
        padding-bottom: 1rem;
    }

    @media only screen and (max-width: 1024px) {
        padding-bottom: 1rem;
        background-color: #2D0C5E;
    }

    @media only screen and (max-width: 968px) {
        padding-bottom: 1rem;
        flex-direction: column;
    }

    img {
        width: 40%;
        padding-right: 2rem;

        @media only screen and (max-width: 968px) {
            width: 60%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 768px) {
            width: 80%;
        }
    }

    section {
        width: 60%;

        @media only screen and (max-width: 968px) {
            text-align: center;
            margin: 0 auto;
            width: 100%;
        }

        h2 {
            text-transform: uppercase;
            font-size: 32px;

            @media only screen and (max-width: 968px) {
                padding: 0.5rem 0;
            }
        }

        > p:nth-of-type(1) {
            padding: 0.75rem 0;
            margin-top: 0.5rem;

            @media only screen and (max-width: 968px) {
                text-align: center;
                margin: 0 auto;
            }
        }

        > article:nth-of-type(1) {
            display: flex;
            align-items: center;
            margin: 2rem 0;

            @media only screen and (max-width: 968px) {
                align-items: center;
                justify-content: center;
            }

            h3 {
                border: 5px solid #14FF00;
                border-radius: 50%;
                padding: 0.7rem;
            }
            
            span {
                padding-left: 0.5rem;
                font-size: 0.9rem;
            }
        }

        > h3 {
            margin: 3rem 0 0.5rem;
            font-size: 1.7rem;
        }

        > p {
            line-height: 1.4rem;
            text-align: justify;
            font-weight: lighter;
        }

    }
`