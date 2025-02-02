import React, { useEffect, useRef, useState } from 'react';

const BGCircle = ({ numberOfCircles, speed, diameter }) => {
    const [circles, setCircles] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current.parentElement;
        const { clientWidth, clientHeight } = container;

        const newCircles = Array.from({ length: numberOfCircles }).map(() => {
            return {
                x: Math.random() * clientWidth,
                y: Math.random() * clientHeight,
                dx: (Math.random() * 2 - 1) * speed,
                dy: (Math.random() * 2 - 1) * speed,
                radius: diameter / 2, // Радиус рассчитывается из диаметра
            };
        });

        setCircles(newCircles);

        const animate = () => {
            newCircles.forEach((circle) => {
                circle.x += circle.dx;
                circle.y += circle.dy;

                // Отскок от краёв
                if (circle.x + circle.radius > clientWidth || circle.x - circle.radius < 0) {
                    circle.dx *= -1; // Перевернуть направление x
                }
                if (circle.y + circle.radius > clientHeight || circle.y - circle.radius < 0) {
                    circle.dy *= -1; // Перевернуть направление y
                }
            });

            setCircles([...newCircles]);
            requestAnimationFrame(animate);
        };

        animate();
    }, [numberOfCircles, speed, diameter]);

    return (
        <React.Fragment>
            <div
                ref={containerRef}
            ></div>
                {circles.map((circle, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: circle.x - circle.radius,
                            top: circle.y - circle.radius,
                            borderRadius: '50%',
                            pointerEvents: 'none', // Игнорировать события мыши, чтобы круги не перекрывали контент
                            zIndex: -1,
                            boxShadow: `0 0 128px ${circle.radius}px #FF5708`,
                        }}
                    />
                ))}
            
        </React.Fragment>
    );
};

export default BGCircle;