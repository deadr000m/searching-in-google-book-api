import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { deleteChosenBook } from '../redux/slices/modalSlice';

function Modal() {
  const modalState = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  if (!modalState.isBookChosed) {
    return null;
  }
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
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
        </div>
      </div>
    </>
  );
}

export default Modal;
