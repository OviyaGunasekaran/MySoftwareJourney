function demo() {
   const canvas = document.getElementById('canvas');
if (canvas.getContext) {
     const ctx = canvas.getContext('2d');
	// canvas.width = window.innerWidth also can be given
	canvas.width = innerWidth
    canvas.height = innerHeight
    // alert(canvas.height)
	 
class Player
{
	constructor(x,y, radius, color)
	{
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
	}
	draw()
	{
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
	}
}
class Projectile
{
    constructor(x,y, radius, color, velocity) 
	{
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    }
	draw()
	{
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
	}
	update()
	{
	this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
	}
}

const player = new Player(canvas.width/2,canvas.height/2,30,'blue')
player.draw()

const projectile = new Projectile(canvas.width/2, canvas.height/2,10, 'pink', {
    x:1,
    y:1
    })
const projectile2 = new Projectile(canvas.width/2, canvas.height/2,10, 'orange', {
    x:-1,
    y:-1
    })
const projectile3 = new Projectile(canvas.width/2, canvas.height/2,10, 'yellow', {
    x:-1,
    y:1
    })
const projectile4 = new Projectile(canvas.width/2, canvas.height/2,10, 'lightgreen', {
    x:1,
    y:-1
    })	

	
const projectiles=[projectile,projectile2,projectile3,projectile4]
function animate()
{
requestAnimationFrame(animate)
//projectile.draw()
//projectile.update()
projectiles.forEach((projectile) => 
{
projectile.update()
})
}

addEventListener('click', (event) =>    //alert(event.clientX)})
{	

projectile.draw()
}
)
animate()	
}
}		 