import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useDimensions = (type: 'screen' | 'window' = 'window') => {
  const [dimensions, setDimensions] = useState<any>({ window, screen });

  const onChange = ({ window, screen }: any) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  const width = dimensions[type].width || Dimensions.get('window').width;
  const height = dimensions[type].height || Dimensions.get('window').height;

  return { width, height };
};

export default useDimensions;