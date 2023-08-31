import { useEffect, useRef, RefObject } from 'react';

export const useOutsideClick = (
  $ref: RefObject<HTMLElement | Document>,
  handler: (e: MouseEvent) => void,
  isListening: boolean = true
) => {
  const $mouseDownRef = useRef(false);

  useEffect(() => {
    if (!isListening) return;
    const $el = $ref.current ?? document;

    const onMouseDown: any = (e: MouseEvent) => {
      $mouseDownRef.current = true;
    };

    const onMouseUp: any = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isValid = $el.contains?.(target);
      if ($mouseDownRef.current && isValid) {
        $mouseDownRef.current = false;
        handler(e);
      }
    };

    $el.addEventListener('mousedown', onMouseDown, true);
    $el.addEventListener('mouseup', onMouseUp, true);
    return () => {
      $el.removeEventListener('mousedown', onMouseDown, true);
      $el.removeEventListener('mouseup', onMouseUp, true);
    };
  }, [$ref, isListening, handler]);
};
