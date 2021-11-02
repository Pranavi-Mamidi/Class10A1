var weights=[35,38,40,45]
function average(){
  var sum=weights[0]+weights[1]+weights[2]+weights[3]
  console.log(sum)
  var average=sum/weights.length
  console.log(average)
}
function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

