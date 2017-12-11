import { RetroItemSorter } from './retro-item-sorter';

describe('RetroItemSorter', () => {
  it('create an instance', () => {
    const pipe = new RetroItemSorter();
    expect(pipe).toBeTruthy();
  });
});
