import styled from "styled-components";

export const Container =  styled.div`
    max-width: 1204px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`
export const SmallTitle = styled.span`
    color: ${props => props.color || "white"};
    font-size: 18px;
    font-family: Darker Grotesque;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; 
    @media (min-width: 800px) {
        font-size: 25px;
    };
    @media (min-width: 1400px) {
        font-size: 32px;
    };
`

export const ProcessingBox = styled.div`
    display: flex;
    height: 200px;
    padding: 64px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 24px;
    border: 2px solid var(--gray-100, #F3F4F6);
    background: var(--white, #FFF);
    width: 90%;
    @media (min-width: 600px){
        width:400px;
        padding: 20px;
    }
    @media (min-width: 800px){
        width:500px;
        padding: 30px;
    }
    @media (min-width: 1400px){
        width:586px;
        padding: 40px;
    }
`
export const DscrText = styled.div`
    color: ${props => props.color};
    font-family: DM Sans;
    font-size: ${props => props.fontsize || 18}px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: ${props => props.fontsize - 4 || 14}px;
    }
`


export const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 600px){
        width:400px;
    }
    @media (min-width: 800px){
        width:500px;
    }
    @media (min-width: 1400px){
        width:586px;
    }
`