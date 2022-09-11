import styled from "styled-components";
export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
        //bilo koji direktan div ili lista ce da zauzimaju 1
    }
    @media screen  and (max-width:${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
    }
`