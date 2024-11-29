import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';

test('should allow to call `build` and get stats object', async () => {
  const rsbuild = await createRsbuild({
    cwd: __dirname,
  });

  const { stats, close } = await rsbuild.build();

  await close();

  const result = stats?.toJson({ all: true })!;

  expect(result.name).toBe('web');
  expect(result.assets?.length).toBeGreaterThan(0);
});