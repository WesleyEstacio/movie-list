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

    img {
        width: 40%;
        padding-right: 2rem;
    }

    section {
        width: 60%;

        h2 {
            text-transform: uppercase;
            font-size: 32px;
        }

        > p:nth-of-type(1) {
            padding: 0.75rem 0;
        }

        > article:nth-of-type(1) {
            display: flex;
            align-items: center;

            h3 {
                border: 5px solid #14FF00;
                border-radius: 50%;
                padding: 1rem 0.5rem;
            }
            
            span {
                padding-left: 0.5rem;
                font-size: 0.9rem;
            }
        }

        > h3 {
            margin: 1.5rem 0 0.5rem;
        }

        > p {
            line-height: 1.3rem;
            text-align: justify;
        }

        > article:nth-of-type(2) {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            div {
                margin-bottom: 2rem;
                
                p {
                    padding-top: 0.25rem;
                }
            }
        }

    }
`