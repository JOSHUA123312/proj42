 var hr,mn,sc
var hrAngle,mnAngle,scAngle

function setup() {
  createCanvas(800,700);

angleMode(DEGREES)

}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr=hour()
  mn=minute()
sc=second()
scAngle=map(sc,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
hrAngle=map(hr,0,60,0,360)
push()
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()

push()
rotate(mnAngle)
stroke("blue")
strokeWeight(7)
line(0,0,80,0)
pop()

push()
rotate(hrAngle)
stroke("limegreen")
strokeWeight(7)
line(0,0,50,0)
pop()

stroke("white")
strokeWeight(10)
noFill()
arc(0,0,300,300,0,scAngle)
stroke("yellow")
arc(0,0,270,270,0,mnAngle)
stroke("orange")
arc(0,0,240,240,0,hrAngle)

  drawSprites();
}