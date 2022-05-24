import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2%;

    h1 {
        margin: 4rem 0 2rem;
        font-size: 28px;
    }

    .carousel {
        text-align: center;
        background-color: #fff;
        padding: 1.2rem 1rem;
        margin: 0 0.5rem;
        min-height: 300px;

        p {
            text-align: left;
            width: 100%;
            margin: 0 auto;
            font-size: 0.75rem;

            &:nth-of-type(1) {
                font-weight: bold;
                font-size: 0.80rem;
                padding: 0.2rem 0;
            }
        }

        img {
            width: 100%;
        }
    }
`