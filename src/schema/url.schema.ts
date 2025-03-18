import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { nanoid } from 'nanoid';

export type UrlDocument = Url & Document;

@Schema()
class Url {
  @Prop({ required: true })
  originalUrl: string;

  @Prop({ required: true, unique: true, default: () => nanoid(7) })
  shortUrl: string;

  @Prop({ default: 0 })
  clicks: number;

  @Prop()
  maxClicks: number;

  @Prop()
  expiresAt: Date;
}

const UrlSchema = SchemaFactory.createForClass(Url);
export { UrlSchema, Url };
