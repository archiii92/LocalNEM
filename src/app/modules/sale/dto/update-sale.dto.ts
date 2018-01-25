import { ApiModelProperty } from "@nestjs/swagger";
import { IsUUID, IsInt, Min, Max, IsPositive } from "class-validator";

export class UpdateSaleDto {
  @ApiModelProperty()
  @IsUUID()
  readonly id: string;

  @ApiModelProperty()
  @IsInt()
  @Min(100)
  @Max(100000)
  readonly amountToSell: number;
  
  @ApiModelProperty()
  @IsInt()
  @IsPositive()
  readonly unitPrice: number;
}