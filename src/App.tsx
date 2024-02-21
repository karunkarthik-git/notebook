import { useEffect, useState } from 'react';
import './App.css';
import { getSheetData, getSheetProperties } from './services/google-sheets-service';
import { SHEET_ID_MAPPER } from './constants/common-constants';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { CodeBlock, codepen } from 'react-code-blocks';

const App = () => {
  const [sheetNames, setSheetNames] = useState([]);
  const [code, setCode] = useState('');

  useEffect(() => {
    // getSheetProperties(SHEET_ID_MAPPER.DSA_SHEET).then((response: AxiosResponse) => {
    //   if (response.status === HttpStatusCode.Ok) {
    //     setSheetNames(response.data.sheets.map((sheet: any) => sheet.properties.title));
    //   }
    // }).catch((error: any) => {
    //   console.log(error);
    // })
  }, []);

  useEffect(() => {
    getSheetData(SHEET_ID_MAPPER.DSA_SHEET, "DUMMY")
      .then((response: any) => {
        if (response.status === HttpStatusCode.Ok) {
          const data = response.data.values[1][0];
          console.log(data);
          setCode(data);
        }
      }).catch((error: any) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      {code ?
        <CodeBlock
          text={code}
          language='c++'
          showLineNumbers={true}
          theme={codepen}
        /> : <></>}
    </>
  );
}

export default App;
