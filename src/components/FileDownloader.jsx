import React from 'react';

function FileDownloader() {
    const downloadFile = async () => {
        const res = await fetch('https://api.example.com/v1/download/report.pdf');
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.pdf';
        a.click();
        a.remove();
    };

    return (
        <div>
            <button onClick={downloadFile}>Download Report</button>
        </div>
    );
}

export default FileDownloader;
