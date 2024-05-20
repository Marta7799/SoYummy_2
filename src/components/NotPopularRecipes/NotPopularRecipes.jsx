import { Svg, NotPopularTitle } from './NotPopularRecipes.styled';
import sprite from '../../images/AddRecipePage/sprite.svg';

const NotPopularRecipes = () => {
  return (
    <div>
      <Svg>
        <use href={`${sprite}#cat`}></use>
      </Svg>
      <NotPopularTitle>No new popular recipes yet</NotPopularTitle>
    </div>
  );
};

export default NotPopularRecipes;
