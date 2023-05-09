import { useState, Fragment } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";

// Ace Editor modes
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import { useEffect } from "react";
import { CompileCustomCode, CompileExamples, CompileTestCases } from "../../../services/ExercisesService";
import OutputCard from "./components/OutputCard";

function Editor(props) {
    const [code, setCode] = useState('');
    const [id, setId] = useState('');
    const [stdin, setStdin] = useState('');
    const [output, setOutput] = useState('');
    const [examplesVisible, setExamplesVisible] = useState(false);

    useEffect(() => {
        setCode(props.solutionTemplate);
        setId(props.id);
    }, [props]);

    function handleChangeCode(newValue) {
        setCode(newValue);
    };

    const handleChangeInput = (e) => {
        setStdin(e.target.value);
    };

        const handleTest = async () => {
        console.log("Enviando");
        const eCase = {
            script: code,
            stdin: stdin,
            version: version,
            language: language
        };


        alert("Enviando " + eCase.script + " input " + eCase.stdin);

        const response = await CompileCustomCode(eCase);
        setOutput(response);
        console.log(response);
    };
        const [language, setLanguage] = useState('java');
    const [editorLanguage, setEditorLanguage] = useState('java');
    const [version, setVersion] = useState('4');


        const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        if (event.target.value === 'java') {
            setEditorLanguage('java');
            setVersion("4");
        } else {
            if (event.target.value === 'python3') {
                setEditorLanguage('python');f
                setVersion("1");
            } else {
                setEditorLanguage('c_cpp');
                setVersion("1");
            }
        }
        console.log(language + version);
    };

    const handleTestExamples = async () => {
        const eCase = {
            script: code,
            id: id
        };

        alert("Enviando " + eCase.script);

        const response = await CompileExamples(eCase);
        setOutput(response);
        setExamplesVisible(true);
        console.log(response);
    };

  const handleTest_TestCases = async () => {
        const eCase = {
            id: id,
            script: code,
            language: language,
            version: version,
            idUser: user.profile.sub,
        };
        console.log(eCase);
        alert("Enviando " + eCase.script);
        
        const response = await CompileTestCases(eCase);
        setTestCaseOutput(response);
        console.log(response);
    };


    function handleExamplesVisibles() {
        if (examplesVisible) {
            setExamplesVisible(false);
        } else {
            setExamplesVisible(true);
        }
    };

    

    return (
        <Fragment>
               <select value={language} onChange={handleLanguageChange}>
                <option value="python3">Python</option>
                <option value="java">Java</option>
                <option value="cpp17">C++</option>
            </select>
            <p>{props.iduser}</p>
            <AceEditor
                id="code"
                value={code}
                mode="python"
                onChange={handleChangeCode}
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                width="800px"
                height="600px"
                fontSize='2rem'
                editorProps={{ $blockScrolling: true }}
            />
            

         
            <div className = "button-container">
            <button className="boton boton--azul buttons-editor" onClick={handleTestExamples}>Execute</button>
            <button className="boton boton--gris buttons-editor" onClick={handleTest}>Execute Custom Code</button>
            <button className="boton boton--confirm buttons-editor" onClick={handleTest_TestCases}>Submit</button>
            </div>
          
            <br />
            <div className="actions-container">
                <h3>Input</h3>
            <textarea className = "text-input" onChange={handleChangeInput} id="input" />

            <br />

              
            {examplesVisible ? (
                <Fragment>
                    <button className="btn" onClick={handleExamplesVisibles}>Show</button>
                    <OutputCard list={output} />
                </Fragment>) : (<><button className="btn" onClick={handleExamplesVisibles}>Show</button></>)}
                </div>
        </Fragment>
    );
}

export default Editor;