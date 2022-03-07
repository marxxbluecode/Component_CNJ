import React from 'react';
import Input from './Inputs/Boxes/index.js';
import * as S from './StyleApp'

function App() {
  const gender = [
    {
      option: "Menino",
      id: 0,
    },
    {
      option: "Menina",
      id: 1,
    },
  ];
  const race = [
    {
      option: "Amarela",
      id: 0,
    },
    {
      option: "Branca",
      id: 1,
    },
    {
      option: "Preta",
      id: 2,
    },
    {
      option: "Parda",
      id: 3,
    },
    {
      option: "Indígena/Quilombola",
      id: 4,
    }
  ]
 
  return (
    <div>
      <S.Question>Qual gênero cada criança deverá ter?</S.Question>
      <Input option={gender} />
      <S.Question>Qual/Quais raças ou cor você aceita que a(s) criança(s) tenha(m)?</S.Question>
      <Input option={race} />
    </div>
    
  );
}

export default App;
