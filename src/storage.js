// The game was written as a Claude artifact, where `window.storage` is a
// built-in key/value store. On GitHub Pages there is no such thing, so this
// provides the same promise-based API on top of the browser's localStorage.
// Saves stay on the device and browser the game is played on.
const PREFIX = "turneytactics:";

function store() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

if (typeof window !== "undefined" && !window.storage) {
  window.storage = {
    async get(key) {
      const s = store();
      const value = s ? s.getItem(PREFIX + key) : null;
      return value === null ? null : { key, value, shared: false };
    },
    async set(key, value) {
      const s = store();
      if (!s) throw new Error("Storage unavailable");
      s.setItem(PREFIX + key, String(value));
      return { key, value, shared: false };
    },
    async delete(key) {
      const s = store();
      if (s) s.removeItem(PREFIX + key);
      return { key, deleted: true, shared: false };
    },
    async list(prefix = "") {
      const s = store();
      const keys = [];
      if (s) {
        for (let i = 0; i < s.length; i++) {
          const k = s.key(i);
          if (k && k.startsWith(PREFIX + prefix)) keys.push(k.slice(PREFIX.length));
        }
      }
      return { keys, prefix, shared: false };
    },
  };
}
