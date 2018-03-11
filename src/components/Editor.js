import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  handleChange = (content) => {
    const { id, onChange } = this.props;
    onChange(content, id);
  }

  render() {
    const { id, body, onChange } = this.props;
    return (
      <MonacoEditor
        width="100%"
        height="400"
        language="markdown"
        theme="vs-dark"
        value={body}
        options={{
          selectOnLineNumbers: true
        }}
        onChange={this.handleChange}
      />
    );
  }
}

export default Editor;
