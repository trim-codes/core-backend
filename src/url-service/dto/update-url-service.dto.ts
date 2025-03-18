import { PartialType } from '@nestjs/swagger';
import { CreateUrlServiceDto } from './create-url-service.dto';

export class UpdateUrlServiceDto extends PartialType(CreateUrlServiceDto) {}
