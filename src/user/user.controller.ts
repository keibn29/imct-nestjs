import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { JwtAuthGuard } from 'src/auth/guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  @Get()
  getAllUser() {
    return 'get success';
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log('userData', userData);
    return 'post success';
  }
}
