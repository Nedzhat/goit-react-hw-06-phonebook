import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';

export const Filter = ({ text }) => {
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setFilter(e.currentTarget.value));
    }

    return <Box display="flex" flexDirection="column" alignItems="center"><p>{text}</p>
      <input type="text" name="find" onChange={handleChange}/></Box>
}

Filter.propTypes = {
    text: PropTypes.string.isRequired,
}