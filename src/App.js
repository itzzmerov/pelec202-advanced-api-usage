import React from 'react';
import UserTable from './components/UserTable';
import FileUploader from './components/FileUploader';
import FileDownloader from './components/FileDownloader';

function App() {
  return (
    <div className="p-4">
      <h1>Advanced API Demo</h1>
      <UserTable />
      <hr />
      <FileUploader />
      <hr />
      <FileDownloader />
    </div>
  );
}

export default App;
