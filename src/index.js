module.exports = function towelSort(matrix) {

  if (matrix == undefined || matrix.length == 0) {
    return [];
  }

  var array = [];
  for (var i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (var j = 0; j < matrix[i].length; j++) {
        array.push(matrix[i][j]);
      }
    }
    if (i % 2 != 0) {
      matrix[i].reverse();
      for (var j = 0; j < matrix[i].length; j++) {
        array.push(matrix[i][j]);
      }
    }
  }
  return array;
}
