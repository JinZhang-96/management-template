import { CodeModule } from './code.module';

describe('CodeModule', () => {
  let codeModule: CodeModule;

  beforeEach(() => {
    codeModule = new CodeModule();
  });

  it('should create an instance', () => {
    expect(codeModule).toBeTruthy();
  });
});
