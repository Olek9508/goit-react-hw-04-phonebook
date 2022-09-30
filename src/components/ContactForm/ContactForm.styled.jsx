import styled from "@emotion/styled"

export const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: stretch;
`
;

export const Label = styled.label`
margin-bottom:10px;
`
    ;

export const Input = styled.input`
    margin-left: 10px;
    border-radius: 5px;
    border: solid 1px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`
;

export const BtnSubmit = styled.button`
margin-right:10px;
padding:8px;
border-radius: 5px;
border: solid 1px;
color: white;
background-color: green;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
0px 2px 2px rgba(0, 0, 0, 0.12);
cursor:pointer;
:hover,
:focus{
  background-color: rgba(99, 220, 253, 0.763);
  color: rgba(2, 2, 2, 0.823);
  border-color: transparent;
transition-duration: 250ms;
}
`;