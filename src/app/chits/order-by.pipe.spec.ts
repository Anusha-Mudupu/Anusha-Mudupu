/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
