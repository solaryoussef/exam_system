import { describe, it, expect } from 'vitest';
import { calculateWinner } from './calculateWinner.js';

describe('calculateWinner', () => {
  it('identifies horizontal winner', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('identifies vertical winner', () => {
    const squares = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(calculateWinner(squares)).toBe('O');
  });

  it('returns null when no winner', () => {
    const squares = Array(9).fill(null);
    expect(calculateWinner(squares)).toBe(null);
  });
});
