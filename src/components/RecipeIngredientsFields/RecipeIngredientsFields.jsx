import { FieldArray, getIn } from 'formik';
import { useSelector } from 'react-redux';
import { selectIngredientsList } from '../../redux/ingredients/ingredientsSelector';
import { hasError } from 'helpers/hasError';
import Counter from 'components/Counter/Counter';
import sprite from '../../images/AddRecipePage/sprite.svg';
import FormError from 'components/ReusableComponents/FormError/FormError';
import {
  Container,
  Title,
  StyledSelect,
  Wrap,
  Button,
  Svg,
  MeasureField,
  SelectContainer,
  MeasureFieldContainer,
  BorderError,
} from './RecipeIngredientsFields.styled';
const RecipeIngredientsFields = () => {
  const ingredientsList = useSelector(selectIngredientsList);
  const nameIngredients = ingredientsList.map(el => ({
    value: el._id,
    label: el.name,
  }));
  return (
    <Container>
      <Title>Ingredients</Title>
      <FieldArray validateOnChange name="ingredients">
        {fieldArrayProps => {
          const { push, form } = fieldArrayProps;
          const { values, setFieldValue, errors, touched } = form;
          const { ingredients } = values;

          const handleIngredientChange = (newValue, index) => {
            const newIngredients = [...ingredients];
            newIngredients[index] = { ...newIngredients[index], ...newValue };
            setFieldValue('ingredients', newIngredients);
          };
          const handleCountChange = (index, value) => {
            const newIngredients = [...ingredients];
            newIngredients[index] = {
              ...newIngredients[index],
              measure: value,
            };
            setFieldValue('ingredients', newIngredients);
          };
          const handleRemoveIngredient = index => {
            const newIngredients = [...ingredients];
            if (newIngredients.length > 1) {
              newIngredients.splice(index, 1);
              setFieldValue('ingredients', newIngredients);
            }
          };
          return (
            <div>
              <Counter
                remove={handleRemoveIngredient}
                push={push}
                ingredients={ingredients}
              />
              {ingredients.map((ingredient, index) => (
                <Wrap key={index}>
                  <SelectContainer>
                    <BorderError
                      className={
                        hasError(
                          `ingredients[${index}].value`,
                          getIn,
                          errors,
                          touched
                        )
                          ? 'error'
                          : ''
                      }
                    >
                      <StyledSelect
                        className={
                          hasError(
                            `ingredients[${index}].value`,
                            getIn,
                            errors,
                            touched
                          )
                            ? 'error'
                            : ''
                        }
                        value={!ingredient.value ? null : ingredient}
                        classNamePrefix="custom-select"
                        name={ingredients[index].id}
                        placeholder={'Select ingredient'}
                        options={nameIngredients}
                        onChange={newValue =>
                          handleIngredientChange(newValue, index)
                        }
                      />
                    </BorderError>
                    <FormError
                      name={`ingredients[${index}].value`}
                      style={{ marginTop: '5px' }}
                    />
                  </SelectContainer>
                  <MeasureFieldContainer>
                    <MeasureField
                      name={`ingredients[${index}].measure`}
                      type="text"
                      autoComplete="off"
                      value={ingredients[index].measure || ''}
                      onChange={event => {
                        handleCountChange(index, event.target.value);
                      }}
                      placeholder={'Enter measure'}
                      className={
                        hasError(
                          `ingredients[${index}].measure`,
                          getIn,
                          errors,
                          touched
                        )
                          ? 'error'
                          : ''
                      }
                    />
                    <FormError
                      name={`ingredients[${index}].measure`}
                      style={{ marginTop: '5px' }}
                    />
                  </MeasureFieldContainer>
                  <Button
                    type="button"
                    onClick={() => {
                      handleRemoveIngredient(index);
                    }}
                  >
                    <Svg width={18} height={18}>
                      <use href={`${sprite}#delete-button`}></use>
                    </Svg>
                  </Button>
                </Wrap>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </Container>
  );
};
export default RecipeIngredientsFields;
