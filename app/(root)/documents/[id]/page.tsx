import React from 'react'
import { Editor } from '@/src/components/editor/Editor';
import Header from '@/components/ui/Header';

const Document = () => {
  return (
    <div>
        <Header>
          <div className="flex w-fit items-center justify-center gap-2">
            <p className='document-title'>This is a fake document title</p>
          </div>
        </Header>
      <Editor/>
    </div>
  )
}

export default Document;