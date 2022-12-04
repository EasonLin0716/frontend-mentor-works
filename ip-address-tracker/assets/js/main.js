const IP_REGEX =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const EXAMPLE_IP_ADDRESS = "192.212.174.101";
const ipAddressFormInput = document.querySelector(".ip-address__form-input");
const infoIP = document.querySelector(".ip-address__info-ip");
const infoLocation = document.querySelector(".ip-address__info-location");
const infoTimezone = document.querySelector(".ip-address__info-timezone");
const infoIsp = document.querySelector(".ip-address__info-isp");
let map = null;
getInfoByIP(EXAMPLE_IP_ADDRESS);

function handleSubmit(event) {
  event.preventDefault();
  const ip = ipAddressFormInput.value;
  if (!ip || !IP_REGEX.test(ip)) {
    alert("Please enter a valid ip");
    return null;
  }
  getInfoByIP(ip);
}

async function getInfoByIP(ip) {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_RGMuQCWGGJ9ZB78e2qnmDaZw85AUM&ipAddress=${ip}`
    );
    const data = await response.json();
    if (data.location.lat && data.location.lng) {
      const { lat, lng, timezone, city, country } = data.location;
      const { ip, isp } = data;
      const location = `${city}, ${country}`;
      setMapByLatAndLng(lat, lng);
      setIPInfo(ip, location, timezone, isp);
    }
  } catch (error) {
    console.error(error);
  }
}

function setIPInfo(ip = "", location = "", timezone = "", isp = "") {
  infoIP.textContent = ip;
  infoLocation.textContent = location;
  infoTimezone.textContent = timezone;
  infoIsp.textContent = isp;
}

function setMapByLatAndLng(lat = "", lng = "") {
  if (!lat || !lng) return;
  if (map) {
    map.off();
    map.remove();
  }
  map = L.map("mapid", { zoomControl: false }).setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lng]).addTo(map);
}
