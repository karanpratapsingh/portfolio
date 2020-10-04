import { useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

interface IDimensions {
  window: ScaledSize;
  screen: ScaledSize;
}

function useDimensions(type: 'window' | 'screen' = 'window'): ScaledSize {
  const initialDimensions = {
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen')
  };

  const [dimensions, setDimensions] = useState<IDimensions>(initialDimensions);

  const onChange = ({ window, screen }: IDimensions) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return dimensions[type] || Dimensions.get('window');
}

export default useDimensions;