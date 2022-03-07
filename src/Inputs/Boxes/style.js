import styled from 'styled-components'

export const Container = styled.section`
    display: ${({display}) => display};
    flex-wrap: wrap;
    width: 100%;
`

export const InputWrapper = styled.label`
    font-size: 12px;
    font-family: Avenir LT Std, 95 Black;
    color: #193C6A;
    display: flex;
    width: ${({WidthLabel}) => WidthLabel};
    align-items: center;
`

export const Input = styled.input`
    display: flex;
    padding: .4rem;
    margin: .5rem .5rem .5rem 0 ;
    border: 1px solid #7F92AC;
    border-radius: 2px;
    font-size: 12px;
    font-family: Avenir LT Std, 95 Black;
    color: #193C6A;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    :checked {
        background-color: #7F92AC;
        color: #fff;
    }
`
