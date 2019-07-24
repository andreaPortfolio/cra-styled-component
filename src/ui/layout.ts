import styled from "styled-components";
import {ITheme} from "../App";


const Layout = styled.div`
  background-color: ${(props: ITheme) => props.theme.colors.purple};
  color: white;
  min-height: 100vh;
`;

export default Layout;