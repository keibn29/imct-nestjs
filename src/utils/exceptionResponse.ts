import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PRISMA_ERROR_MAPPING } from 'src/constants/exception';

@Injectable()
export class ExceptionService {
  constructor(private error: any) {
    this.generateResponseByError();
  }

  generateResponseByError() {
    const prismaError = PRISMA_ERROR_MAPPING[this.error?.code];
    if (prismaError) {
      throw new HttpException(prismaError, prismaError.statusCode);
    }

    throw this.error;
  }
}
