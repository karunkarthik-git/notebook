import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getDSASheetProperties } from "../../services/google-sheets-service";
import { AxiosResponse, HttpStatusCode } from "axios";
import { Link } from "react-router-dom";
import './notes-list.css';
import Loader from "../loader/loader";

const NotesList = () => {
    const [sheetInfo, setSheetInfo] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getDSASheetProperties().then((response: AxiosResponse) => {
            if (response.status === HttpStatusCode.Ok) {
                setSheetInfo(response.data.sheets.map((sheet: any) => {
                    return {
                        title: sheet.properties.title,
                        sheetId: sheet.properties.sheetId
                    }
                }));
            }
        }).catch((error: any) => {
            console.log(error);
        }).finally(() => {
            setLoader(false);
        })
    }, []);

    return (
        <>
        {loader ? <Loader/> : <></>}
        <div className="notes-list-container">
            {
                sheetInfo.map((info: any) => {
                    return (
                        <Link style={{ textDecoration: 'none' }} to={`/notes/${info.title}`}>
                            <Button variant="outline-primary" className="notes-button">
                                {info.title}
                            </Button>
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}

export default NotesList;