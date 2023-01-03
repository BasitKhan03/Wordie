import React from 'react';
import styles from"./About.module.css";

export default function About(props) {
  // const [bgStyle, setBgStyle] = useState({
  //   backgroundColor: 'white'
  // });

  // const [textStyle, setTextStyle] = useState({
  //   color: 'black'
  // });

  // const [btnStyle, setBtnStyle] = useState({
  //   backgroundColor: 'rgb(83, 85, 207)',
  //   color: 'white'
  // });

  // const [btnText, setBtnText] = useState('Dark Mode');

  // const toggleStyle = ()=> {
  //   if(bgStyle.backgroundColor === '#121212' && textStyle.color === '#F2F2F2' && btnStyle.backgroundColor === 'rgb(96, 98, 225)' && btnStyle.color === '#F2F2F2'){
  //     setBgStyle({
  //       backgroundColor: 'white'
  //     });

  //     setTextStyle({
  //       color: 'black'
  //     });

  //     setBtnStyle({
  //       backgroundColor: 'rgb(83, 85, 207)',
  //       color: 'white'
  //     });

  //     setBtnText('Dark Mode');
  //   }

  //   else{
  //     setBgStyle({
  //       backgroundColor: '#121212'
  //     });

  //     setTextStyle({
  //       color: '#F2F2F2'
  //     });

  //     setBtnStyle({
  //       backgroundColor: 'rgb(96, 98, 225)',
  //       color: '#F2F2F2'
  //     });

  //     setBtnText('Light Mode');
  //   }
  // }

  return (
    <section id={styles.about}>
      <div className={styles.row1}>
        <h1 className={`${styles.mainText} ${props.mode ? styles.headingDarkMode : null}`}>About Us</h1>
        <p className={`${styles.subText}  ${props.mode ? styles.textDarkMode : null}`}>Wordie is the study of documents and communication artifacts, which might be texts of various formats, pictures, audio or video. Social scientists use content analysis to examine patterns in communication in a replicable and systematic manner. One of the key advantages of using content analysis to analyse social phenomena is its non-invasive nature, in contrast to simulating social experiences or collecting survey answers.</p>
        <p className={`${styles.subText} ${styles.subText2} ${props.mode ? styles.textDarkMode : null}`}>Computers are increasingly used in content analysis to automate the labeling (or coding) of documents. Simple computational techniques can provide descriptive data such as word frequencies and document lengths. Machine learning classifiers can greatly increase the number of texts that can be labeled, but the scientific utility of doing so is a matter of debate.</p>
        <p className={`${styles.subText} ${styles.subText2} ${props.mode ? styles.textDarkMode : null}`}>The simplest and most objective form of content analysis considers unambiguous characteristics of the text such as word frequencies, the page area taken by a newspaper column, or the duration of a radio or television program. Analysis of simple word frequencies is limited because the meaning of a word depends on surrounding text. Key Word In Context (KWIC) routines address this by placing words in their textual context. This helps resolve ambiguities such as those introduced by synonyms and homonyms.</p>
      </div>

      <div className={styles.row2}>
        <button className={`${styles.Btn} ${props.mode ? styles.btnDarkMode : null}`}>{props.mode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </section>
  )
}