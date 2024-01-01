import { HttpException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { keys } from 'lodash';
import { getClassValidatorErrorMapping } from 'src/constants/exception';

export const exceptionFactory = (errors: ValidationError[]) => {
  const errorType = keys(errors[0].constraints)[0];
  const errorConfig = getClassValidatorErrorMapping(errors[0].property)[
    errorType
  ];

  throw new HttpException(errorConfig, errorConfig.statusCode);
};
