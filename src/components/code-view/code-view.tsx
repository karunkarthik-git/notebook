import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import './code-view.css';
import { CodeBlock, codepen } from 'react-code-blocks';

interface ICodeView {
  show: boolean;
  onHide: any;
  code: string;
  title: string;
};

const CodeView = (props: ICodeView) => {
  const { show, onHide, code, title } = props;
  return (
    <Modal show={show} onHide={onHide} fullscreen={true}>
      <ModalHeader closeButton>{title}</ModalHeader>
      <ModalBody>
        <CodeBlock
          text={code}
          language='c++'
          showLineNumbers={true}
          theme={codepen}
        />
      </ModalBody>
    </Modal>
  )
}

export default CodeView;