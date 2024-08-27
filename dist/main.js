document.addEventListener('DOMContentLoaded', function () {
    const editAddressBtn = document.getElementById('editAddressBtn');
    const modal = document.getElementById('addressModal');
    const closeModal = document.getElementById('closeModal');
    const saveAddressBtn = document.getElementById('saveAddressBtn');
  
    // Open the modal when the "Edit" button is clicked
    editAddressBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    // Close the modal when the close icon is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Save the address and close the modal
    saveAddressBtn.addEventListener('click', function () {
      // Fetch values from modal inputs
      const name = document.getElementById('modal_name').value;
      const phone = document.getElementById('modal_phone').value;
      const division = document.getElementById('modal_division').value;
      const district = document.getElementById('modal_district').value;
      const address = document.getElementById('modal_address').value;
  
      // Here, you can add code to update the address display or send the data to your server
  
      // Close the modal
      modal.style.display = 'none';
    });
  
    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  