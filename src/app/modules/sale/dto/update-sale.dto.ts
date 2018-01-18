import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateSaleDto {
  @ApiModelProperty()
  readonly id: string;

  @ApiModelProperty()
  readonly amountToSell: number;
  
  @ApiModelProperty()
  readonly unitPrice: number;
}