import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

/**
 * Custom cursor com dois elementos:
 * - .cursor-dot: segue o mouse instantaneamente (posição real)
 * - .cursor-ring: segue com inércia via rAF (efeito de lag premium)
 *
 * Usa delegação de eventos com mouseenter/mouseleave para evitar
 * o falso-negativo que ocorria com mouseout ao sair de elementos filhos.
 */
const Cursor = () => {
  // dotPos: atualizado diretamente no mousemove (sem estado React para máx. performance)
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // ring pos via rAF — usamos refs para evitar re-renders por frame
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const LERP = 0.12; // fator de interpolação: 0 = sem lag, 1 = imóvel

    // Atualiza o dot diretamente no DOM (sem re-render) para máx. fluidez
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Loop de animação: ring segue o mouse com inércia (lerp)
    const animateRing = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * LERP;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    // Hover: usa mouseover com verificação de relatedTarget para evitar
    // falso-negativo ao transitar entre elementos filhos do mesmo alvo.
    const HOVER_SELECTOR = 'a, button, [role="button"], .faq-item, .collection-card';

    const handleMouseOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(true);
    };

    const handleMouseOut = (e) => {
      // Só desativa se o cursor realmente saiu do elemento (não para um filho)
      if (
        e.target.closest(HOVER_SELECTOR) &&
        !e.relatedTarget?.closest(HOVER_SELECTOR)
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-ring ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
      />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default Cursor;
