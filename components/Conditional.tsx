interface ConditionalProps {
  condition: boolean;
  children: React.ReactNode;
}

export function Conditional(props: ConditionalProps): React.ReactElement {
  const { condition, children } = props;

  return <>{condition && children}</>;
}
