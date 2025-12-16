import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: number[]; // expects numbers mapped to /screenshots/screen-{num}.webp
  interval?: number; // autoplay interval in ms
}

const Carousel = ({ images, interval = 4000 }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  };

  const stop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    stop();
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    if (startX == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) prev();
      else next();
    }
    touchStartX.current = null;
    start();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <div
      className={styles.carousel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((num) => (
          <div key={num} className={styles.slide}>
            <img
              src={`/screenshots/screen-${num}.webp`}
              alt={`Screenshot ${num}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button className={`${styles.nav} ${styles.prev}`} onClick={prev} aria-label="Previous slide">‹</button>
      <button className={`${styles.nav} ${styles.next}`} onClick={next} aria-label="Next slide">›</button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
