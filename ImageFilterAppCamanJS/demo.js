function demo()
{
const canvas = document.getElementById('canvas');
if(canvas.getContext)
    {
    const ctx = canvas.getContext('2d');
    
    let img = new Image();
    let fileName = '';

    // Buttons
const uploadButton = document.getElementById('upload-file');
const removeButton = document.getElementById('remove-btn');


// File Uploading Part - starts here
uploadButton.addEventListener('change', (event)=>
{
const file = document.getElementById('upload-file').files[0]; 
    // File Reading    
const reader = new FileReader(); 
    if(file)
    {
              fileName = file.name; 
            reader.readAsDataURL(file);          
    }
// Display Image - Starts Here
reader.addEventListener('load', () => 
{
img = new Image(); 
img.src = reader.result; 
img.onload = function()
{
canvas.width = img.width; 
canvas.height = img.height; 
ctx.drawImage(img,0,0,img.width, img.height);
}
}
)
// Display Image - Ends Here
}
)
// File Uploading Part - Ends here

// FILTER
document.addEventListener('click',(event)=> 
{
if(event.target.classList.contains('filter-btn'))
{
	
// Brightness
    if(event.target.classList.contains('increase_bright'))
    {
    Caman('#canvas', img, function()
    {
        this.brightness(5);
        this.render(); 
    })
    }
    else if(event.target.classList.contains('decrease_bright'))
    {
    Caman('#canvas', img, function()
    {
        this.brightness(-5);
        this.render(); 
    })
    }

//Contrast
	else if(event.target.classList.contains('increase_contrast'))
    {
    Caman('#canvas', img, function()
    {
        this.contrast(5);
        this.render(); 
    })
    }
	else if(event.target.classList.contains('decrease_contrast'))
    {
    Caman('#canvas', img, function()
    {
        this.contrast(-5);
        this.render(); 
    })
    }
//Saturation
	else if(event.target.classList.contains('increase_saturation'))
    {
    Caman('#canvas', img, function()
    {
        this.saturation(5);
        this.render(); 
    })
    }
	else if(event.target.classList.contains('decrease_saturation'))
    {
    Caman('#canvas', img, function()
    {
        this.saturation(-5);
        this.render(); 
    })
    }

//Vintage	
	else if(event.target.classList.contains('vintage'))
    {
    Caman('#canvas', img, function()
    {
        this.vintage();
        this.render(); 
    })
    }
//lomo	
	else if(event.target.classList.contains('lomo'))
    {
    Caman('#canvas', img, function()
    {
        this.lomo();
        this.render(); 
    })
    }
//clarity
	else if(event.target.classList.contains('clarity'))
    {
    Caman('#canvas', img, function()
    {
        this.clarity();
        this.render(); 
    })
    }

	

}
//FILTERS ENDS HERE

//REMOVE FILTERSp
removeButton.addEventListener('click', event => 
{
Caman('#canvas',img, function()
    {
    this.revert();
    });
}

); 

}
);
//Filter add ends here
}
}