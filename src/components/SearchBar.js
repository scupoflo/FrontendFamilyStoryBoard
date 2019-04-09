import { Search } from 'semantic-ui-react'
import React from 'react';
import _ from 'lodash'



const Searchbar= (props) => (
      <Search onSearchChange={_.debounce(props.onSearchChange, 500)} showNoResults={false} />
    );

export default Searchbar;
