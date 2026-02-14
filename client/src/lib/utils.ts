import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合併 Tailwind class names，自動解決衝突
 * @param inputs - class 名稱列表
 * @returns 合併後的 class string
 * @example cn("px-4 py-2", isActive && "bg-gold", "px-6") // → "py-2 px-6 bg-gold"
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
