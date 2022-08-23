import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div style={{ height: '2000px', backgroundColor: '#333' }}>
            <h2 className={cx('')}>Home Page</h2>
        </div>
    );
}

export default Home;
