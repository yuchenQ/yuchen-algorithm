// https://bigfrontend.dev/problem/get-DOM-tree-height
function getHeight(tree) {
  let maxHeight = 0;

  if (!tree) return maxHeight;

  for (const child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(child));
  }

  return maxHeight + 1;
}
