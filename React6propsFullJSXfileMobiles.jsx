 
           
		   
import React from 'react'; 
function Mobiles({brandname="type default name here",brandprice})
{

return(
<>
<div class="card">
  
  <div class="card-body">
    <h5 class="card-title">{brandname}</h5>
    <p class="card-text"> Type here about the Mobile's Model Description</p>
	<p>{brandprice}</p>
    <a href="#" class="btn btn-primary">BUY NOW LINK</a>
  </div>
</div>

 
</> 
); 
}

export default Mobiles
