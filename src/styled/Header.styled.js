import styled from "styled-components";

export const StyledHeader= styled.header`
    /* background-color: ${(props) => props.bg }; */
    /* background-color: ${({bg}) => bg};
    ovo je dekonstrukcija bez uzimanja props */
    background: ${({theme}) => theme.colors.header};

    padding: 40px 0;
    h1{
        color:blue;
    }
`
export const Nav  = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media screen  and (max-width:${({theme}) => theme.mobile}){
        flex-direction: column;
        
    }
`

export const Logo = styled.img`
    @media screen  and (max-width:${({theme}) => theme.mobile}){
        margin-bottom: 40px;
        
    }
`
export const Image = styled.img`
    width: 370px;
    margin-left: 2.4rem;
    @media screen  and (max-width:${({theme}) => theme.mobile}){
        margin-top: 40px 0 30px;
        
    }
`