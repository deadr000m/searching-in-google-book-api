import React, { useState } from 'react';
import { Button, Form, Input, Flex } from 'antd';
import Tooltip from 'antd/es/tooltip';
import { SearchOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/hooks';
import { fetchBooks } from '../redux/slices/booksSlice';
import { useAppSelector } from '../hooks/hooks';
import { Select } from 'antd';
import { Oval } from 'react-loader-spinner';
import { setSearchingAndSorting } from '../redux/slices/booksSlice';
// import { setSortingType } from '../redux/slices/booksSlice';

function FormApp() {
  const [inputState, setInputState] = useState<string>('');
  const [selectState, setSelectState] = useState<string>('relevance');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.books.isLoading);

  const sortOptions = [
    { label: 'relevance', value: 'relevance' },
    { label: 'newest', value: 'newest' },
  ];

  return (
    <div>
      <Form
        className="app-form"
        name="basic"
        onFinish={() => {
          dispatch(
            fetchBooks({
              searchString: inputState,
              startIndex: 0,
              sorting: selectState,
            })
          );
          dispatch(
            setSearchingAndSorting({
              searchedTitle: inputState,
              sortingType: selectState,
            })
          );
        }}
      >
        <Flex justify="center" gap="30px">
          <Form.Item>
            <Input
              value={inputState}
              onChange={(e) => {
                setInputState(e.target.value);
              }}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Select
              options={sortOptions}
              value={selectState}
              style={{ width: '110px' }}
              onChange={(val) => {
                setSelectState(val);
              }}
            ></Select>
          </Form.Item>
          <Form.Item>
            <Tooltip title="search">
              <Button
                shape="circle"
                icon={<SearchOutlined />}
                htmlType="submit"
              />
            </Tooltip>
          </Form.Item>
          <div style={{ width: '30px' }}>
            <Oval
              visible={isLoading}
              height="29"
              color="#343a40"
              secondaryColor="#f0f0f0"
            ></Oval>
          </div>
        </Flex>
      </Form>
    </div>
  );
}

export default FormApp;
