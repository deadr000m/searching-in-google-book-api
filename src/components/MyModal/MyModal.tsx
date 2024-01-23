import React from 'react';
import styles from './MyModal.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { deleteChosenBook } from '../../redux/slices/modalSlice';

function MyModal() {
  const modalState = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  if (!modalState.isBookChosed) {
    return null; //прикольная хуйня
  }
  return (
    <div className={styles.myModal + ' ' + styles.active}>
      {/* styles.active */}
      <div className={styles.myModelContent}>
        <div className={styles.overlay}>
          <div className={styles.closeContainer}>
            <Button
              icon={<CloseOutlined />}
              onClick={() => dispatch(deleteChosenBook())}
              // className="close"
            />
          </div>

          <div className={styles.modalHead}>
            <img
              src={modalState.chosedBook?.img}
              alt=""
              className={styles.modalIMG}
            />
            <div className={styles.modalHeadDescription}>
              <h1 className={styles.modalTitle}>
                {modalState.chosedBook?.title}
              </h1>
              <h3 className={styles.bookAuthors}>
                {modalState.chosedBook?.authors.join(', ')}
              </h3>
              <h4 className={styles.bookPublishers}>
                {modalState.chosedBook?.publisher}
                <span>{modalState.chosedBook?.publishedDate}</span>
                <br />
              </h4>
            </div>
          </div>
          <p className={styles.modalBookDesciption}>
            {modalState.chosedBook?.description}
          </p>

          {/* <div className="overlay-inner">
            <Button
              icon={<CloseOutlined />}
              onClick={() => dispatch(deleteChosenBook())}
              className="close"
            />
            <div className="inner-box"></div>
            <img src={modalState.chosedBook?.img} alt="" />
            <div className="info">
              <h1>{modalState.chosedBook?.title}</h1>
              <h3>{modalState.chosedBook?.authors.join(', ')}</h3>
              <h4>
                {modalState.chosedBook?.publisher}
                <span>{modalState.chosedBook?.publishedDate}</span>
                <br />
              </h4>
            </div>
            <h4 className="desciption">{modalState.chosedBook?.description}</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MyModal;
