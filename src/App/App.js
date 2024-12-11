import React, { useState } from 'react';
import './App.scss';
import numeral from 'numeral';

export default function App() {
  const [bytes, setBytes] = useState();
  const [results, setResults] = useState({});

  const handleBytes = () => {
    if (!bytes) {
        alert("Please enter a number.");
        return;
    }
    if(bytes < 0) {
        alert("Do not enter a negative number.");
        return;
    }

    const byteValue = parseFloat(bytes);

    const kilobytes = byteValue >= 1024 ? byteValue / 1024 : 0;
    const megabytes = byteValue >= 1024 ** 2 ? byteValue / (1024 ** 2) : 0;
    const gigabytes = byteValue >= 1024 ** 3 ? byteValue / (1024 ** 3) : 0;
    const terabytes = byteValue >= 1024 ** 4 ? byteValue / (1024 ** 4) : 0;
    
    setResults({
      kilobytes: numeral(kilobytes).format("0") + " KB",
      megabytes: numeral(megabytes).format("0") + " MB",
      gigabytes: numeral(gigabytes).format("0") + " GB",
      terabytes: numeral(terabytes).format("0") + " TB",
    });
    
    setBytes('');
  }

  return (
    <div className='byteContainer'>
        <div className="byteBox">
            <h2>Enter Byte</h2>

            <div className="byteForm">
                <input type="text" placeholder='Enter byte...' value={bytes} onChange={(e) => setBytes(e.target.value)}/>
                <button onClick={handleBytes}><i class="bi bi-arrow-repeat"></i></button>
            </div>

            {Object.keys(results).length > 0 && (
                <div className="bytes">
                    <p>Kilobytes: {results.kilobytes}</p>
                    <p>Megabytes: {results.megabytes}</p>
                    <p>Gigabytes: {results.gigabytes}</p>
                    <p>Terabytes: {results.terabytes}</p>
                </div>
            )}
        </div>
    </div>
  )
}
