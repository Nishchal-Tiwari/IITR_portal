import React from 'react';
import '../css/c1.css';
import Black from '../images/black_img.jpg';
import White from '../images/white.jpg';
export default function c1()
{
    return(
        <div className="c1" >
            <img src={White} />
            <img src={Black} />

        </div>
    );
}