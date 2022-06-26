function reducer<T>(data: T[], selector: string): number {
  const total = data.reduce((prev, curr) => {
    return prev + curr[selector];
  }, 0);

  return total;
}

export { reducer };
