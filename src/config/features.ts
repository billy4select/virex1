/**
 * Feature Flags Configuration
 *
 * @description
 * Toggle features on/off to customize which sections are enabled.
 * These flags control navigation visibility and section rendering.
 */

import type { FeatureFlags } from '../lib/types';

/** Feature flags to enable/disable site sections */
export const features: FeatureFlags = {
  /** Enable blog section and /blog routes */
  blog: true,

  /** 已移除 /docs 路由（內容併入教學與文章）；保留旗標供舊設定相容 */
  docs: false,

  /** Enable changelog section and /changelog route */
  changelog: true,

  /** Enable testimonials section and /testimonials route */
  testimonials: true,

  /** Enable roadmap section and /roadmap route */
  roadmap: true,
};
