function findSolution(target, baseNumber) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(baseNumber, String(baseNumber));
  }
  
  console.log(findSolution(21, 1));