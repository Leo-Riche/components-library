import { test, expect } from "@playwright/test";

test.describe("Card Visual Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Attendre que la page soit complètement chargée
    await page.waitForSelector("h1");
  });

  test("Card Default apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Default")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-default.png", {
      threshold: 0.5,
    });
  });

  test("Card Primary apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Primary")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-primary.png", {
      threshold: 0.5,
    });
  });

  test("Card Success apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Success")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-success.png", {
      threshold: 0.5,
    });
  });

  test("Card Warning apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Warning")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-warning.png", {
      threshold: 0.5,
    });
  });

  test("Card Danger apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Danger")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-danger.png", {
      threshold: 0.5,
    });
  });

  test("Card Secondary apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Card Secondary")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-secondary.png", {
      threshold: 0.5,
    });
  });

  test("Card Small size apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Petite carte")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-small.png", {
      threshold: 0.5,
    });
  });

  test("Card Medium size apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Carte moyenne")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-medium.png", {
      threshold: 0.5,
    });
  });

  test("Card Large size apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Grande carte")').locator("..");
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-large.png", {
      threshold: 0.5,
    });
  });

  test("Card Clickable apparence", async ({ page }) => {
    const card = await page.locator('h3:has-text("Carte cliquable")').locator("..").first();
    await expect(card).toBeVisible();

    expect(await card.screenshot()).toMatchSnapshot("card-clickable.png", {
      threshold: 0.5,
    });
  });

  test("Toutes les cartes dans la section Card", async ({ page }) => {
    const sectionCard = await page.locator("section").filter({ hasText: "Composant Card" });
    await expect(sectionCard).toBeVisible();

    expect(await sectionCard.screenshot()).toMatchSnapshot("card-section.png", {
      threshold: 0.5,
    });
  });
});
