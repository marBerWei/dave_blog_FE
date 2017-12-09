import React from 'react'
import { createPost } from '../services/createPost'
import {Editor, EditorState, RichUtils} from 'draft-js';

class PostForm extends React.Component {

  state = {
  	title: 'title goes here',
   //  body: 'type body here',
    // NOT GOING TO USE THIS
    editorState: EditorState.createEmpty()
  }

  // NOT GOING TO USE THIS
  onChange = (editorState) => {
    this.setState({editorState})
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  _onItalicClick() {
  this.onChange(RichUtils.toggleInlineStyle(
    this.state.editorState,
    'ITALIC'
  ));
}

  // OG FORM

  // handleBodyChange = (event) => {
  //   this.setState({body: event.target.value});
  // }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	console.log(this.state)
  	const newBody = JSON.stringify({body: this.state.editorState, title: this.state.title})
    createPost(newBody)
    alert('An essay was submitted: ');
  }


  render() {
    console.log(this.state.editorState)
    return (
      <div id="content">
        <form onSubmit={this.handleSubmit}>
        <h1>Draft.js Editor</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicClick.bind(this)}>Italic</button>
        <input value={this.state.title} onChange={this.handleTitleChange} />
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default PostForm 



// <form onSubmit={this.handleSubmit}>
        
//           <input value={this.state.title} onChange={this.handleTitleChange} />
//           <textarea value={this.state.body} onChange={this.handleBodyChange} />
        
//         <input type="submit" value="Submit" />
//       </form>