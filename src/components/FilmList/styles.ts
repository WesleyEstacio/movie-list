import styled from "styled-components";

export const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;

    article {
        margin: 1.5rem 0.5rem 2rem;
        
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