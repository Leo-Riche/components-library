import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
    it('devrait rendre le bouton avec le texte fourni', () => {
        render(<Button>Cliquez-moi</Button>);

        const button = screen.getByRole('button', { name: 'Cliquez-moi' });
        expect(button).toBeInTheDocument();
    });

    it('devrait appliquer les classes CSS primary par défaut', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-blue-600');
        expect(button).toHaveClass('text-white');
    });

    it('devrait appliquer les classes CSS secondary quand variant=secondary', () => {
        render(<Button variant="secondary">Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-transparent');
        expect(button).toHaveClass('text-blue-600');
        expect(button).toHaveClass('border-blue-600');
    });

    it('devrait appliquer les classes CSS medium par défaut', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('px-6');
        expect(button).toHaveClass('py-3');
    });

    it('devrait appliquer les classes CSS large quand size=large', () => {
        render(<Button size="large">Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('px-8');
        expect(button).toHaveClass('py-4');
    });

    it('devrait être désactivé quand disabled=true', () => {
        render(<Button disabled>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
        expect(button).toHaveClass('opacity-60');
        expect(button).toHaveClass('cursor-not-allowed');
    });

    it('devrait appeler onClick quand le bouton est cliqué', () => {
        const mockOnClick = vi.fn();
        render(<Button onClick={mockOnClick}>Test</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('ne devrait pas appeler onClick quand le bouton est désactivé', () => {
        const mockOnClick = vi.fn();
        render(<Button onClick={mockOnClick} disabled>Test</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('devrait appliquer une classe CSS personnalisée', () => {
        render(<Button className="custom-class">Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('custom-class');
    });

    it('devrait avoir les classes de base communes', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('inline-flex');
        expect(button).toHaveClass('items-center');
        expect(button).toHaveClass('justify-center');
        expect(button).toHaveClass('rounded-md');
    });
});
