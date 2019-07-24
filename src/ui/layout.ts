import styled from "styled-components";
import {ITheme} from "../App";


const Layout = styled.div`
  background-color: ${(props: ITheme) => props.theme.colors.purple};
  color: white;
`;

export default Layout;