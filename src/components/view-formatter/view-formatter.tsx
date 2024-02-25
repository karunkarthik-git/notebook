import { Dropdown, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import './view-formatter.css';
import * as RCB from 'react-code-blocks';
import { useState } from 'react';
import { THEMES } from '../../constants/common-constants';

interface IViewFormatter {
  show: boolean;
  onHide: any;
  content: string;
  title: string;
};

const ViewFormatter = (props: IViewFormatter) => {
  const { show, onHide, content, title } = props;
  const [theme, setTheme]: any = useState({
    name: 'A11yDark',
    value: RCB.a11yDark
  });

  const RenderDropdown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant={'danger'} id="dropdown-basic">{theme.name}</Dropdown.Toggle>
        <Dropdown.Menu>
          {THEMES.map((data: any, index: any) => <Dropdown.Item key={index} onClick={() => {
            setTheme({name: data, value: RCB[data as keyof typeof RCB]});
          }}>{data}</Dropdown.Item>)}
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
        <RenderToolSection></RenderToolSection>
        <RCB.CopyBlock
          text={content}
          language='c++'
          showLineNumbers={true}
          theme={theme.value}
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default ViewFormatter;