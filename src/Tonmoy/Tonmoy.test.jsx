

import {render,screen} from '@testing-library/react'



import ContactWithSeller  from '../pages/AllOldBooks/AllOldBooks'
import SearchBar  from '../pages/home/SearchBar/SearchBar'
import Banner  from '../pages/home/Banner/Banner'
import UserChat  from '../pages/UserChat/UserChat'




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

it('Banner',()=>{
render(<Banner/>)
const message =screen.queryByText('Banner')

expect(message).toBeDefined()
});
it('UserChat',()=>{
render(<UserChat/>)
const message =screen.queryByText('UserChat')

expect(message).toBeDefined()
});



// code by end tonmoy

