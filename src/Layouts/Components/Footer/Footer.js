import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);

const LIST_ITEM = {
    0: [
        {
            title: 'Tích điểm Quà tặng VIP',
        },
        {
            title: 'Lịch sử mua hàng',
        },
        {
            title: 'Cộng tác bán hàng cùng TGDĐ',
        },
        {
            title: 'Tìm hiểu về mua trả góp',
        },
        {
            title: 'Chính sách bảo hành',
        },
        {
            title: 'Xem thêm',
            class: 'list-item-more',
            id: 'list-item-more',
        },
        {
            title: 'Chính sách đổi trả',
            class: 'item-more',
        },
        {
            title: 'Giao hàng & Thanh toán',
            class: 'item-more',
        },
        {
            title: 'Hướng dẫn mua online',
            class: 'item-more',
        },
        {
            title: 'Bán hàng doanh nghiệp',
            class: 'item-more',
        },
        {
            title: 'Phiếu mua hàng',
            class: 'item-more',
        },
        {
            title: 'In hóa đơn điện tử',
            class: 'item-more',
        },
        {
            title: 'Quy chế hoạt động',
            class: 'item-more',
        },
        {
            title: 'Nội quy cửa hàng',
            class: 'item-more',
        },
        {
            title: 'Chất lượng phục vụ',
            class: 'item-more',
        },
        {
            title: 'Cảnh báo giả mạo',
            class: 'item-more',
        },
        {
            title: 'Chính sách khui hộp sản phẩm Apple',
            class: 'item-more',
        },
    ],
    1: [
        {
            title: 'Giới thiệu công ty (MWG.vn)',
        },
        {
            title: 'Tuyển dụng',
        },
        {
            title: 'Gửi góp ý, khiếu nại',
        },
        {
            title: 'Tìm siêu thị (3.287 shop)',
        },
        {
            title: 'Xem bản mobile',
        },
    ],
    2: [
        {
            title: 'Tổng đài hỗ trợ',
            text: '(Miễn phí gọi)',
        },
        {
            text: 'Gọi mua',
            phone: '1800.1060',
            time: '(7:30 - 22:00)',
        },
        {
            text: 'Kỹ thuật',
            phone: '1800.1763',
            time: '(7:30 - 22:00)',
        },
        {
            text: 'Khiếu nại',
            phone: '1800.1062',
            time: '(8:00 - 21:30)',
        },
        {
            text: 'Bảo hành',
            phone: '1800.1064',
            time: '(8:00 - 21:00)',
        },
    ],
    3: {
        0: [
            {
                class_icon: 'facebook',
                text: '3761k Fan',
            },
            {
                class_icon: 'youtube',
                text: '848k Đăng ký',
            },
        ],
        1: [
            {
                class_icon: 'congthuong',
            },
            {
                class_icon: 'khieunai',
            },
            {
                class_icon: 'protected',
            },
            {
                class_icon: 'lazyloaded',
            },
        ],
        2: [
            {
                title: 'Website cùng tập đoàn',
            },
            {
                class_logo: 'topzone',
            },
            {
                class_logo: 'dienmayxanh',
            },
            {
                class_logo: 'bachhoaxanh',
            },
            {
                class_logo: 'ankhang',
            },
            {
                class_logo: 'kids',
            },
            {
                class_logo: 'sport',
            },
            {
                class_logo: 'tantam',
            },
            {
                class_logo: 'cs4kfarm',
            },
            {
                class_logo: 'vieclam',
            },
        ],
    },
};

function Footer() {
    const [classes, setClasses] = useState('');
    const _handleListItem = (value) => {
        return value.map((item, index) => (
            <li
                key={index}
                className={cx(item.class, item.class && classes)}
                id={item.id}
                onClick={_handleListItemMore}
            >
                {item.title}
            </li>
        ));
    };
    const _handleItemContact = (value) => {
        return value.map((item, index) => (
            <li key={index}>
                {item.title ? (
                    <p>
                        <b>{item.title}</b>
                        {item.text}
                    </p>
                ) : (
                    <p>
                        <span>{item.text}:</span>
                        <strong>{item.phone}</strong>
                        {item.time}
                    </p>
                )}
            </li>
        ));
    };
    const _handleRenderImage = (value) => {
        return value.map((item, index) => (
            <li key={index}>
                {item.class_icon && (
                    <span>
                        <i className={cx('icon', item.class_icon)}></i>
                        {item.text}
                    </span>
                )}
                {item.title && <p>{item.title}</p>}
                {item.class_logo && <i className={cx('logo', item.class_logo)}></i>}
            </li>
        ));
    };
    const _handleListItemMore = (value) => {
        if (value.target.id !== '') {
            const more = document.querySelector('#list-item-more');
            more.style.display = 'none';
            setClasses('show');
        }
    };
    return (
        <div className={cx('Footer')}>
            <div className={cx('container')}>
                <ul>
                    <div className={cx('list-item-container')}>{_handleListItem(LIST_ITEM[0])}</div>
                    <div className={cx('list-item-container')}>{_handleListItem(LIST_ITEM[1])}</div>
                    <div className={cx('list-item-container')}>{_handleItemContact(LIST_ITEM[2])}</div>
                    <div className={cx('list-item-container')}>
                        <div>{_handleRenderImage(LIST_ITEM[3][0])}</div>
                        <div>{_handleRenderImage(LIST_ITEM[3][1])}</div>
                        <div>{_handleRenderImage(LIST_ITEM[3][2])}</div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
