import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { splitBorderProps } from './common/splitBorderProps';

export default function App() {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [options, setOptions] = useState<string[]>(['', '']);

  const createOnChangeOption = (index: number) => (newOption: string) => {
    setOptions(prevOptions =>
      prevOptions.map((it, idx) => (idx === index ? newOption : it)),
    );
  };

  const onDecide = () => {
    const randomOptionIndex = Math.floor(Math.random() * options.length);
    setSelectedOption(randomOptionIndex);
  };

  const onAddOption = () => {
    setOptions(prevOptions => prevOptions.concat(''));
  };

  return (
    <Screen>
      <Container>
        <InputsContainer>
          {options.map((option, index) => (
            <OptionInput
              key={index}
              value={option}
              placeholder={`Option ${index + 1}`}
              onChangeText={createOnChangeOption(index)}
              isSelected={index === selectedOption}
            />
          ))}
        </InputsContainer>
        <Divider />
        <ButtonsContainer>
          <DecideButton
            title={
              selectedOption === null ? 'Decide for me' : 'Need a new decision'
            }
            onPress={onDecide}
          />
          <AddOptionButton title="Add option" onPress={onAddOption} />
        </ButtonsContainer>
        <StatusBar style="auto" />
      </Container>
    </Screen>
  );
}

const Screen = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0 30px;
`;

const InputsContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionInput = styled.TextInput<{ isSelected: boolean }>`
  width: 100%;
  font-size: 24px;
  height: 60px;
  padding: 5px 15px;
  ${props => {
    const borderColor = props.isSelected ? 'green' : 'gray';
    return css`
      ${splitBorderProps(2, borderColor, 20)}
    `;
  }}
`;

const ButtonsContainer = styled.View`
  flex: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100px;
  display: flex;
  align-items: center;
`;

const DecideButton = styled.Button``;

const AddOptionButton = styled.Button``;

const Divider = styled.View`
  background-color: black;
  width: 100%;
`;
