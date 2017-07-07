export const growAction = () => {

  if(age>15){
    return {
      type:'ADD_AGE',
      payload:{
        age:5,
        fruits:Math.floor((Math.random()*10)+1),
      }
    }
  }else {
    return {
      type:'ADD_AGE',
      payload:{
        age:5
        fruits:0
      }
    }
  }
}
