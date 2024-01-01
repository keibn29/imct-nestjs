import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UNAUTHORIZED } from 'src/constants/exception';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    if (!user) {
      throw new HttpException(UNAUTHORIZED, UNAUTHORIZED.statusCode);
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
