interface ConditionalProps {
  condition: boolean;
  children: React.ReactNode;
}

function Conditional(props: ConditionalProps): React.ReactElement {
  const { condition, children } = props;

  return <>{Boolean(condition) && children}</>;
}

export default Conditional;
