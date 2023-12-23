import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, verify } from 'argon2';
import { LoginDTO } from 'src/dto';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(data: LoginDTO) {
    try {
      // register excample
      // const hashedPassword = await hash(data.password);
      // const user = await this.prismaService.user.create({
      //   data: {
      //     email: data.email,
      //     password: hashedPassword,
      //     firstName: '',
      //     lastName: '',
      //     avatar: '',
      //   },
      // });
      // return user;

      const user = await this.prismaService.user.findUnique({
        where: {
          email: data.email,
        },
      });
      const isMatchedUser =
        !!user && (await verify(user?.password, data.password));
      if (!isMatchedUser) {
        throw new ForbiddenException('Email or password is not correct');
      }

      return user;
    } catch (err) {
      if (err.code) {
        throw new ForbiddenException('Error customize');
      }
      return err.response;
    }
  }
}
