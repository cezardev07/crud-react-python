import { styled } from "styled-components";

interface ContainerProps {
    $viewPopUp: boolean; 
}

export const Container = styled.div<ContainerProps>`
    visibility: ${(props) => (props.$viewPopUp === true ? "visible" : "hidden")};
    z-index: 10;
    .wrapper-pop-up{
        position: relative;
        overflow: hidden;
    }
    button.fechar{
        position: absolute;
        border: none;
        width: 50px;
        height: 50px;
        background: #e7085d;
        color: #ffffff;
        right: 0;
        top: 0;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
    }
    button.fechar:hover{
        background: #ff0062;
    }
`;