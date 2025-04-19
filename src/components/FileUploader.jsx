import React, { useState } from 'react';

function FileUploader() {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        await fetch('https://api.example.com/v1/upload', {
            method: 'POST',
            body: formData,
        });

        alert('Upload successful!');
    };

    return (
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload File</button>
        </div>
    );
}

export default FileUploader;
