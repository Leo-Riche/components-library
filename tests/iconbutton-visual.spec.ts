import { test, expect } from "@playwright/test";

test.describe("IconButton Visual Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Attendre que la page soit complètement chargée
    await page.waitForSelector("h1");
  });

  test("IconButton Primary apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="J\'aime"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Primary
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-primary.png", {
      threshold: 0.5,
    });
  });

  test("IconButton Secondary apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="Favoris"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Secondary
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-secondary.png", {
      threshold: 0.5,
    });
  });

  test("IconButton Disabled apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="Supprimer"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Disabled
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-disabled.png", {
      threshold: 0.5,
    });
  });

  test("IconButton Small apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="Email"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Small
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-small.png", {
      threshold: 0.5,
    });
  });

  test("IconButton Medium apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="Téléphone"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Medium
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-medium.png", {
      threshold: 0.5,
    });
  });

  test("IconButton Large apparence", async ({ page }) => {
    const iconButton = await page.locator('button[aria-label="Localisation"]');
    await expect(iconButton).toBeVisible();

    // Capture d'écran du IconButton Large
    expect(await iconButton.screenshot()).toMatchSnapshot("iconbutton-large.png", {
      threshold: 0.5,
    });
  });

  test("Tous les IconButtons dans la section IconButton", async ({ page }) => {
    const sectionIconButton = await page
      .locator("section")
      .filter({ hasText: "Composant IconButton" });
    await expect(sectionIconButton).toBeVisible();

    // Capture d'écran de toute la section des IconButtons
    expect(await sectionIconButton.screenshot()).toMatchSnapshot("iconbutton-section.png", {
      threshold: 0.5,
    });
  });
});
