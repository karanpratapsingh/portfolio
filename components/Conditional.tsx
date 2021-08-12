interface ConditionalProps {
  condition: any;
  children: React.ReactNode;
}

export function Conditional(props: ConditionalProps): React.ReactElement {
  const { condition, children } = props;

  return <>{Boolean(condition) && children}</>;
}
