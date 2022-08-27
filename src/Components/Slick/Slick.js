import styles from './Slick.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Slick({ images }) {
    const [width, setWidth] = useState(0);
    const [count, setCount] = useState(0);
    //const [arrow, setArrow] = useState(0);
    const countRef = useRef();
    const _handleRenderImage = () => {
        return images.map((item, index) => (
            <div key={index} className={cx('slick-item')}>
                <img width="595" height="180" src={item} alt="" />
            </div>
        ));
    };
    useEffect(() => {
        setWidth(countRef.current.scrollWidth - countRef.current.offsetWidth);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (count === 2) {
                setCount(2.5);
                return;
            }
            setCount((prev) => (prev === 2.5 ? 0 : prev + 1));
        }, 4500);
        return () => {
            clearInterval(timer);
        };
    }, [count, images.length]);
    useEffect(() => {
        const sliderContainer = document.querySelector('#image-slick');
        const slider = document.querySelector('#image-container');
        sliderContainer.addEventListener('mousedown', (e) => {
            slider.style.transition = 'all 0s ease 0s';
        });
    });
    const _handleNextorPrevImage = (event) => {
        if (event.target.id === 'next') {
            if (count === 2) {
                setCount(2.5);
                return;
            }
            setCount((prev) => (prev === 2.5 ? 0 : prev + 1));
        } else if (event.target.id === 'prev') {
            if (count === 0.5) {
                setCount(0);
                return;
            }
            setCount((prev) => (prev === 0 ? 2.5 : prev - 1));
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image-wrap')}>
                    <motion.div ref={countRef} className={cx('image-slick')} id="image-slick">
                        <motion.div
                            className={cx('image-container')}
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            id="image-container"
                            style={{ transform: `translateX(${-count * 1209}px)`, transition: 'all 0.5s ease 0s' }}
                        >
                            {_handleRenderImage()}
                        </motion.div>
                    </motion.div>
                    <div className={cx('arrow-container')}>
                        <div className={cx('arrow-prev')}>
                            <div
                                className={cx('arrow-prev-container')}
                                id="prev"
                                onClick={(e) => _handleNextorPrevImage(e)}
                            >
                                <div className={cx('arrow-prev-icon')} id="prev"></div>
                            </div>
                        </div>
                        <div className={cx('arrow-next')}>
                            <div
                                className={cx('arrow-next-container')}
                                id="next"
                                onClick={(e) => _handleNextorPrevImage(e)}
                            >
                                <div className={cx('arrow-next-icon')} id="next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slick;
