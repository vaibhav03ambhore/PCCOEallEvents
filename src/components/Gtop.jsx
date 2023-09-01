import React, { useEffect, useState } from 'react'
import '../components_css/Gtop.css';
import { FaArrowUp } from 'react-icons/fa';

const GTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const listenToScroll = () => {
        let heightTohidden = 50;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightTohidden) {
            setIsVisible(true);
        }
        else {
         setIsVisible(false);
        }

    };
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, []);
    return (
        <div className='container'>
            {isVisible && (
                <div className='top-btn' onClick={goToBtn}>
                    <FaArrowUp className='top-btn--icon' />
                </div>
            )}
        </div>
    )
}

export default GTop