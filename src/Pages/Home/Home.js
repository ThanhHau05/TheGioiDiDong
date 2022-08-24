import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Images } from '~/Images';
import Slick from '~/components/Slick';
import { ImagesSlick } from '~/Images/Slick';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img width="1920" height="920" src={Images.ImageHome} alt="Banner Big Campaign" />
            </div>
            <div className={cx('main-container')}>
                <div className={cx('slick-container')}>
                    <Slick images={ImagesSlick} />
                </div>
            </div>
        </div>
    );
}

export default Home;
