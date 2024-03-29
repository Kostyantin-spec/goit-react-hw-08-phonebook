import styled from 'styled-components';

export const FormButton = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: #cdaffd;
  width: 100px;
  height: 40px;
  align-self: center;
  font-size: 13px;
  transition: all 0.5s ease-out allow-discrete;

  &&:hover {
    background-color: #e6d7fe;
  }
`;

export const StyledP = styled.p`
  color: red;
`;
