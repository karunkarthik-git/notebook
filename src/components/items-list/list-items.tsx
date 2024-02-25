import { useEffect, useState } from 'react';
import './list-items.css';
import ViewFormatter from '../view-formatter/view-formatter';
import { useParams } from 'react-router-dom';
import { getDSASheetData } from '../../services/google-sheets-service';
import { HttpStatusCode } from 'axios';
import Loader from '../loader/loader';
import { Button, Dropdown } from 'react-bootstrap';
import { COLOR_MAPPER } from '../../constants/common-constants';

const ListItems = () => {
  const { notesId } = useParams();
  const [showDetails, setShowDetails]: any = useState();
  const [items, setItems]: any = useState([]);
  const [loader, setLoader] = useState(true);

  const RenderDropdown = ({ section, title, list, label }: any) => {
    const variant = COLOR_MAPPER[section];
    return (
      <Dropdown className={`${section}`}>
        <Dropdown.Toggle variant={variant} id="dropdown-basic">{section}</Dropdown.Toggle>
        <Dropdown.Menu>
          {list.map((data: string, index: any) => <Dropdown.Item onClick={() => {
            setShowDetails({
              show: true,
              content: data,
              title: title
            })
          }}>{label + " " + index}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  const RenderTileInfo = ({ info, index }: any) => {
    const [date, title, qLink, sourceLink, notes, ...codes] = info;
    return (
      <>
        <span className='sno'>{index}</span>
        <span className='date'>{date}</span>
        <span className='title'>{title}</span>
        <span className='question'><a href={qLink} target='_blank' rel="noreferrer">Question</a></span>
        <span className='solution'><a href={sourceLink} target='_blank' rel="noreferrer">Solution</a></span>
        {codes?.length > 0 ? <RenderDropdown title={title} list={codes} section={'Codes'} label={'Code '}></RenderDropdown> : <></>}
        {notes?.length > 0
          ? <Button className='Notes' variant="secondary" onClick={() => setShowDetails({ show: true, content: notes, title: title})}>Notes</Button>
          : <></>}
      </>
    )
  }

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
  }, [notesId]);

  return (
    <>
      {loader ? <Loader /> : <></>}
      <div className="list-container">
        {
          items.map((item: any, index: any) => {
            if (index === 0) return <></>
            return (
              <div className={'info-row'} key={index}><RenderTileInfo index={index} info={item}></RenderTileInfo></div>
            )
          })
        }
      </div>
      {showDetails?.show ? <ViewFormatter show={showDetails.show} onHide={() => setShowDetails({ show: false })} content={showDetails.content} title={showDetails.title} /> : <></>}
    </>
  )
}

export default ListItems;