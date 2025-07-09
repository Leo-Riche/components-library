import { test, expect } from '@playwright/test';

test('Button apparence', async ({ page }) => {
  await page.goto('/');
  
  // Test du bouton Primary
  const boutonPrimary = await page.locator('button:has-text("Primary")');
  await expect(boutonPrimary).toBeVisible();
  expect(await boutonPrimary.screenshot()).toMatchSnapshot('button-primary-simple.png', {
    threshold: 0.5,
  });
  
  // Test du bouton Secondary
  const boutonSecondary = await page.locator('button:has-text("Secondary")');
  await expect(boutonSecondary).toBeVisible();
  expect(await boutonSecondary.screenshot()).toMatchSnapshot('button-secondary-simple.png', {
    threshold: 0.5,
  });
  
  // Test du bouton Disabled
  const boutonDisabled = await page.locator('button:has-text("Disabled")');
  await expect(boutonDisabled).toBeVisible();
  expect(await boutonDisabled.screenshot()).toMatchSnapshot('button-disabled-simple.png', {
    threshold: 0.5,
  });
});
