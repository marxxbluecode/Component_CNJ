import React from 'react';
import * as S from './style';


function Gender({option}) {
  return (
      <div>
          {option?.map((item, index) => (
            <div key={index}>
                <S.InputWrapper>
                {item.option}
                    <S.Input type='radio' name='option' alt='opções'/>
                </S.InputWrapper>
              </div>
          )
        )}
      </div>
  );
}
export default Gender;