"use script";

btn. onclick = async function getActivity() {
  const res = await fetch("https://www.boredapi.com/api/activity");

const data = await res.json();

  console.log(data);
  console.log(data.activity);
  console.log(data.type);
  const activity = document.getElementById("activity");
  const type = document.getElementById("type");
  activity.innerHTML = data.activity;
  type.innerHTML = data.type;

}



