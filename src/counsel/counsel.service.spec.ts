import { Test, TestingModule } from '@nestjs/testing';
import { CounselService } from './counsel.service';

describe('CounselService', () => {
  let service: CounselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounselService],
    }).compile();

    service = module.get<CounselService>(CounselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
