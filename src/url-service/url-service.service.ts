import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import { Url, UrlDocument } from '../schema/url.schema';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async shortenUrl(
    originalUrl: string,
    maxClicks?: number,
    expiresIn?: number,
  ): Promise<Url> {
    const shortUrl = nanoid(7);
    const expirationDate = expiresIn
      ? new Date(Date.now() + expiresIn * 1000)
      : null;
    return this.urlModel.create({
      originalUrl,
      shortUrl,
      maxClicks: maxClicks || null,
      expiresAt: expirationDate,
      clicks: 0,
    });
  }

  async getOriginalUrl(shortUrl: string): Promise<string> {
    const url = await this.urlModel.findOneAndUpdate(
      {
        shortUrl,
        $or: [{ expiresAt: null }, { expiresAt: { $gt: new Date() } }],
      },
      { $inc: { clicks: 1 } },
      { new: true },
    );
    if (!url || (url.maxClicks && url.clicks > url.maxClicks)) {
      throw new NotFoundException('URL not found or expired');
    }
    return url.originalUrl;
  }

  async getUrlStats(shortUrl: string): Promise<Url> {
    const url = await this.urlModel.findOne({ shortUrl });
    if (!url) throw new NotFoundException('URL not found');
    return url;
  }
}
