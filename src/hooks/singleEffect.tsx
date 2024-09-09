import { useEffect, useRef, DependencyList } from 'react';

type EffectCallback = () => void | (() => void | undefined);

export const useSingleEffect = (
  callback: EffectCallback,
  dependencies: DependencyList
) => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (effectCalled.current) return;
    effectCalled.current = true;

    callback();
  }, dependencies);
};
