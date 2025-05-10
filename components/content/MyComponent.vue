<template>
  <button class="pink-button">hello</button>
</template>

<script>
export default {
  name: "MyComponent",
};
</script>

<style scoped>
.pink-button {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.pink-button:hover {
  background-color: #ff1493;
}
</style>
