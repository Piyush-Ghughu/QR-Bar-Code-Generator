// Get necessary elements from the DOM
const inputField = document.getElementById('data');
const sizeControl = document.getElementById('size-control');
const generateButton = document.getElementById('generate');
const downloadButton = document.getElementById('download');
const barcodeElement = document.getElementById('barcode');

// Function to generate the barcode based on user input
const generateBarcode = () => {
    const data = inputField.value;
    JsBarcode(barcodeElement, data, {
        format: "CODE128",
    });
};

// Function to update barcode size based on the size controller value
const updateBarcodeSize = () => {
    const size = sizeControl.value;
    barcodeElement.setAttribute('width', size);
    barcodeElement.setAttribute('height', size / 2); // Adjust height to maintain aspect ratio
};

// Function to download the barcode as an image
const downloadBarcode = () => {
    const dataUrl = barcodeElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'barcode.png';
    link.click();
};

// Add event listeners
generateButton.addEventListener('click', generateBarcode);
sizeControl.addEventListener('input', updateBarcodeSize);
downloadButton.addEventListener('click', downloadBarcode);

// Generate the initial barcode with default data
generateBarcode();