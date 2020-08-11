/**
 * @template T
 * @param {Array<T>} arrayA
 * @param {Array<T>} arrayB
 * @returns {Array<T>}
 */
function findDifferentElements<T>(arrayA: Array<T>, arrayB: Array<T>): Array<T> {
  const mapA: Map<T, undefined> = new Map();
  const mapB: Map<T, undefined> = new Map();

  for (const ele of arrayA) {
    mapA.set(ele, undefined);
  }

  for (const ele of arrayB) {
    mapB.set(ele, undefined);
  }

  for (const key of mapA.keys()) {
    if (mapB.has(key)) {
      mapA.delete(key);
      mapB.delete(key);
    }
  }

  return [...mapA.keys(), ...mapB.keys()];
}

interface Params {
  [key: string]: object;
  input: {
    [key: string]: string | (() => void);
    name: string;
    onChange: () => void;
    value: string;
  };
  meta: object;

}
