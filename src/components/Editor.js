import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

class Editor extends React.Component {
  handleChange = (content) => {
    const { id, onChange } = this.props;
    onChange(content, id);
  }

  render() {
    const { body } = this.props;
    return (
      <CodeMirror value={body} onChange={this.handleChange} />
    );
  }
}

export default Editor;
