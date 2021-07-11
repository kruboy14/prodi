import React from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AdminDashBoard = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          ckfinder: {
            uploadUrl: '/uploads',
          },
        }}
      />
    </div>
  );
};

export default AdminDashBoard;
