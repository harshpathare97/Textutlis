import React,{useState} from 'react'


export default function Textarea(props) {
  const onclick_upper = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const onclick_lower = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }

  const onclick_sentence = () => {
    let newText=text.replace(/(^\s*\w|[.!?]\s*\w)/g, c=> c.toUpperCase());
    setText(newText);
  }
  
  const onClickReplace = () => {
    if (findWord.trim() === '' || replaceWord.trim() === '') {
      props.showAlert("Please enter both find and replace words.", "danger");
      return;
    }
    let newText = text.replace(new RegExp(findWord, 'gi'), replaceWord);
    setText(newText);
  };

  const onclick_capitalize = ()=> {
    let words=text.split(" ");
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    let newText = capitalizedWords.join(" ");
    setText(newText);
  };

  const onclick_copy = () => {
    if (text && text.trim()) {  // Check if 'text' is not empty or just whitespace
      navigator.clipboard.writeText(text);
      props.showAlert("Copy to clipboard", "success");
    }
  }

  const onclick_remove = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const onclick_clear = ()=>{
    setText("")
  }

  const onclickClear = ()=>{
    setFindWord("")
    setReplaceWord("")
  }

  const handleonchange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  const [findWord, setFindWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');

  return (
    <>
    <div className="container"  style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="7"></textarea>
      </div>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_upper}>Uppercase</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_lower}>Lowercase</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_sentence}>Sentence case</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_capitalize}>Capitalize Each word</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_remove}>Remove extra space</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_copy}>Copy text</button>
      <button type="button" className="btn btn-info mx-1 my-1" onClick={onclick_clear}>Clear text</button>
      <button type="button" className="btn btn-info dropdown-toggle mx-1 my-1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        Replace word
      </button>
      <form className="dropdown-menu p-2" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <p>Find Word</p>
        <input type="text" className="form-control" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={findWord} onChange={(e) => setFindWord(e.target.value)} />
        </div>
        <div className="mb-3">
        <p>Replace Word</p>
        <input type="text" className="form-control" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={replaceWord} onChange={(e) => setReplaceWord(e.target.value)} />
        </div>
        <button className="btn btn-info mx-2" type="button" onClick={onClickReplace}>Replace</button>
        <button className="btn btn-info" type="button" onClick={onclickClear}>Clear</button>
      </form>    
      <br/><br/>
      <h4>Your text summary</h4>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  
      words and {text.length} characters</p>
      <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
  </>
  )
}
