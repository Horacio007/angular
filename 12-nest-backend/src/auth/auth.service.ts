import { BadRequestException, Body, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as brcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload';
import { LoginResponse } from './interfaces/login-response';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  constructor (
    @InjectModel(User.name) 
    private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async create(createUserDto: CreateUserDto):Promise<User> {
    try {
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: brcryptjs.hashSync(password, 10),
        ...userData
      });

      await newUser.save();
      const {password:_, ...user} = newUser.toJSON();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happen!!!')
    }
  }

  async register(registerDto:RegisterDto):Promise<LoginResponse> {
    const user:CreateUserDto = registerDto;
    const newUser:User = await this.create(user)
    const loginDto:LoginDto = {
      email: newUser.email,
      password: newUser.password
    }
    
    return await this.login(loginDto);
  }

  async login(loginDto:LoginDto):Promise<LoginResponse> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({email});
    if(!user) {
      throw new UnauthorizedException('Not valid credentials! email')
    }

    if(!brcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Not valid credentials! paswor')
    }

    const { password:_, ...rest } = user.toJSON();

    // agrupado
    return {
      user: rest,
      token: await this.getJWToken({id: user.id})
    };

    // sin agrupar
    // return {
    //   ...rest,
    //   token: 'ABC-123'
    // };
  }

  getJWToken(payload:JwtPayload) {
    return this.jwtService.signAsync(payload);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateUserto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
