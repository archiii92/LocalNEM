import { ApiModelProperty } from '@nestjs/swagger';
import { Length, IsInt, Min, Max, IsPositive, IsString } from 'class-validator';

export class CreateSaleDto {
  @ApiModelProperty()
  @IsString()
  @Length(40, 40)
  readonly sellerId: string;

  @ApiModelProperty()
  @IsInt()
  @Min(100)
  @Max(100000)
  readonly amountToSell: number;
  
  @ApiModelProperty()
  @IsInt()
  @IsPositive()
  @Max(100000)
  readonly unitPrice: number;
}