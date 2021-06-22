import React from 'react';
import './Test.css';
import NavBar from '../../Components/NavBar/NavBar';

function Test() {


    const ladVariable = ["C", "X", "Y", "T", "M"]

    const [count, setCount] = React.useState(0);

    const incremental =()=>{
        setCount(count+1)
    };

    const items =[]
    
    const decremental =()=>{
        if(count>0){
            setCount(count-1)
        }
    };

    for (const [index, value] of ladVariable.entries()) {
        items.push(<a href="https://www.lipsum.com/" key={index}>{value}</a>)
      }


      
      alert("Browser inner window width: " + window.innerWidth +
      "Browser inner window height: " + window.innerHeight);

    return (
        <div className="test-conteiner">
            <div className="top-conteiner"><NavBar/></div>
            <h1 className="title-test">Test</h1>
            <ol className="test-task">
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <form className="form-box">
                    <label for="form-name">Podaj odpowiedź:</label>
                    <input type="text" name="fname" placeholder="Odpowiedź"/>
                    </form> 
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <form className="form-box">
                        <textarea className="text-area" type="text" placeholder="Podaj dłuższą odpowiedź" />
                    </form>
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <form>
                        <input type="checkbox" id="aaa"/>
                        <label for="aaa">aaa</label>
                    </form>
                    <form>
                        <input type="checkbox" id="bbb"/>
                        <label for="bbb">bbb</label>
                    </form>
                    <form>
                        <input type="checkbox" id="ccc"/>
                        <label for="ccc">ccc</label>
                    </form>
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <form>
                        <input type="radio" id="aaa"/>
                        <label for="aaa">aaa</label>
                    </form>
                    <form>
                        <input type="radio" id="bbb"/>
                        <label for="bbb">bbb</label>
                    </form>
                    <form>
                        <input type="radio" id="ccc"/>
                        <label for="ccc">ccc</label>
                    </form>
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <form>
                        <select name="pets" id="pet-select">
                            <option value="">--Wybierz odpowiedź--</option>
                            <option value="aaa">aaa</option>
                            <option value="bbb">bbb</option>
                            <option value="ccc">ccc</option>
                            <option value="ddd">ddd</option>
                            <option value="eee">eee</option>
                            <option value="fff">fff</option>
                         </select>
                    </form>
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <form>
                        <span id="counter" class="counter-text">{count}</span>
                        <button type="button" onClick={decremental}>-</button>
                        <button type="button" onClick={incremental}>+</button>
                    </form>
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <div>{items}</div>
                </li>
                
            </ol>
        </div>
    )
}

export default Test
