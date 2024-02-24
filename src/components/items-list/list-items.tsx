import { useEffect, useState } from 'react';
import './list-items.css';
import ListGroup from 'react-bootstrap/ListGroup';
import CodeView from '../code-view/code-view';
import { useParams } from 'react-router-dom';
import { getDSASheetData } from '../../services/google-sheets-service';
import { HttpStatusCode } from 'axios';
import Loader from '../loader/loader';

const ListItems = () => {
    const { notesId } = useParams();
    const [showDetails, setShowDetails]:any = useState();
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getDSASheetData(notesId || '')
          .then((response: any) => {
            if (response.status === HttpStatusCode.Ok) {
              setItems(response.data.values);
            }
          }).catch((error: any) => {
            console.log(error);
          }).finally(() => {
            setLoader(false);
          })
    }, []);

    return (
        <>
        { loader ? <Loader/> : <></> }
        <ListGroup>
            {
                items.map((item, index) => <ListGroup.Item key={index} onClick={() => {
                    setShowDetails({
                        code: item[0],
                        title: item[1]
                    })
                }}>{item[1]}</ListGroup.Item>)
            }
        </ListGroup>
        { showDetails ? <CodeView show={true} onHide={() => setShowDetails(undefined)} code={showDetails.code} title={showDetails.title} /> : <></> }
        </>
    )
}

export default ListItems;