import { Module } from '@nestjs/common';
import { UrlServiceController } from './url-service.controller';
import { UrlService } from './url-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from 'src/schema/url.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Url', schema: UrlSchema }]),
  ],
  controllers: [UrlServiceController],
  providers: [UrlService],
})
export class UrlServiceModule {}
