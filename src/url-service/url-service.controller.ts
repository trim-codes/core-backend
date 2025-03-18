import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiProperty } from '@nestjs/swagger';
import { UrlService } from './url-service.service';
import { ShortenUrlDto } from './dto/shorten-url.dto';



@Controller('url-service')
export class UrlServiceController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body() body: ShortenUrlDto) {
    return this.urlService.shortenUrl(body.originalUrl);
  }

  @Get(':shortUrl')
  async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const originalUrl = await this.urlService.getOriginalUrl(shortUrl);
    console.log(`Redirecting to: ${originalUrl}`);
    return res.redirect(originalUrl);
  }

  @Get('stats/:shortUrl')
  async stats(@Param('shortUrl') shortUrl: string) {
    return this.urlService.getUrlStats(shortUrl);
  }
}
