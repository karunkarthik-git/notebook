import { Dropdown, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import './view-formatter.css';
import CodeMirror from "@uiw/react-codemirror";
import { githubDark } from '@uiw/codemirror-theme-github';

interface IViewFormatter {
  show: boolean;
  onHide: any;
  content: string;
  title: string;
};

const ViewFormatter = (props: IViewFormatter) => {
  const { show, onHide, content, title } = props;

  const RenderDropdown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant={'danger'} id="dropdown-basic">{'theme.name'}</Dropdown.Toggle>
        <Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  const RenderToolSection = () => {
    return (
      <div className='tool-bar'>
        <RenderDropdown></RenderDropdown>
      </div>
    )
  }

  return (
    <Offcanvas placement='end' show={show} onHide={onHide}>
      <OffcanvasHeader className='canvas-header' closeButton>{title}</OffcanvasHeader>
      <OffcanvasBody className='canvas-body'>
        {/* <RenderToolSection></RenderToolSection> */}
        <CodeMirror
          value={content}
          lang='c++'
          readOnly={true}
          basicSetup={true}
          theme={githubDark}
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default ViewFormatter;