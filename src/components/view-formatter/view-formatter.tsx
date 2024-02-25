import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import './view-formatter.css';
import { CodeBlock, codepen } from 'react-code-blocks';

interface IViewFormatter {
  show: boolean;
  onHide: any;
  content: string;
  title: string;
};

const ViewFormatter = (props: IViewFormatter) => {
  const { show, onHide, content, title } = props;
  return (
    <Offcanvas placement='end' show={show} onHide={onHide} fullscreen={true}>
      <OffcanvasHeader className='canvas-header' closeButton>{title}</OffcanvasHeader>
      <OffcanvasBody className='canvas-body'>
        <CodeBlock
          text={content}
          language='c++'
          showLineNumbers={true}
          theme={codepen}
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default ViewFormatter;