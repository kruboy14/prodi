import React, { useState } from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './Editor.module.scss';
import { FC } from 'react';

const Editor = () => {
  const [data, setData] = useState(null);
  return (
    <div className={styles.container}>
      <CKEditor
     
        // @ts-ignore
        onChange={(event, editor) => {
          setData(editor.getData());
        }}
        editor={ClassicEditor}
        config={{
          ckfinder: {
            uploadUrl: '/uploads',
          },
        }}
      />

      <div dangerouslySetInnerHTML={{ __html: data! }}></div>
    </div>
  );
};

const Viewer: FC = ({ children }) => {
  return <>{children}</>;
};

export default Editor;
