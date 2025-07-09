import { test, expect } from '@playwright/test';

test.describe('Button Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Attendre que la page soit complètement chargée
    await page.waitForSelector('h1');
  });

  test('Button Primary apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Primary")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Primary
    expect(await bouton.screenshot()).toMatchSnapshot('button-primary.png', {
      threshold: 0.5,
    });
  });

  test('Button Secondary apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Secondary")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Secondary
    expect(await bouton.screenshot()).toMatchSnapshot('button-secondary.png', {
      threshold: 0.5,
    });
  });

  test('Button Disabled apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Disabled")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Disabled
    expect(await bouton.screenshot()).toMatchSnapshot('button-disabled.png', {
      threshold: 0.5,
    });
  });

  test('Button Small apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Small")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Small
    expect(await bouton.screenshot()).toMatchSnapshot('button-small.png', {
      threshold: 0.5,
    });
  });

  test('Button Medium apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Medium")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Medium
    expect(await bouton.screenshot()).toMatchSnapshot('button-medium.png', {
      threshold: 0.5,
    });
  });

  test('Button Large apparence', async ({ page }) => {
    const bouton = await page.locator('button:has-text("Large")');
    await expect(bouton).toBeVisible();

    // Capture d'écran du bouton Large
    expect(await bouton.screenshot()).toMatchSnapshot('button-large.png', {
      threshold: 0.5,
    });
  });

  test('Tous les boutons dans la section Button', async ({ page }) => {
    const sectionButton = await page.locator('section').filter({ hasText: 'Composant Button' });
    await expect(sectionButton).toBeVisible();

    // Capture d'écran de toute la section des boutons
    expect(await sectionButton.screenshot()).toMatchSnapshot('button-section.png', {
      threshold: 0.5,
    });
  });
});
