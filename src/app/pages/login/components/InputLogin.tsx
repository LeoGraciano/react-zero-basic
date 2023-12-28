import { forwardRef } from "react";

interface IInputLoginProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = forwardRef<HTMLInputElement, IInputLoginProps>(
  (props, ref) => {
    return (
      <label>
        <span>{props.label}:</span>
        <input
          type={props.type}
          ref={ref}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
        />
      </label>
    );
  }
);
