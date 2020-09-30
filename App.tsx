/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {darkTheme, lightTheme} from './src/styles/theme';
import styled, {ThemeProvider} from 'styled-components/native';

import {StatusBar} from 'react-native';

declare const global: {HermesInternal: null | {}};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
  border-radius: 5px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.SECONDARY_TEXT_COLOR};
`;

type ThemeType = 'light' | 'dark';

const App = () => {
  const [themeState, setThemeState] = useState<ThemeType>('light');

  return (
    <>
      <StatusBar
        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        <Container>
          <TextContainer>
            <Title>Themed App with React Native & Styled Components</Title>
          </TextContainer>
          {themeState === 'light' ? (
            <Button onPress={() => setThemeState('dark')}>
              <ButtonText>Switch to Dark Theme</ButtonText>
            </Button>
          ) : (
            <Button onPress={() => setThemeState('light')}>
              <ButtonText>Switch to Light Theme</ButtonText>
            </Button>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
