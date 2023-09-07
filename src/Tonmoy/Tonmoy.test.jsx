

import {render,screen} from '@testing-library/react'



import ContactWithSeller  from '../pages/AllOldBooks/AllOldBooks'
import SearchBar  from '../pages/home/SearchBar/SearchBar'
import SearchResultsList  from '../pages/home/SearchBar/SearchBar'



import { expect } from 'vitest'

// code by start tonmoy
it('UseSingleUser',()=>{
render(<ContactWithSeller/>)
const message =screen.queryByText('ContactWithSeller')

expect(message).toBeDefined()
});

it('SearchBar',()=>{
render(<SearchBar/>)
const message =screen.queryByText('SearchBar')

expect(message).toBeDefined()
});

it('SearchBar',()=>{
render(<SearchResultsList/>)
const message =screen.queryByText('SearchResultsList')

expect(message).toBeDefined()
});



// code by end tonmoy

