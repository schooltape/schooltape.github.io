import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleUnseenRoutes: "ignore",
      handleHttpError: ({ path, referrer, message }) => {
        if (path === "/wiki" || path === "/wiki/") return;

        throw new Error(message);
      },
    },
  },
};

export default config;
