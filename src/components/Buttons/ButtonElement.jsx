import styled from 'styled-components';
/*import { Link as LinkRouter } from 'react-router-dom';*/
import { Link as LinkScroll} from 'react-scroll';

export const Button = styled(LinkScroll)`
    border-radius: 50px;
    background: #F9B81F;
    white-space: nowrap;
    padding: ${ ({ big }) => (big ? '14px 48px' : '12px 30px') };
    color: #010606;
    font-size: ${ ({ fontBig }) => (fontBig ? '20px' : '16px') };
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #3b88c3 !important;
        border-color: none;
        color: white;
        outline: none;
        text-decoration: none;
    }
`; 

