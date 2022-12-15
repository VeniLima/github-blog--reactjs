import styled from 'styled-components'

export const SearchFormInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

  position: absolute;
  width: 864px;
  height: 50px;
  left: calc(50% - 864px / 2);
  top: 533px;

  /* Base/Input */

  background: #040f1a;
  /* Base/Border */

  border: 1px solid #1c2f41;
  border-radius: 6px;
`
