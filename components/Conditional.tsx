interface ConditionalProps {
  condition: any;
  children: React.ReactNode;
}

function Conditional(props: ConditionalProps): React.ReactElement {
  const { condition, children } = props;

  return <>{Boolean(condition) && children}</>;
}

export default Conditional;
