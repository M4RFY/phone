import { IsEnvBrowser } from "@/utils/eventsHandlers";
import { get, writable } from "svelte/store";

export type VisibilityState = "visible" | "half-visible" | "hidden";

export const CONFIG = writable<any>({
  /** Fallback resource name for when the resource name cannot be found. */
  fallbackResourceName: "phone",

  /** Whether the escape key should make visibility false. */
  allowEscapeKey: true,
});

/**
 * The name of the resource. This is used for the resource manifest.
 * @type {Writable<string>}
 */
export const RESOURCE_NAME = writable<string>(
  (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : get(CONFIG).DEBUG_RESOURCE_NAME,
);

/**
 * Whether the current environment is the browser or the client.
 * @type {Writable<boolean>}
 */
export const IS_BROWSER = writable<boolean>(!(window as any).invokeNative);

/**
 * The visibility state of the phone.
 * @type {Writable<VisibilityState>}
 */
export const VISIBLE = writable<VisibilityState>("hidden");
