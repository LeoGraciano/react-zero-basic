interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick: () => void;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
