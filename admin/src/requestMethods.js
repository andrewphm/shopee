import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTdiYzg5Yzc4NGRmNjgwNDU4ZTJkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQ5MDM5MSwiZXhwIjoxNjM4NzQ5NTkxfQ.nHyzFymtL61ZK1T9t7-TZbEhaWQ0hxaGNdBHSup2MMs';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
