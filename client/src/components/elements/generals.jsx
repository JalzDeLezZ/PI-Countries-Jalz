import styled from "styled-components";

const Button = styled.button`
    
    background-image: linear-gradient(to right, #171922 0%, #23152d  51%, #141321   100%);
    font-size: 0.6em; 
    padding: 3px 6px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px rgb(255 255 255 / 40%);
    border-radius: 10px; 


    &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
         
`

const RadioBtn = styled.input`
    margin: 0 7px;
    display: flex;
    align-items: center;
    margin-right: 7px;
    color: white;
    &:value{
        color: white;
    }
`


export{Button, RadioBtn}