type ElementType = any;

type NodeType = {
  element: ElementType,
  next: NodeType,
};

type LinkedListType = {
  count: number,
  head: NodeType,
  equalsFn: (ele1: ElementType, ele2: ElementType) => boolean,
  isEmpty: () => boolean,
  size: () => number,
  toString: () => string,
  indexOf: (element: ElementType) => number,
  getNodeAt: (index: number) => NodeType | undefined,
  append: (element: ElementType) => boolean,
  prepend: (element: ElementType) => boolean,
  insert: (element: ElementType, index: number) => boolean,
  removeAt: (index: number) => NodeType | null,
  remove: (element: ElementType) => NodeType | null,
};
