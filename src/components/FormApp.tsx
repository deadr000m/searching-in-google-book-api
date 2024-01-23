import React, { useState } from 'react';
import { Button, Form, Input, Flex } from 'antd';
import Tooltip from 'antd/es/tooltip';
import { SearchOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/hooks';
import { fetchBooks } from '../redux/slices/booksSlice';
import { useAppSelector } from '../hooks/hooks';
import { setSerchedString } from '../redux/slices/booksSlice';
import { Select } from 'antd';
import { setSorting } from '../redux/slices/mutateSlice';
import { Oval } from 'react-loader-spinner';
// import { setSortingType } from '../redux/slices/booksSlice';

function FormApp() {
  const sortedBy = useAppSelector((state) => state.mutation.sort);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.books.isLoading);
  const searchString = useAppSelector((state) => state.books.searchedTitle);
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
              searchString: searchString,
              startIndex: 0,
              sorting: sortedBy,
            })
          );
        }}
      >
        <Flex justify="center" gap="30px">
          <Form.Item>
            <Input
              value={searchString}
              onChange={(e) => {
                dispatch(setSerchedString(e.target.value));
              }}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Select
              options={sortOptions}
              value={sortedBy}
              style={{ width: '110px' }}
              onChange={(val) => {
                dispatch(setSorting(val));
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
