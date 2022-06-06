import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/originals/06/36/06/063606092a1f968894661a6451254df7.png"
                alt="Chu"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Do Tran Minh Chu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>dotranminhchu</span>
            </div>
        </div>
    );
}

export default AccountItem;
