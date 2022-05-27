import styled from "styled-components";

export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 0 2%;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 864px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 630px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 540px) {
        grid-template-columns: repeat(1, 1fr);
    }
    

    article {
        margin: 2rem 0.5rem 1rem;

        &:hover {
            position: relative;
            bottom: 1rem;
        }
        
        a {
            cursor: pointer;
            
            img {
                width: 100%;
            }
        }

        p {
            font-weight: bold;
            font-size: 16px;
            color: #222;
        }

        span {
            color: #646464;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
        } 
    }
`