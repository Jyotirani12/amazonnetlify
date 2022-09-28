import React from 'react';
import {withRouter} from 'react-router-dom'
import SearchFirst from './SearchFirst.js';
// import SearchSecond from './SearchSecond.js';
// import SearchDeal from './SearchDeal';
import Header from '../../Header';
// import ListingDress from '../Listing/ListingDress';
import Search from './searchBox';
 import AllFilter from './AllFilter';




const Home=()=>{
    return(
       <>
      <Header/>
      <AllFilter/>   

      <Search/>
   
   <SearchFirst/>
   {/* <SearchDeal/> */}
   {/* <SearchSecond/> */}
 

   </>
   )
    
}
export default withRouter(Home);