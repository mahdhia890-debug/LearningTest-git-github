import './App.css'
/*
//1) How to create and nest components
 function Mybutton(){
  return(
    <button>im a button</button>
  );

}

//2) export default=>keywords specify the main component in the file


export default function App(){
      return(
        <div>
          <h2>welcome to my app</h2>
          
          <Mybutton/>
        </div>
      );
}

*/

/*
//3) Adding styles , Then you write the CSS rules for it in a separate CSS file:

export default function Styling(){
  return(
    <>
    <img src='src\assets\react.svg' className="image"/>
    </>

  );
}

*/

//4) Displaying data :right javascript variables inside Curly braces {}

let info = {
  fullname:"mahammedi dhia",
  age:20,
  color:"red",
  img:"src/assets/react.svg",
  size:"100px"
}
export default function Displaydata(){
  return(
    <>
    <p style={{color:info.color}}>{info.fullname}</p>
    <img src={info.img} style={{width:info.size,height:info.size}}/>
    <p>my age is {info.age}</p>
    </>
  )
}
 
 