import { MainContainer } from 'components/MainContainer/MainContainer';
import TitlePage from 'components/ReusableComponents/PageTitle';
import SearchBar from 'components/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';

const SearchPage = title => {
  return (
    <MainContainer>
      <TitlePage title="Search"></TitlePage>
      <SearchBar />
      <SearchedRecipesList />
    </MainContainer>
  );
};

export default SearchPage;
