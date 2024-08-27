import React,{useState} from 'react'

export default function Form(props) {
   
    const [text, setnewtext] = useState(" ");
    const [letterCount, setnewcount] = useState(null);
    const [Vowels, setnewVowels] = useState(null);
    const [sentence, setnewsentence] = useState(null);


const  [oldstyle, newStyle] = useState({
    backgroundColor:'#9CAFAA',
    color:'black',
    border: "3px solid black"
})




let body=document.querySelector("body");
let hello=document.querySelector(".hello");



const change=() =>{
console.log('clicked')
setnewtext(text.toUpperCase())

    };

const LowerCase=()=>{
    setnewtext(text.toLowerCase())
};

const CountLetters=()=>{
     let count=0;
    for(let i=0;i<text.length;i++){
        if((text.charAt(i)>="a" && text.charAt(i)<="z")||(text.charAt(i)>="A"&& text.charAt(i)<="Z"))
            count++;
        }
          setnewcount(count);
};

const  CountVowels=()=>{
     let count2=0;
    let vowel="aeiouAEIOU";
    for(let i=0;i<text.length;i++){
    if(vowel.includes(text.charAt(i))){
            count2++;
        }}
  setnewVowels(count2);
};

 const update=(evt)=>{
console.log('clicked')
setnewtext(evt.target.value)
    };

    const CountSentences = () => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '.' || text[i] === '!' || text[i] === '?') {
                count++;
            }
        }
        setnewsentence(count);
    };
    const ClearText=()=>{
        setnewtext(" "); 
        
    }
    

    const ChangeMode=()=>{
        if(oldstyle.backgroundColor==="#9CAFAA"){
            body.style.backgroundColor="#222831";
            body.style.color="white";

          
    
            newStyle({
                backgroundColor:'#222831',
                color:'white',
                border: "3px solid white"
        })
            
        }

        else{
            body.style.backgroundColor="#9CAFAA";
            body.style.color="black";
            newStyle({
                backgroundColor:'#9CAFAA',
                color:'black',
            })
            
        }
    }
    const ChangeMode1=()=>{
        body.style.backgroundColor="green";
        body.style.color="white";
        
            newStyle({
                backgroundColor:'green',
                color:'white',
                    })
              alert("Screen color will change to green.")     
        }

    const ChangeMode2=()=>{
        body.style.backgroundColor="red";
        body.style.color="white";
         newStyle({
            backgroundColor:'red',
            color:'white',
                })
                alert("Screen color will change to red.")
    }
    const ChangeMode3=()=>{
        body.style.backgroundColor="gold";
        body.style.color="white";
        
        newStyle({
            backgroundColor:'gold',
            color:'black',
                })
                alert("Screen color will change to yellow.") 
    }
    const ChangeMode4=()=>{
        body.style.backgroundColor="cyan";
        body.style.color="white";
         
         newStyle({
            backgroundColor:'cyan',
            color:'black',
                })
                alert("Screen color will change to blue.") 
    }
    const ChangeMode6=()=>{
        body.style.backgroundColor="pink";
        body.style.color="black";
         
         newStyle({
            backgroundColor:'pink',
            color:'black',
                })
                alert("Screen color will change to pink.") 
    }
    const ChangeMode5=()=>{
        body.style.backgroundColor="mediumpurple";
        body.style.color="white";
         
         newStyle({
            backgroundColor:'mediumpurple',
            color:'white',
                })
                alert("Screen color will change to light purple.") 
    }
  return (
    <>    <div>
         <h1>{props.heading}</h1>
    <div className="form"style={oldstyle} >
       
      <textarea className="control" style={oldstyle} id="Textarea1" onChange={update} value={text}></textarea>
    </div>
    <div className="btn">
<button id='newbtn'  onClick={change}>Convert to uppercase</button>
    <button id='newbtn2' onClick={LowerCase}>Convert to lowercase</button>
    <button id='newbtn3' onClick={CountLetters}>Count number of letter</button>
    <button id='newbtn4'  onClick={CountVowels}>Count number of Vowels</button>
    <button id='newbtn5' onClick={CountSentences}>Count number of Sentences</button>
    <button id='newbtn6'  onClick={ClearText}>Clear All Text</button>
    <button id='newbtn7'  onClick={ChangeMode}>Change Mode</button>
    </div>
    <br></br>
    <div className="nice">
    <button type="button" className="btn btn-success" style={{height:"40px", width:"80px"}} onClick={ChangeMode1}> </button>
    <button type="button" className="btn btn-danger" style={{height:"40px", width:"80px"}}onClick={ChangeMode2}></button>
    <button type="button" className="btn btn-warning"  style={{height:"40px", width:"80px"}}onClick={ChangeMode3}></button>
    <button type="button" className="btn btn-info" style={{height:"40px", width:"80px"}} onClick={ChangeMode4}></button>
    <button type="button" className="purple" style={{height:"40px", width:"80px"}} onClick={ChangeMode5}></button>
    <button type="button" className="pink" style={{height:"40px", width:"80px"}} onClick={ChangeMode6}></button>
    </div>
    
    
    {letterCount !== null && (
                    <p>Then number of alphabets is {letterCount}</p>
                )}
    {Vowels!==null &&(
        <p>The numbers of vowels is {Vowels}</p>
    )}
    {sentence!==null &&(
        <p>The numbers of sentence is {sentence}</p>
    )}
        </div>
        <div className="container">
            <h3>Details about your content</h3>
            <p>Your paragraph contains {text.split(/\s+/).filter((element)=>{if(element.length!==0){return element}}).length} words , {text.trim().length} characters.</p>
            <p>The person will take {0.01*text.split(/\s+/).filter((element)=>{if(element.length!==0){return element}}).length} minutes to read {text.split(/\s+/).filter((element)=>{if(element.length!==0){return element}}).length} words</p>
            </div>
            
            </>
        )
}
