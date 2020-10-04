<template>
  <div id="grid"></div>
</template>

<script>
import { throttle } from "throttle-debounce";
import { renderGrid } from "@giphy/js-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
const gf = new GiphyFetch("u7RUxgOc7CkLvgEBZK80KQ88BIAmEb2S");

export default {
  created() {
    this.makeGrid(document.querySelector(".grid"));
  },
  methods: {
    fetchGifs(offset) {
      return gf.trending({ offset, limit: 25 });
    },
    makeGrid(targetEl) {
      let fetchGifs = this.fetchGifs();
      const width = 300;

      const render = () => {
        // here is the @giphy/js-components import
        return renderGrid(
          {
            width: innerWidth,
            fetchGifs,
            columns: width < 500 ? 2 : 3,
            gutter: 6,
          },
          targetEl
        );
      };
      const resizeRender = throttle(500, render);
      window.addEventListener("resize", resizeRender, false);
      const remove = render();
      return {
        remove: () => {
          remove();
          window.removeEventListener("resize", resizeRender, false);
        },
      };
    },
  },
};
</script>

<style></style>
