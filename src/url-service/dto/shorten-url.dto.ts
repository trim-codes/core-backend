import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ShortenUrlDto {
  @ApiProperty({
    example: 'https://example.com',
    description: 'The original URL to be shortened',
  })
  @IsString()
  originalUrl: string;

  @ApiProperty({
    example: 10,
    description: 'Optional: Maximum number of clicks before expiration',
    required: false,
  })
  @IsNumber()
  maxClicks?: number;

  @ApiProperty({
    example: 3600,
    description: 'Optional: Expiration time in seconds',
    required: false,
  })
  @IsNumber()
  expiresIn?: number;
}
