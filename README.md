# Vue 3 Carousel Component

### [Demo](https://ponponda.github.io/vue-next-carousel/)

### Installation

`npm install vue-next-carousel` or  
`yarn add vue-next-carousel`

### Usage

### Global

```
import VCarousel from "vue-next-carousel";

const app = createApp(Dev);
app.use(VCarousel);

app.mount('#app');

```

### Local

```
import { VCarousel } from "vue-next-carousel";
const app = createApp(Dev);
app.component("VCarousel", VCarousel);

app.mount('#app');

```

### Style

`import "vue-next-carousel/dist/style.css"`

### HTML

```
<v-carousel> <!-- Or you named -->
    <div></div>
    <img />
    <!-- <div></div> --> This will be omitted.
</v-carousel>
```

### Configuration

| Property           | Type          | Default                          | Description                                                |
| ------------------ | ------------- | -------------------------------- | ---------------------------------------------------------- |
| autoplay           | Boolean       | true                             | Flag to enable autoplay.                                   |
| autoplayTimeout    | Number(in ms) | 3000                             | Time elapsed before advancing slide in autoplay.           |
| loop               | Boolean       | true                             | Flag to enable continuous loop mode.                       |
| minSwipeDistance   | Nubmer        | 100(in px)                       | Minimum distance for the swipe to trigger a slide advance. |
| slideRemainRatio   | Number        | 0.2(0 <= \$ < 1，for both sides) | The space that remains for the next and prev slide.        |
| transitionDuration | Nubmer(in ms) | 300                              | Slide transition speed.                                    |
