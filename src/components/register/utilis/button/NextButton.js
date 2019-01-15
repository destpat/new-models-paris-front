import React from 'react';
import { ValidateButtonContainer, StyledButton } from './nextButtonStyle'

/*
*  @description Component
*  NextButton button permettant de valider les étapes du formulaire
*/

const NextButton = () => (
  <ValidateButtonContainer>
    <StyledButton id="next-button" type='submit'>
      Valider
    </StyledButton>
  </ValidateButtonContainer>
)

export default NextButton;
