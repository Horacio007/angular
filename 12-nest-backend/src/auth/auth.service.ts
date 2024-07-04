import { BadRequestException, Body, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as brcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload';
import { LoginResponse } from './interfaces/login-response';
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateUserDto } from './dto';

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

  async register(registerUserDto:RegisterUserDto):Promise<LoginResponse> {
    // mi forma -> :)
    // const user:CreateUserDto = registerUserDto;
    // const newUser:User = await this.create(user)
    // const loginDto:LoginDto = {
    //   email: newUser.email,
    //   password: newUser.password
    // }
    
    // return await this.login(loginDto);
    // forma del curso 
    // primera forma con destructuracion
    //const user = await this.create({email:registerUserDto.email, name:registerUserDto.name, password:registerUserDto.password});
    // con una forma de todo se parece y lo acepta
    const user = await this.create(registerUserDto);

    return {
      user: user,
      token: await this.getJwtToken({id: user._id})
    }
    
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
      token: await this.getJwtToken({id: user.id})
    };

    // sin agrupar
    // return {
    //   ...rest,
    //   token: 'ABC-123'
    // };
  }

  getJwtToken(payload:JwtPayload) {
    return this.jwtService.sign(payload);
  }

  findAll():Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(id:string) {
    const user = await this.userModel.findById(id);
    const {password, ...rest} = user.toJSON();
    return rest;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateUserto: UpdateUserDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
