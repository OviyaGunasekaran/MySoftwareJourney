 
           
		   
import React from 'react'; 
function Mobiles(props)
{
return(
<>

<div class="card">
  
  <div class="card-body">
    <h5 class="card-title">{props.brandname}</h5>
    <p class="card-text"> Type here about the Mobile's Model Description</p>
	<p>{props.brandprice}</p>
    <a href="#" class="btn btn-primary">BUY NOW LINK</a>
  </div>
</div>

 
</> 
); 
}

export default Mobiles
