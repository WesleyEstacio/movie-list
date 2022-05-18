import styled from "styled-components";

export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    

    article {
        margin: 2rem 0.25rem 1rem;
        
        a {
            cursor: pointer;
        }

        p {
            font-weight: bold;
            font-size: 16px;
        }

        span {
            color: #646464;
            font-weight: bold;
            font-size: 14px;
        }
    }
`