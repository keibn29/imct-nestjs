import { HttpStatus } from '@nestjs/common';

export const UNAUTHORIZED = {
  statusCode: HttpStatus.UNAUTHORIZED,
  messageEn: 'Access permission has expired. Please log in again.',
  messageVi: 'Quyền truy cập đã hết hạn. Vui lòng đăng nhập lại.',
};

export const PRISMA_ERROR_MAPPING = {
  P2002: {
    statusCode: HttpStatus.CONFLICT,
    messageEn: 'Email is existed.',
    messageVi: 'Email đã tồn tại.',
  },
  // another code...
};

export const getClassValidatorErrorMapping = (property: string) => ({
  isEmail: {
    statusCode: HttpStatus.BAD_REQUEST,
    messageEn: 'Email is not valid.',
    messageVi: 'Email không hợp lệ.',
  },
  isNotEmpty: {
    statusCode: HttpStatus.BAD_REQUEST,
    messageEn: `${property} should not be empty.`,
    messageVi: `${property} không thể trống.`,
  },
  isNumber: {
    statusCode: HttpStatus.BAD_REQUEST,
    messageEn: `${property} must be a number.`,
    messageVi: `${property} phải là một số.`,
  },
  // another rule...
});

export const INVALID_LOGIN = {
  statusCode: HttpStatus.BAD_REQUEST,
  messageEn: 'Email or password is not correct.',
  messageVi: 'Email hoặc mật khẩu không chính xác.',
};
