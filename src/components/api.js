// api.js
import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // 서버의 기본 URL 설정
});

export default api;
