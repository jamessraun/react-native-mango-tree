export const growAction = (age) => {
console.log('actionss---',age);
  if(age>5){
    console.log(Math.floor((Math.random()*10)+1));
    return {
      type:'GROW',
      payload:{
        age:2,
        fruits:Math.floor((Math.random()*10)+1),
      }
    }
  }else {
    return {
      type:'GROW',
      payload:{
        age:5,
        fruits:0
      }
    }
  }
}
