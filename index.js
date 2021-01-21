/*document.addEventListener('click', (e) => {
  e.preventDefault();
});
Math.E.toExponential(10, number);*/
const getUser = async () => {
  try {
    const res = await fetch('https://vk.com');
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};
getUser();
