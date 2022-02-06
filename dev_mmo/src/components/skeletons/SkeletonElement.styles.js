import styled from "styled-components";

export const Skeleton = styled.div`
    display: block;
    background: #FFF;
    margin: ${(props) => props.margin};
    border: ${(props) => props.border} solid ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    $from: #f5f5f5;
    $to: scale-color($from, $lightness: -10%);
    
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background: linear-gradient(-90deg, #efefef 0%, #c7c7c7 50%, #efefef 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    @keyframes pulse {
        0% {
        background-position: 0% 0%
        }
        100% {
        background-position: -135% 0%
        }
    }
`;