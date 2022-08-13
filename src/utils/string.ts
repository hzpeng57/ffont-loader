export const randomStr = (num = 5) => {
  if (num < 8) {
    return Math.random().toString(36).slice(-num);
  }
  throw new Error('input digits must less than 8');
};
