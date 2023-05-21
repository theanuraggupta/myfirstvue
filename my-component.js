export default {
    data() {
      return { count: 2 }
    },
    template: `<button @click="() => {
        return count++   
    }">
    Count is: {{ count }}
  </button>`
}