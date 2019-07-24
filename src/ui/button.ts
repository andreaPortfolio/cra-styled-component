
import styled from "styled-components";

import {ITheme} from "../App";


const Button = styled.button`
  background: ${(props: ITheme) => props.theme.colors.purple};
  color: ${(props: ITheme) => props.theme.colors.white};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid  ${(props: ITheme) => props.theme.colors.purple};
  border-radius: 3px;
`;

export default Button;