'use client';

import { useEffect, useRef } from 'react';
import { CodePiece } from './types/types';
import { codeSnippets } from './code-snippets';

export const CanvasBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const codePieces: CodePiece[] = [];

      const createCodePieces = () => {
         const pieceCount = Math.min(Math.floor(window.innerWidth / 20), 50);

         for (let i = 0; i < pieceCount; i++) {
            const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            const size = Math.random() * 10 + 10;

            codePieces.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height,
               speedX: (Math.random() - 0.5) * 0.5,
               speedY: (Math.random() - 0.5) * 0.5,
               text,
               size,
               opacity: Math.random() * 0.5 + 0.1,
               color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.random() * 0.5 + 0.2})`,
               rotation: Math.random() * Math.PI * 2,
               rotationSpeed: (Math.random() - 0.5) * 0.01,
            });
         }
      };

      const animate = () => {
         requestAnimationFrame(animate);
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         codePieces.forEach((piece) => {
            piece.x += piece.speedX;
            piece.y += piece.speedY;
            piece.rotation += piece.rotationSpeed;

            if (piece.x < -100) piece.x = canvas.width + 100;
            if (piece.x > canvas.width + 100) piece.x = -100;
            if (piece.y < -50) piece.y = canvas.height + 50;
            if (piece.y > canvas.height + 50) piece.y = -50;

            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation);
            ctx.font = `${piece.size}px monospace`;
            ctx.fillStyle = piece.color;
            ctx.globalAlpha = piece.opacity;
            ctx.fillText(piece.text, 0, 0);
            ctx.restore();
         });

         ctx.globalAlpha = 0.2;
         codePieces.forEach((piece, i) => {
            codePieces.slice(i + 1).forEach((otherPiece) => {
               const dx = piece.x - otherPiece.x;
               const dy = piece.y - otherPiece.y;
               const distance = Math.sqrt(dx * dx + dy * dy);

               if (distance < 150) {
                  ctx.beginPath();
                  ctx.moveTo(piece.x, piece.y);
                  ctx.lineTo(otherPiece.x, otherPiece.y);
                  ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 150)})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
               }
            });
         });
         ctx.globalAlpha = 1;
      };

      const handleResize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         codePieces.length = 0;
         createCodePieces();
      };

      createCodePieces();
      animate();

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />;
};
