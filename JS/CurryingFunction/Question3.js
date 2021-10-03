const mul = (a) => (b) => (c) => a * b * c;

const mul = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
