import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BounceCards = ({
  className = '',
  images,
  containerWidth = 500,
  containerHeight = 250,
  animationDelay = 1,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.5)',
  transformStyles = [],
  enableHover = false
}) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initial animation
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: easeType,
        stagger: animationStagger,
        delay: animationDelay
      }
    );

    // Apply transform styles
    cards.forEach((card, index) => {
      if (transformStyles[index] && card) {
        card.style.transform = transformStyles[index];
      }
    });

    // Hover animations
    if (enableHover) {
      cards.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.1,
              y: -10,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      });
    }
  }, [animationDelay, animationStagger, easeType, transformStyles, enableHover]);

  return (
    <div
      className={`bounce-cards-container ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bounce-card"
          style={{
            position: 'absolute',
            width: '150px',
            height: '200px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            cursor: enableHover ? 'pointer' : 'default',
            zIndex: images.length - index
          }}
        >
          <img
            src={image}
            alt={`Card ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BounceCards;
