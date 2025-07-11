import { test, expect } from "@playwright/test";

test.describe("ProgressBar Visual Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Attendre que la page soit complètement chargée
    await page.waitForSelector("h1");
  });

  test("ProgressBar Default apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression par défaut").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-default.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Primary apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression primaire").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-primary.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Success apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression de succès").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-success.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Warning apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression d'avertissement").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-warning.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Danger apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression de danger").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-danger.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Secondary apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression secondaire").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-secondary.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Small size apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Petite barre").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-small.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Medium size apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Barre moyenne").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-medium.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Large size apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Grande barre").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-large.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Interactive apparence", async ({ page }) => {
    const progressBar = await page.locator("text=Progression contrôlable").locator("..");
    await expect(progressBar).toBeVisible();

    expect(await progressBar.screenshot()).toMatchSnapshot("progressbar-interactive.png", {
      threshold: 0.5,
    });
  });

  test("ProgressBar Interactive avec boutons", async ({ page }) => {
    // Tester l'interaction avec les boutons
    const incrementButton = await page.locator('button:has-text("+ 10%")');
    await incrementButton.click();

    const progressSection = await page.locator("text=Progression contrôlable").locator("../..");
    await expect(progressSection).toBeVisible();

    expect(await progressSection.screenshot()).toMatchSnapshot("progressbar-after-increment.png", {
      threshold: 0.5,
    });
  });

  test("Toutes les ProgressBar dans la section", async ({ page }) => {
    const sectionProgressBar = await page
      .locator("section")
      .filter({ hasText: "Composant ProgressBar" });
    await expect(sectionProgressBar).toBeVisible();

    expect(await sectionProgressBar.screenshot()).toMatchSnapshot("progressbar-section.png", {
      threshold: 0.5,
    });
  });
});
