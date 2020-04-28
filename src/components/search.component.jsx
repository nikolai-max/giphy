import React, { Component } from 'react'
import {DebounceInput} from 'react-debounce-input';

const Search = ({onChange}) => {
    return(
        <DebounceInput
          className="form-search"
          minLength={3}
          debounceTimeout={300}
          onChange={onChange} />
          )
}

export default Search