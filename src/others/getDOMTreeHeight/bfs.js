// https://bigfrontend.dev/problem/get-DOM-tree-height
function getHeight(tree) {
  let height = 0;

  if (!tree) return height;

  const queue = [[tree, 1]];

  while (queue.length) {
    const [node, h] = queue.shift();
    height = Math.max(height, h);

    for (const child of node) {
      queue.push([child, h + 1]);
    }
  }

  return height;
}
