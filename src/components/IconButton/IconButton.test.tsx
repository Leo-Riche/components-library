import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IconButton } from './IconButton';

describe('IconButton Component', () => {
  it('devrait rendre le bouton avec l\'icône fournie', () => {
    render(<IconButton icon="❤️" ariaLabel="J'aime" />);

    const button = screen.getByRole('button', { name: 'J\'aime' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('❤️');
  });

  it('devrait appliquer les classes CSS primary par défaut', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveClass('text-white');
  });

  it('devrait appliquer les classes CSS secondary quand variant=secondary', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" variant="secondary" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-blue-600');
    expect(button).toHaveClass('border-blue-600');
  });

  it('devrait appliquer les classes CSS medium par défaut', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-10');
    expect(button).toHaveClass('h-10');
  });

  it('devrait appliquer les classes CSS large quand size=large', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" size="large" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-12');
    expect(button).toHaveClass('h-12');
  });

  it('devrait être désactivé quand disabled=true', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-60');
    expect(button).toHaveClass('cursor-not-allowed');
  });

  it('devrait appeler onClick quand le bouton est cliqué', () => {
    const mockOnClick = vi.fn();
    render(<IconButton icon="⭐" ariaLabel="Favoris" onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('ne devrait pas appeler onClick quand le bouton est désactivé', () => {
    const mockOnClick = vi.fn();
    render(<IconButton icon="⭐" ariaLabel="Favoris" onClick={mockOnClick} disabled />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('devrait appliquer une classe CSS personnalisée', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" className="custom-class" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('devrait avoir l\'attribut aria-label correct', () => {
    render(<IconButton icon="🗑️" ariaLabel="Supprimer" />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Supprimer');
  });

  it('devrait avoir la forme circulaire', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('aspect-square');
  });

  it('devrait avoir les classes de base communes', () => {
    render(<IconButton icon="⭐" ariaLabel="Favoris" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('items-center');
    expect(button).toHaveClass('justify-center');
  });
});
