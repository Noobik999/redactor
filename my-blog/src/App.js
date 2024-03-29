import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function App() {
  const editorRef = useRef();
    function onClickHandler() {
      console.log(editorRef.current.getContent());
    }
  return (
    <div>
      <Editor
        onInit={ (evt, editor) => editorRef.current = editor}
        initialValue='<p>Default Text </p>'
        init={{
          menubar:false,
        }}
      />
      <button
        type = 'button'
        onClick ={onClickHandler}
      >
        Зачем?
      </button>
    </div>
  );
}

export default App;
