import { Test, TestingModule } from '@nestjs/testing';
import { VentaController } from './venta.controller';

describe('VentaController', () => {
  let controller: VentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentaController],
    }).compile();

    controller = module.get<VentaController>(VentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
