import {
  AdviceBox,
  AdviceDesc,
  AdviceDescAccent,
  StyledLink,
  Icon,
} from './ChooseYourBrerakfast.styled';

const СhooseYourBreakfast = () => (
  <AdviceBox>
    <AdviceDesc>
      <AdviceDescAccent>Delicious and healthy way</AdviceDescAccent> to enjoy a
      variety of fresh ingredients in one satisfying meal
    </AdviceDesc>
    <StyledLink to="/categories/breakfast">
      See recipes
      <Icon />
    </StyledLink>
  </AdviceBox>
);

export default СhooseYourBreakfast;
