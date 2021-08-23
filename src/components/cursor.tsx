import { useReducer, useEffect, CSSProperties, DOMElement } from 'react';

const Cursor = () => {
  const [styles, setStyles] = useReducer(
    (styles: CSSProperties, newStyles: CSSProperties) => ({
      ...styles,
      ...newStyles,
    }),
    {
      width: '20px',
      height: '20px',
      border: '2px solid black',
      borderRadius: '100%',
      position: 'fixed',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 9999,
      //mixBlendMode: 'difference',
      left: '0px',
      top: '0px',
      transition: 'all 150ms ease',
      transitionProperty:
        'opacity, background-color, transform, mix-blend-mode',
      opacity: 1,
      backgroundColor: 'transparent',
      backgroundImage: '',
      // backgroundImage: "url(https://i.giphy.com/media/o9ngTPVYW4qo8/giphy.webp)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }
  );

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => {
      removeEventListeners();
    };
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    setStyles({ top: `${e.clientY}px`, left: `${e.clientX}px` });
  };

  const onMouseLeave = () => {
    setStyles({ opacity: 0 });
  };

  const onMouseEnter = () => {
    setStyles({ opacity: 1 });
  };

  const onMouseDown = () => {
    setStyles({
      backgroundColor: '#fefefe',
      transform: 'translate(-50%, -50%) scale(0.8)',
    });
  };

  const onMouseUp = () => {
    setStyles({
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%)',
    });
  };

  const onMouseOverElement = (el: any) => {
    setStyles({
      border: '0px',
      height: '100px',
      width: '100px',
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%) scale(2)',
      backgroundImage: `url(${el.getAttribute('data-cursor-image')})`,
    });
  };

  const onMouseOutElement = () => {
    setStyles({
      height: '20px',
      width: '20px',
      border: '2px solid black',
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%)',
      backgroundImage: '',
    });
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('.cursor-react').forEach((el) => {
      el.addEventListener('mouseover', () => {
        onMouseOverElement(el);
      });

      el.addEventListener('mouseout', () => {
        onMouseOutElement();
      });
    });
  };

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return <div style={styles} />;
};

export default Cursor;
