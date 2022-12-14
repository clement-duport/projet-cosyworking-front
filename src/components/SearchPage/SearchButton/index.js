import './style.scss';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../tools/themeMui';

function SearchButton() {
  const dispatch = useDispatch();
  return (
    <div className="search-button">
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            dispatch({
              type: 'GET_WORKSPACES',
            });
          }}
        >
          <SearchIcon />
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default SearchButton;
