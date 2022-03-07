import React from 'react';
import * as S from './style';


function Gender({option, name, display, WidthLabel}) {
  return (
      <S.Container display={display}>
          {option?.map((item, index) => (
          
                <S.InputWrapper key={index} WidthLabel={WidthLabel} >
                    <S.Input type='radio' name={name} alt='opções'/>
                {item.option}
                </S.InputWrapper>
          
          )
        )}
      </S.Container>
  );
}
export default Gender;