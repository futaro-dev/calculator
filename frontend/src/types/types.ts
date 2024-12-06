export interface ButtonProps {
  displayValue: string;
  calculated: boolean;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
}
