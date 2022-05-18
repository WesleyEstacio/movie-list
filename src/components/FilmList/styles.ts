import styled from "styled-components";

export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    

    article {
        margin: 2rem 0.5rem 1rem;
        
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