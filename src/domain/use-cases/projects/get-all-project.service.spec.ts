import { Test, TestingModule } from '@nestjs/testing';
import { GetAllProjectService } from './get-all-project.service';

describe('GetAllProjectService', () => {
  let service: GetAllProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllProjectService],
    }).compile();

    service = module.get<GetAllProjectService>(GetAllProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
