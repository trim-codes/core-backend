import { Test, TestingModule } from '@nestjs/testing';
import { UrlServiceController } from './url-service.controller';
import { UrlServiceService } from './url-service.service';

describe('UrlServiceController', () => {
  let controller: UrlServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlServiceController],
      providers: [UrlServiceService],
    }).compile();

    controller = module.get<UrlServiceController>(UrlServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
