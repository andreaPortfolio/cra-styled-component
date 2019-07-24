import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {connect} from 'react-redux';
import { ApplicationState } from './store/applicationState';
import { ThemeState, Theme } from './store/theme';
import * as themeActions from './store/theme/actions';
import GlobalStyle from './theme/globalStyle';
import Button from './ui/button';
import Header from './ui/header';
import Card from './ui/card';
import Layout from './ui/layout';
import Section from './ui/section';
import Text from './ui/text';


export interface ITheme {
  theme: Theme
}

interface PropsFromState {
  themeState: ThemeState;
}


interface PropsFromDispatch {
  changeTheme: () => void;

}

type Props = PropsFromState & PropsFromDispatch;


const App: React.FC<Props> = ({changeTheme, themeState}) => {
  useEffect(() => {
    changeTheme()
  }, []);
  const [selectedTheme, setTheme] = useState(true);
  return (
      <ThemeProvider theme={selectedTheme ? theme : themeState.data }>
        <>
          <GlobalStyle/>
          <Layout>
            <Header>
              <Button theme={selectedTheme ? theme : themeState.data } onClick={()=>{setTheme(!selectedTheme)}}>
                Change Theme
              </Button>
              <img src={logo} className="App-logo" alt="logo" />
            </Header>
            <Section>
            <Card>
              <p>
                <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
                </Text>
              </p>
            </Card>
            </Section>
          </Layout>
        </>
      </ThemeProvider>

  );
}


const mapStateToProps = (state: ApplicationState): PropsFromState => ({
  themeState: state.themeState,
});


const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, void, Action>): PropsFromDispatch => ({
        changeTheme: () => dispatch(themeActions.getTheme())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
