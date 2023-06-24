// Get form and input elements
const donationForm = document.getElementById("donationForm");
const donorNameInput = document.getElementById("donorNameInput");
const restaurantNameInput = document.getElementById("restaurantNameInput");
const dateInput = document.getElementById("dateInput");
const placeInput = document.getElementById("placeInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");

// Add event listener to the donation form
donationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const donorName = donorNameInput.value;
  const restaurantName = restaurantNameInput.value;
  const donationDate = dateInput.value;
  const place = placeInput.value;
  const phoneNumber = phoneNumberInput.value;

  // Store donation information in Firestore collection
  db.collection("donations").add({
    donorName: donorName,
    restaurantName: restaurantName,
    donationDate: donationDate,
    place: place,
    phoneNumber: phoneNumber
  })
  .then((docRef) => {
    // Donation information successfully stored
    console.log("Donation added with ID:", docRef.id);
    // Clear form inputs
    donationForm.reset();
  })
  .catch((error) => {
    // Handle donation submission error
    console.error("Error adding donation:", error);
  });
});
