import React, { useEffect, useState } from 'react'
import { Table, Modal, Form, Input } from 'antd'
import { Box, Button, Grid } from '@mui/material'
import { AUS } from '../adminUser/styles'
import { ButtonFunction } from '../table/styles'
import FormEditInfor from '../formEditInfor'
import * as Yup from 'yup'
import { DeleteProduct, EditProduct } from '../../redux/apiRequest'
import { useRouter } from 'next/router'
import { InsertNewProduct } from '../../redux/apiRequest'
import { useDispatch } from 'react-redux'

const styles = {
  width: '50px',
  height: '50px'
}

const buttonSx = {
  border: '1px solid #F77A0C',
  backgroundColor: '#F77A0C',
  color: 'white',
  marginBottom: '20px',
  '&:hover': {
    color: '#F77A0C',
    backgroundColor: 'white'
  }
}

const AdminProduct = ({ data }) => {
  const dispatch = useDispatch();
  const [idPr, setIdPr] = useState('');
  const [prod, setProd] = useState({});
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [modalInsert, setModalInsert] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const router = useRouter();
  const showData = data;
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState('');
  const [rating, setRating] = useState('');

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  useEffect(() => {
    setUsers(showData);
  }, [showData])

  const handleDelete = (id) => {
    DeleteProduct(id)
  }
  const handleEdit = (product) => {
    setModalEdit(true);
    setProd(product);
  }

  const handleDetail = (slug) => {
    router.push(`/product/${slug}`)
  }

  const handleOpenForm = () => {
    setModalInsert(true)
  }

  const handleOk = async () => {
    const insert = {
      image: productImg,
      name: name,
      price: price,
      rating: rating,
      quantity: quantity
    }
    await InsertNewProduct(insert, dispatch)
    await setModalInsert(false);
  };

  const handleCancel = () => {
    setModalInsert(false);
  };

  const handleCancelEdit = () => {
    setModalEdit(false);
  };

  const onFinish = async (values) => {
    const prodEdit = {
      ...values,
      image: productImg,
    }
    await console.log('Success:', prodEdit);
    await EditProduct(dispatch, prod._id, prodEdit)
    setModalEdit(false)
  };

  return (
    <AUS>
      <Box display={'flex'} justifyContent={'end'} width={'96.5%'}>
        <Button sx={buttonSx} onClick={handleOpenForm}>Thêm</Button>
      </Box>
      <Table
        columns={[
          {
            title: 'Hình ảnh',
            dataIndex: 'image',
            render: (text) => <img style={styles} src={text} />
          },
          {
            title: 'Mã sản phẩm',
            dataIndex: '_id',
            render: (text) => <span style={{ cursor: 'pointer' }} onClick={() => handleDetail(text)}>{text}</span>,
          },
          {
            title: 'Tên',
            dataIndex: 'name',
          },
          {
            title: 'Số lượng',
            dataIndex: 'quantity',
          },
          {
            title: 'Giá tiền',
            dataIndex: 'price',
          },
          {
            title: '',
            dataIndex: 'action',
            render: (data, index) => (
              <ButtonFunction>
                <Button onClick={() => handleEdit(index)} className='btn'>Sửa</Button>
                <Button onClick={() => handleDelete(index._id)} className='btn'>Xóa</Button>
              </ButtonFunction>
            )
          }
        ]}
        dataSource={users}
      />
      <Modal
        title="Thêm sản phẩm mới"
        open={modalInsert}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Box>
          <Grid className='gridInput' container mb={2}>
            <Grid item md={6}>
              Ảnh sản phẩm:
            </Grid>
            <Grid item md={6}>
              <input
                id="imgUpload"
                accept="image/*"
                type="file"
                onChange={handleProductImageUpload}
                required
              />
            </Grid>
          </Grid>
          <Grid className='gridInput' container mb={2}>
            <Grid item md={6}>
              Tên sản phẩm:
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                placeholder="Tên sản phẩm"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Grid className='gridInput' container mb={2}>
            <Grid item md={6}>
              Giá bán:
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                placeholder="Giá bán"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Grid className='gridInput' container mb={2}>
            <Grid item md={6}>
              Đánh giá:
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                placeholder="Đánh giá"
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Grid className='gridInput' container mb={2}>
            <Grid item md={6}>
              Số lượng sản phẩm:
            </Grid>
            <Grid item md={6}>
              <input
                type="text"
                placeholder="Số lượng"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        title="Sửa thông tin sản phẩm"
        open={modalEdit}
        onCancel={handleCancelEdit}
        footer={[]}
      >
        <Grid container>
          <Grid item md={3}>
            <img src={productImg} style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item md={9}>
            <Form
              form={form}
              name='formEdit'
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
              }}
              initialValues={{
                name: prod?.name,
                price: prod?.price,
                rating: prod?.rating,
                quantity: prod?.quantity,
              }}
              onFinish={onFinish}
              autoComplete={true}
            >
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="price"
                label="Giá bán"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="rating"
                label="Đánh giá"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="quantity"
                label="Số lượng"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="image"
                label="Hình ảnh"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <input
                  id="imgUpload"
                  accept="image/*"
                  type="file"
                  onChange={handleProductImageUpload}
                  required
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                style={{ width: '100%' }}
              >
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Button sx={{ border: '1px solid #F77A0C', color: '#F77A0C' }}>
                    Hủy
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    sx={{
                      border: '1px solid #F77A0C',
                      backgroundColor: '#F77A0C',
                      color: '#fff',
                      '&: hover': {
                        color: '#F77A0C'
                      }
                    }}
                  >
                    Cập nhật
                  </Button>
                </Box>
              </Form.Item>
            </Form>
          </Grid>
        </Grid>
      </Modal>
    </AUS>
  )
}

export default AdminProduct
