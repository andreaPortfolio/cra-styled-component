import styled from "styled-components";
import {ITheme} from "../App";

const Header = styled.div`
  background-color: ${(props: ITheme) => props.theme.colors.purple};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default Header;