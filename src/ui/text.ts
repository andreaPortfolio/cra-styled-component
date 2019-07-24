import styled from "styled-components";
import {ITheme} from "../App";


const Text = styled.div`
    color: ${(props: ITheme) => props.theme.colors.white};
    font-family: ${(props: ITheme) => props.theme.fontFamily.roboto};
`;

export default Text;