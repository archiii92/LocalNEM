import { Pipe, PipeTransform, BadRequestException } from '@nestjs/common';
import { ArgumentMetadata } from '@nestjs/common/interfaces';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length) {
      console.log(errors);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}