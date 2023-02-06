import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute, FaTrash, FaClipboard } from 'react-icons/fa';
import './Textbox.css';

export default function Textbox(props) {
  let txtStyle, btnStyle1, btnStyle2, textboxStyle;

  if (props.mode === true) {
    txtStyle = 'textStyle';
    btnStyle1 = 'btnStyle1';
    btnStyle2 = 'btnStyle2';
    textboxStyle = 'textboxStyle';
  }
  else {
    txtStyle = '';
    btnStyle1 = '';
    btnStyle2 = '';
    textboxStyle = '';
  }

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);

    if (text.length > 0) {
      props.alert("Converted to Uppercase!", "success");
    }
  }

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);

    if (text.length > 0) {
      props.alert("Converted to Lowercase!", "success");
    }
  }

  const handleClearText = () => {
    setText('');

    if (text.length > 0) {
      props.alert("Text Cleared!", "success");
    }
  }

  const handleSpeak = () => {
    if (text.length === 0) {
      setIsActive(true)
    }

    else {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);

      if (isActive === true) {
        setIsActive(false)
      }

      else {
        setIsActive(true)
        window.speechSynthesis.cancel()
      }
    }
  }

  // const handleExtraSpaces = () => {
  //   let words = text.split(' ');
  //   let newText = '';

  //   words.forEach((word) => {
  //     if (word[0] !== undefined) {
  //       newText += word + " ";
  //     }
  //   });

  //   setText(newText);
  // }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));

    if (text.length > 0) {
      props.alert("Extra Spaces Removed!", "success");
    }
  }

  const handleTitlecase = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(' ');

    let temp = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let newText = temp.join(' ');
    setText(newText);

    if (text.length > 0) {
      props.alert("Converted to Titlecase!", "success");
    }
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);

    if (text.length > 0) {
      props.alert("Copied to Clipboard!", "success");
    }
  }

  const onChangeFunc = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div className='container textbox'>
        <div className='box'>
          <div>
            <h2 className={`textbox-Heading textbox-Heading1 ${txtStyle}`}>{props.heading}</h2>
            <textarea name="text" id="myBox" className={textboxStyle} placeholder='Enter Your Text Here....' value={text} onChange={onChangeFunc} cols="140" rows="14"></textarea>
          </div>
          <button disabled={text.length === 0} className={`Btn uBtn ${btnStyle1}`} onClick={handleUppercase}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className={`Btn lBtn ${btnStyle1}`} onClick={handleLowercase}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className={`Btn tBtn ${btnStyle1}`} onClick={handleTitlecase}>Convert to Titlecase</button>
          <button disabled={text.length === 0} className={`Btn resBtn ${btnStyle1}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length === 0} className={`Btn clrBtn ${btnStyle2}`} onClick={handleClearText}><FaTrash className='clrIcon icon' /></button>
          <button disabled={text.length === 0} className={`Btn cpBtn ${btnStyle1}`} onClick={handleCopyText}><FaClipboard className='clipIcon icon' /></button>
          <button disabled={text.length === 0} className={`Btn volBtn ${btnStyle1}`} onClick={handleSpeak}>{isActive ? <FaVolumeUp className='volIcon icon' /> : <FaVolumeMute className='volIcon volIcon1 icon' />}</button>
        </div>
      </div>

      <div className="container">
        <div className={`box ${txtStyle}`}>
          <h2 className='textbox-Heading summary'>Your Text Summary</h2>
          <div className="content">
            <p>- {text.split(" ").filter((word) => { return word.length !== 0 }).length} words & {text.length} characters</p>
            <p>- {0.008 * (text.split(" ").filter((word) => { return word.length !== 0 }).length)} minutes to read</p>
          </div>
        </div>
      </div>
    </>
  )
}
