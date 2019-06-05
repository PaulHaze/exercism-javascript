/* 
  test('compute cells update value when inputs are changed', () => {
    const inputCell = new InputCell(1);
    const computeCell = new ComputeCell([inputCell], inputs => inputs[0].value + 1);
    inputCell.setValue(3);
    expect(computeCell.value).toEqual(4);
  })
*/

class InputCell {
  constructor(value) {
    this.value = value;
  }
  setValue(newValue) {
    this.value = newValue;
  }
}

class ComputeCell {
  constructor(cells, fn) {
    this.cells = cells || [];
    this.value = fn(cells);
  }
}

export { InputCell, ComputeCell };
