import React from 'react'

const Testing = () => {


    if (window) {
        let gyroscope = new window.Gyroscope({frequency: 60});
    
    gyroscope.addEventListener('reading', e => {
        document.getElementById('x').innerHTML = gyroscope.x;
        document.getElementById('y').innerHTML = gyroscope.y;
        document.getElementById('z').innerHTML = gyroscope.z;
    });
    gyroscope.start();
    }
    return (
    <div>
        <h1>Gyroscope</h1>
        <div className="results" style={{color: '#fff', fontSize: '22px'}}>
            <div className="single-result">Value of X: <span id="x">0</span></div>
            <div className="single-result">Value of Y: <span id="y">0</span></div>
            <div className="single-result">Value of Z: <span id="z">0</span></div>
        </div>
    </div>
  )
}

export default Testing