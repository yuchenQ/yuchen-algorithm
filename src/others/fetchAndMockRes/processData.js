const dataset = [
  { shapeId: "basic-shape", color: { r: 1, g: 1, b: 1 }, children: [] },
  {
    shapeId: "duck",
    color: { r: 1, g: 1, b: 1 },
    children: [
      {
        shapeId: "duck-bill",
        color: { r: 1, g: 1, b: 1 },
        children: [
          {
            shapeId: "duck-bill-1",
            color: { r: 1, g: 1, b: 1 },
            children: [],
          },
          {
            shapeId: "duck-bill-2",
            color: { r: 1, g: 1, b: 1 },
            children: [],
          },
        ],
      },
      { shapeId: "duck-body", color: { r: 1, g: 1, b: 1 }, children: [] },
      { shapeId: "duck-legs", color: { r: 1, g: 1, b: 1 }, children: [] },
    ],
  },
];

const mockFetch = () => Promise.resolve(dataset);

const calcAverageByRecursion = (dataset) => {
  const result = {
    r: 0,
    g: 0,
    b: 0,
    count: 0,
  };

  const recursion = (shape) => {
    const { color, children } = shape;

    result.r += color.r;
    result.g += color.g;
    result.b += color.b;
    result.count += 1;

    if (children.length !== 0) {
      for (const child of children) {
        recursion(child);
      }
    }
  };

  for (const shape of dataset) {
    recursion(shape);
  }

  result.r = Math.round(result.r / result.count);
  result.g = Math.round(result.g / result.count);
  result.b = Math.round(result.b / result.count);

  return result;
};

const calcAverage = (dataset) => {
  const result = {
    r: 0,
    g: 0,
    b: 0,
    count: 0,
  };

  const queue = [...dataset];

  while(queue.length) {
    const shape = queue.shift();

    const { color, children } = shape;

    result.r += color.r;
    result.g += color.g;
    result.b += color.b;
    result.count += 1;

    if (children.length) {
      queue.push(...children);
    }
  }

  result.r = Math.round(result.r / result.count);
  result.g = Math.round(result.g / result.count);
  result.b = Math.round(result.b / result.count);

  return result;
}

console.log(calcAverageByRecursion(dataset));
console.log(calcAverage(dataset));

mockFetch().then((dataset) => {
  console.log(calcAverageByRecursion(dataset));
});
mockFetch().then((dataset) => {
  console.log(calcAverage(dataset));
});
