type InputElementPropsData = {
  label: string;
  type: string;
  forLabel: string;
  placeholder?: string;
  value?: string | number;
  checked?: boolean;
  min?: number;
  max?: number;
  onChange?: (value: string) => void;
};

export const inputElementData: Array<InputElementPropsData> = [
  {
    label: "Demo text",
    type: "text",
    forLabel: "Demo text",
    placeholder: "Type your text here..",
  },
  {
    label: "Demo text",
    type: "text",
    forLabel: "Demo text",
    placeholder: "Type your text here..",
  },
];
