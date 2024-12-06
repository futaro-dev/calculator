const useMapping = () => {
  const operatorToSymbol: { [key: string]: string } = {
    "*": "×",
    "/": "÷",
    "+": "+",
    "-": "-",
  };

  const symbolToOperator: { [key: string]: string } = {
    "×": "*",
    "÷": "/",
  };

  return {
    operatorToSymbol,
    symbolToOperator,
  };
};

export default useMapping;
